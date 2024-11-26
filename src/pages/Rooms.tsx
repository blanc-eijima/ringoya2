import React from 'react';
import { Users2, Maximize2, Bath, Utensils } from 'lucide-react';
import Navbar from '../components/Navbar';

interface RoomType {
  name: string;
  description: string;
  size: string;
  capacity: string;
  price: string;
  features: string[];
  amenities: string[];
  images: { url: string; alt: string }[];
}

const Rooms = () => {
  const roomTypes: RoomType[] = [
    {
      name: '特別室 〜月心〜',
      description:
        '最上階に位置し、山々の絶景を一望できる特別室。広々とした空間で優雅なひとときをお過ごしください。',
      size: '100㎡',
      capacity: '5名様まで',
      price: '55,000円〜',
      features: [
        '専用露天風呂付き',
        '専用リビングルーム',
        'テラス付き',
        '最上階からの眺望',
      ],
      amenities: [
        '高級アメニティ一式',
        '40型液晶テレビ',
        '冷蔵庫',
        'Wi-Fi',
        'お茶セット',
        'ミニバー',
      ],
      images: [
        {
          url: 'https://images.unsplash.com/photo-1592229505726-ca121723b8ef?auto=format&fit=crop&q=80&w=1024',
          alt: '特別室の内装',
        },
        {
          url: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=1024',
          alt: '特別室の露天風呂',
        },
      ],
    },
    {
      name: '準特別室 〜花雅〜',
      description:
        '和モダンの趣を取り入れた上質な空間。庭園を望む露天風呂付きのお部屋です。',
      size: '80㎡',
      capacity: '3名様まで',
      price: '45,000円〜',
      features: ['露天風呂付き', '庭園ビュー', '檜の内風呂'],
      amenities: [
        '高級アメニティ一式',
        '32型液晶テレビ',
        '冷蔵庫',
        'Wi-Fi',
        'お茶セット',
      ],
      images: [
        {
          url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1024',
          alt: '準特別室の内装',
        },
        {
          url: 'https://images.unsplash.com/photo-1605346434674-a440ca4dc4c0?auto=format&fit=crop&q=80&w=1024',
          alt: '準特別室の露天風呂',
        },
      ],
    },
    {
      name: '標準和室 〜竹〜',
      description:
        '落ち着いた和の趣を大切にした心地よい空間。窓からは四季の移ろいを感じられます。',
      size: '50㎡',
      capacity: '2名様まで',
      price: '35,000円〜',
      features: ['山側ビュー', '檜の内風呂'],
      amenities: [
        'アメニティ一式',
        '32型液晶テレビ',
        '冷蔵庫',
        'Wi-Fi',
        'お茶セット',
      ],
      images: [
        {
          url: 'https://images.unsplash.com/photo-1501876725168-00c445821c9e?auto=format&fit=crop&q=80&w=1024',
          alt: '標準和室の内装',
        },
        {
          url: 'https://images.unsplash.com/photo-1553653924-39b70295f8da?auto=format&fit=crop&q=80&w=1024',
          alt: '標準和室の窓からの景色',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=2000"
          alt="客室イメージ"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-medium mb-4">お部屋のご案内</h1>
            <p className="text-xl">心安らぐ和の空間で特別なひとときを</p>
          </div>
        </div>
      </div>

      {/* Room Types */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-16">
          {roomTypes.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Image Gallery */}
                <div className="grid grid-cols-2 gap-2 p-6">
                  {room.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="relative h-48 overflow-hidden rounded-lg"
                    >
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>

                {/* Room Details */}
                <div className="p-6">
                  <h2 className="text-2xl font-medium text-stone-800 mb-4">
                    {room.name}
                  </h2>
                  <p className="text-stone-600 mb-6">{room.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-stone-600">
                      <Maximize2 className="w-5 h-5 mr-2" />
                      {room.size}
                    </div>
                    <div className="flex items-center text-stone-600">
                      <Users2 className="w-5 h-5 mr-2" />
                      {room.capacity}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-stone-800 mb-3">
                      特徴
                    </h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {room.features.map((feature, fIndex) => (
                        <li
                          key={fIndex}
                          className="flex items-center text-stone-600"
                        >
                          <Bath className="w-4 h-4 mr-2 text-amber-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-stone-800 mb-3">
                      アメニティ・設備
                    </h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {room.amenities.map((amenity, aIndex) => (
                        <li
                          key={aIndex}
                          className="flex items-center text-stone-600"
                        >
                          <Utensils className="w-4 h-4 mr-2 text-amber-600" />
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mt-8">
                    <div>
                      <p className="text-sm text-stone-500">
                        1泊1室料金（税込）
                      </p>
                      <p className="text-2xl font-medium text-amber-600">
                        {room.price}
                      </p>
                    </div>
                    <button className="bg-stone-800 text-white px-8 py-3 rounded-md hover:bg-stone-900 transition-colors">
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
          <h2 className="text-2xl font-medium text-stone-800 mb-8 text-center">
            お部屋に関する補足情報
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-medium text-stone-800 mb-4">
                チェックイン・チェックアウト
              </h3>
              <ul className="space-y-2 text-stone-600">
                <li>チェックイン：15:00〜20:00</li>
                <li>チェックアウト：〜11:00</li>
                <li>※時間外のご対応はご相談ください</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-medium text-stone-800 mb-4">
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
    </div>
  );
};

export default Rooms;
