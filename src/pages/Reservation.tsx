import React, { useState } from 'react';
import { Calendar, Clock, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { lookupPostalCode } from '../utils/postalCode';

interface ReservationFormData {
  firstName: string;
  lastName: string;
  furiganaFirst: string;
  furiganaLast: string;
  email: string;
  confirmEmail: string;
  postalCode: string;
  prefecture: string;
  city: string;
  address: string;
  phone1: string;
  phone2: string;
  checkInDate: string;
  adults: number;
  children: number;
  adultMeal: string;
  childMeal: string;
  pets: boolean;
  roomType: string;
  bathType: string;
  parkingType: string;
  notes: string;
}

const Reservation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ReservationFormData>({
    firstName: '',
    lastName: '',
    furiganaFirst: '',
    furiganaLast: '',
    email: '',
    confirmEmail: '',
    postalCode: '',
    prefecture: '',
    city: '',
    address: '',
    phone1: '',
    phone2: '',
    checkInDate: '',
    adults: 2,
    children: 0,
    adultMeal: '和食',
    childMeal: '子供用和食',
    pets: false,
    roomType: '和室',
    bathType: '大浴場',
    parkingType: '一般駐車場',
    notes: ''
  });

  const [isLookingUp, setIsLookingUp] = useState(false);
  const [lookupError, setLookupError] = useState('');
  const [submitError, setSubmitError] = useState('');

  const handlePostalCodeChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, postalCode: value }));
    setLookupError('');

    if (value.replace(/-/g, '').length === 7) {
      setIsLookingUp(true);
      try {
        const address = await lookupPostalCode(value);
        if (address) {
          setFormData(prev => ({
            ...prev,
            prefecture: address.prefecture,
            city: address.city + address.street
          }));
        } else {
          setLookupError('郵便番号が見つかりませんでした');
        }
      } catch (error) {
        setLookupError('住所の検索中にエラーが発生しました');
      } finally {
        setIsLookingUp(false);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    try {
      const formElement = e.target as HTMLFormElement;
      const data = new FormData(formElement);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as any).toString()
      });

      if (response.ok) {
        navigate('/thanks', { state: { reservationData: formData } });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('予約の送信中にエラーが発生しました。もう一度お試しください。');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      
      <div className="pt-24 pb-12 bg-stone-800">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-medium text-white text-center font-mincho">ご予約フォーム</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {submitError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-600">{submitError}</p>
            </div>
          )}

          <div className="mb-8">
            <div className="flex items-center text-amber-600 mb-4">
              <Info className="w-5 h-5 mr-2" />
              <p className="text-sm">必須項目は<span className="text-red-500">*</span>で表示されています</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            name="reservation"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="reservation" />
            <p className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>

            {/* お名前 */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-stone-800 border-b pb-2 font-mincho">お客様情報</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    姓<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    名<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    セイ<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="furiganaLast"
                    required
                    className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    value={formData.furiganaLast}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    メイ<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="furiganaFirst"
                    required
                    className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    value={formData.furiganaFirst}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* 連絡先 */}
            <div className="space-y-4 mt-8">
              <h3 className="text-lg font-medium text-stone-800 border-b pb-2 font-mincho">連絡先</h3>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">
                  メールアドレス<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">
                  メールアドレス（確認用）<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="confirmEmail"
                  required
                  className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  value={formData.confirmEmail}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    電話番号（携帯番号など連絡のとれる番号）<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone1"
                    required
                    className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    value={formData.phone1}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    電話番号（ご自宅の番号など）
                  </label>
                  <input
                    type="tel"
                    name="phone2"
                    className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    value={formData.phone2}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* 住所 */}
            <div className="space-y-4 mt-8">
              <h3 className="text-lg font-medium text-stone-800 border-b pb-2 font-mincho">ご住所</h3>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">
                  郵便番号<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="postalCode"
                    required
                    placeholder="123-4567"
                    className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    value={formData.postalCode}
                    onChange={handlePostalCodeChange}
                  />
                  {isLookingUp && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-amber-500 border-t-transparent"></div>
                    </div>
                  )}
                </div>
                {lookupError && (
                  <p className="mt-1 text-sm text-red-500">{lookupError}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    都道府県<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="prefecture"
                    required
                    className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    value={formData.prefecture}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    市区町村<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">
                  番地・建物名<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* 宿泊情報 */}
            <div className="space-y-4 mt-8">
              <h3 className="text-lg font-medium text-stone-800 border-b pb-2 font-mincho">宿泊情報</h3>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">
                  チェックイン希望日<span className="text-red-500">*</span>
                </label>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-stone-400 mr-2" />
                  <input
                    type="date"
                    name="checkInDate"
                    required
                    className="px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    value={formData.checkInDate}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    大人（中学生以上）<span className="text-red-500">*</span>
                  </label>
                  <select
                    name="adults"
                    required
                    className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    value={formData.adults}
                    onChange={handleInputChange}
                  >
                    {[1,2,3,4,5,6].map(num => (
                      <option key={num} value={num}>{num}名</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    お子様（12歳以下）
                  </label>
                  <select
                    name="children"
                    className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    value={formData.children}
                    onChange={handleInputChange}
                  >
                    {[0,1,2,3,4].map(num => (
                      <option key={num} value={num}>{num}名</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">
                  お部屋タイプ<span className="text-red-500">*</span>
                </label>
                <select
                  name="roomType"
                  required
                  className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  value={formData.roomType}
                  onChange={handleInputChange}
                >
                  <option value="和室">和室</option>
                  <option value="和洋室">和洋室</option>
                  <option value="特別室">特別室</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">
                  お食事について
                </label>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-stone-600 mb-1">大人</p>
                    <select
                      name="adultMeal"
                      className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      value={formData.adultMeal}
                      onChange={handleInputChange}
                    >
                      <option value="和食">和食</option>
                      <option value="洋食">洋食</option>
                      <option value="特別会席">特別会席</option>
                    </select>
                  </div>
                  {formData.children > 0 && (
                    <div>
                      <p className="text-sm text-stone-600 mb-1">お子様</p>
                      <select
                        name="childMeal"
                        className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                        value={formData.childMeal}
                        onChange={handleInputChange}
                      >
                        <option value="子供用和食">子供用和食</option>
                        <option value="子供用洋食">子供用洋食</option>
                      </select>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* その他 */}
            <div className="space-y-4 mt-8">
              <h3 className="text-lg font-medium text-stone-800 border-b pb-2 font-mincho">その他</h3>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">
                  駐車場
                </label>
                <select
                  name="parkingType"
                  className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  value={formData.parkingType}
                  onChange={handleInputChange}
                >
                  <option value="不要">不要</option>
                  <option value="一般駐車場">一般駐車場</option>
                  <option value="大型車両">大型車両</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">
                  ご要望・備考
                </label>
                <textarea
                  name="notes"
                  rows={4}
                  className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="アレルギーや特別なご要望がございましたらご記入ください"
                />
              </div>
            </div>

            {/* プライバシーポリシー */}
            <div className="space-y-4 mt-8">
              <div className="bg-stone-50 p-4 rounded-lg">
                <h4 className="font-medium text-stone-800 mb-2 font-mincho">プライバシーポリシー</h4>
                <p className="text-sm text-stone-600 mb-4">
                  当館では、お客様の個人情報を大切に扱い、適切な管理を行っております。
                  ご提供いただいた個人情報は、予約管理、サービス提供、および関連する目的にのみ使用いたします。
                </p>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy-policy"
                    required
                    className="w-4 h-4 text-amber-600 border-stone-300 rounded focus:ring-amber-500"
                  />
                  <label htmlFor="privacy-policy" className="ml-2 text-sm text-stone-700">
                    プライバシーポリシーに同意する<span className="text-red-500">*</span>
                  </label>
                </div>
              </div>
            </div>

            {/* 送信ボタン */}
            <div className="flex justify-center pt-8">
              <button
                type="submit"
                className="bg-amber-600 text-white px-8 py-3 rounded-md hover:bg-amber-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 font-mincho"
              >
                予約を送信する
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;