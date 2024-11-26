import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Check, ChevronLeft } from 'lucide-react';
import Navbar from '../components/Navbar';

const Thanks = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const reservationData = location.state?.reservationData;

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-medium text-stone-800 mb-4 font-mincho">
              ご予約ありがとうございます
            </h1>
            
            <p className="text-stone-600 mb-8">
              ご予約内容の確認メールを{reservationData?.email || 'ご入力いただいたメールアドレス'}宛に
              送信させていただきました。
            </p>

            <div className="bg-stone-50 p-6 rounded-lg mb-8 text-left">
              <h2 className="text-lg font-medium text-stone-800 mb-4 font-mincho">
                ご予約内容
              </h2>
              {reservationData && (
                <dl className="space-y-3">
                  <div className="flex">
                    <dt className="w-32 text-stone-500">チェックイン</dt>
                    <dd className="text-stone-800">{reservationData.checkInDate}</dd>
                  </div>
                  <div className="flex">
                    <dt className="w-32 text-stone-500">人数</dt>
                    <dd className="text-stone-800">
                      大人{reservationData.adults}名
                      {reservationData.children > 0 && `、お子様${reservationData.children}名`}
                    </dd>
                  </div>
                  <div className="flex">
                    <dt className="w-32 text-stone-500">お部屋タイプ</dt>
                    <dd className="text-stone-800">{reservationData.roomType}</dd>
                  </div>
                </dl>
              )}
            </div>

            <div className="space-y-4">
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center text-stone-600 hover:text-stone-800 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                トップページに戻る
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thanks;