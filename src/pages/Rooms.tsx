import React from 'react';
import { Calendar, Clock, Info, Wifi, Tv, Users, Bath, Fan, Coffee, Power, Shirt, Bed, Ban } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

interface RoomType {
  id: string;
  name: string;
  description: string;
  size: string;
  capacity: {
    type: string;
    price: string;
  }[];
  imageUrl: string;
  features: {
    icon: React.ReactNode;
    text: string;
  }[];
  bathAmenities: string[];
  amenities: string[];
}

const Rooms = () => {
  const navigate = useNavigate();

  const handleReservation = () => {
    window.scrollTo(0, 0);
    navigate('/reservation');
  };

  const roomTypes: RoomType[] = [
    {
      id: 'twin',
      name: 'ツインルーム 共用トイレ',
      description: '快適な滞在を約束する機能的な客室。窓からは美しい景色をお楽しみいただけます。',
      size: '15平方メートル',
      capacity: [
        { type: '2名利用', price: '¥22,800' },
        { type: '1名利用', price: '¥20,520' }
      ],
      imageUrl: '/images/twin-room.jpg',
      features: [
        { icon: <Wifi className="w-4 h-4" />, text: '無料WiFi' },
        { icon: <Tv className="w-4 h-4" />, text: '薄型テレビ' },
        { icon: <Bed className="w-4 h-4" />, text: '布団2組' },
        { icon: <Bath className="w-4 h-4" />, text: '共用バスルーム' },
        { icon: <Ban className="w-4 h-4" />, text: '禁煙' }
      ],
      bathAmenities: [
        '無料バスアメニティ',
        'スリッパ',
        '共用トイレ',
        'トイレットペーパー'
      ],
      amenities: [
        'リネン',
        '上階へは階段利用',
        '薄型テレビ',
        '電気ポット',
        '暖房',
        'ファン（扇風機）',
        '物干しラック',
        'タオル',
        '畳',
        'ベッド近くにコンセント',
        '衣類用ラック',
        'タオル / リネン類（有料）'
      ]
    },
    {
      id: 'family',
      name: 'スタンダード ファミリールーム',
      description: 'ご家族やグループでのご宿泊に最適な広々とした和室です。',
      size: '35平方メートル',
      capacity: [
        { type: '6名利用', price: '¥60,000' },
        { type: '7名利用', price: '¥66,000' },
        { type: '8名利用', price: '¥72,000' }
      ],
      imageUrl: '/images/family-room.jpg',
      features: [
        { icon: <Wifi className="w-4 h-4" />, text: '無料WiFi' },
        { icon: <Tv className="w-4 h-4" />, text: '薄型テレビ' },
        { icon: <Bed className="w-4 h-4" />, text: '布団8組' },
        { icon: <Bath className="w-4 h-4" />, text: '共用バスルーム' },
        { icon: <Ban className="w-4 h-4" />, text: '禁煙' }
      ],
      bathAmenities: [
        '無料バスアメニティ',
        'スリッパ',
        '共用トイレ',
        'トイレットペーパー'
      ],
      amenities: [
        'リネン',
        '上階へは階段利用',
        '薄型テレビ',
        '電気ポット',
        '暖房',
        'ファン（扇風機）',
        '物干しラック',
        'タオル',
        '畳',
        'ベッド近くにコンセント',
        '衣類用ラック',
        'タオル / リネン類（有料）'
      ]
    },
    {
      id: 'single',
      name: 'エコノミー シングルルーム',
      description: '一人旅やビジネス利用に最適なコンパクトな和室です。',
      size: '11平方メートル',
      capacity: [
        { type: '1名利用', price: '¥18,050' }
      ],
      imageUrl: '/images/single-room.jpg',
      features: [
        { icon: <Wifi className="w-4 h-4" />, text: '無料WiFi' },
        { icon: <Tv className="w-4 h-4" />, text: '薄型テレビ' },
        { icon: <Bath className="w-4 h-4" />, text: '共用バスルーム' },
        { icon: <Ban className="w-4 h-4" />, text: '禁煙' }
      ],
      bathAmenities: [
        '無料バスアメニティ',
        'スリッパ',
        '共用トイレ',
        'トイレットペーパー'
      ],
      amenities: [
        'リネン',
        '上階へは階段利用',
        '薄型テレビ',
        '電気ポット',
        '暖房',
        'ファン（扇風機）',
        'タオル',
        '畳',
        'ベッド近くにコンセント',
        '衣類用ラック',
        'タオル / リネン類（有料）'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/room-hero.jpg"
          alt="客室イメージ"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-medium mb-4 font-mincho">お部屋のご案内</h1>
            <p className="text-xl font-mincho">心安らぐ和の空間で特別なひとときを</p>
          </div>
        </div>
      </div>

      {/* Room Types */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-16">
          {roomTypes.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Room Image */}
                <div className="relative h-64 md:h-auto">
                  <img
                    src={room.imageUrl}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Room Details */}
                <div className="p-6">
                  <h2 className="text-2xl font-medium text-stone-800 mb-4 font-mincho">
                    {room.name}
                  </h2>
                  <p className="text-stone-600 mb-6">{room.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-stone-600">
                      <span className="w-5 h-5 mr-2">⚏</span>
                      {room.size}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-stone-800 mb-3 font-mincho">
                      客室設備
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {room.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-stone-600">
                          {feature.icon}
                          <span className="ml-2">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bath Amenities */}
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-stone-800 mb-3 font-mincho">
                      共用バスルーム設備
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {room.bathAmenities.map((amenity, index) => (
                        <div key={index} className="flex items-center text-stone-600">
                          <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></span>
                          {amenity}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-stone-800 mb-3 font-mincho">
                      その他設備
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {room.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center text-stone-600">
                          <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></span>
                          {amenity}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="border-t border-stone-200 pt-6">
                    {room.capacity.map((cap, index) => (
                      <div key={index} className="flex justify-between items-center mb-2">
                        <span className="text-stone-600">{cap.type}</span>
                        <span className="text-xl font-medium text-amber-600">
                          {cap.price}
                          <span className="text-sm text-stone-500 ml-1">（税・手数料込）</span>
                        </span>
                      </div>
                    ))}
                    <button 
                      onClick={handleReservation}
                      className="w-full mt-4 bg-stone-800 text-white py-3 rounded-md hover:bg-stone-900 transition-colors font-mincho"
                    >
                      予約する
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-medium text-stone-800 mb-8 text-center font-mincho">
            お部屋に関する補足情報
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-medium text-stone-800 mb-4 font-mincho">
                チェックイン・チェックアウト
              </h3>
              <ul className="space-y-2 text-stone-600">
                <li>チェックイン：15:00〜20:00</li>
                <li>チェックアウト：8:00〜10:00</li>
                <li>※時間外のご対応はご相談ください</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-medium text-stone-800 mb-4 font-mincho">
                ご予約・キャンセルについて
              </h3>
              <ul className="space-y-2 text-stone-600">
                <li>3日前までのキャンセル：無料</li>
                <li>前々日：料金の30%</li>
                <li>前日：料金の50%</li>
                <li>当日：料金の100%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-stone-800 text-stone-300 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-4">© 2024 旅館 林檎屋. All Rights Reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-white transition-colors">利用規約</a>
            <a href="#" className="hover:text-white transition-colors">お問い合わせ</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Rooms;