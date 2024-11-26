import React from 'react';
import { Bath, Utensils, Wifi, ParkingCircle, Coffee, Shirt } from 'lucide-react';

const Amenities = () => {
  const amenities = [
    {
      icon: <Bath className="w-6 h-6" />,
      title: '温泉施設',
      items: ['大浴場', '露天風呂', '貸切風呂', 'サウナ']
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: '食事処',
      items: ['メインダイニング', '個室食事処', 'ラウンジ']
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: '通信設備',
      items: ['全館Wi-Fi完備', 'ビジネスコーナー']
    },
    {
      icon: <ParkingCircle className="w-6 h-6" />,
      title: '駐車場',
      items: ['無料駐車場', '電気自動車充電設備']
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: 'お茶処',
      items: ['和カフェ', '甘味処']
    },
    {
      icon: <Shirt className="w-6 h-6" />,
      title: 'アメニティ',
      items: ['浴衣', 'タオル', '歯ブラシ', 'シャンプー']
    }
  ];

  return (
    <section className="bg-stone-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-medium text-center mb-12 text-stone-800">館内施設</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mr-4">
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-medium text-stone-800">{amenity.title}</h3>
              </div>
              <ul className="space-y-2">
                {amenity.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-stone-600">
                    <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;