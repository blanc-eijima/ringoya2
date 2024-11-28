import React from 'react';
import { MapPin, Clock, Info, Camera, Map, Coffee } from 'lucide-react';
import Navbar from '../components/Navbar';

const Sightseeing = () => {
  const spots = [
    {
      category: '自然・景勝地',
      items: [
        {
          name: '蔵王山',
          description: '四季折々の美しい景色が楽しめる山岳リゾート。冬は樹氷、春は新緑、夏は避暑地として、秋は紅葉狩りに最適です。',
          distance: '車で30分',
          image: '/images/mountain.jpg',
          features: ['ロープウェイ有り', 'レストハウス完備', '駐車場有り']
        },
        {
          name: '御釜',
          description: '蔵王連峰の火口湖。エメラルドグリーンの湖面が印象的で、周辺には遊歩道が整備されています。',
          distance: '車で40分',
          image: '/images/crater.jpg',
          features: ['展望台有り', 'ハイキングコース有り', '休憩所有り']
        }
      ]
    },
    {
      category: '歴史・文化',
      items: [
        {
          name: '温泉寺',
          description: '開湯とともに建立された由緒ある寺院。境内には国指定重要文化財の建造物があります。',
          distance: '徒歩10分',
          image: '/images/temple.jpg',
          features: ['国重要文化財', '庭園公開', '写経体験可能']
        },
        {
          name: '温泉資料館',
          description: '温泉街の歴史や文化を学べる資料館。江戸時代からの温泉街の様子を知ることができます。',
          distance: '徒歩15分',
          image: '/images/museum.jpg',
          features: ['ガイド付きツアー有り', '古写真展示', '体験コーナー有り']
        }
      ]
    },
    {
      category: '体験・アクティビティ',
      items: [
        {
          name: '蔵王チーズ工場',
          description: '地元の新鮮な牛乳を使用したチーズ作りを見学できます。手作りチーズ体験も人気です。',
          distance: '車で20分',
          image: '/images/cheese.jpg',
          features: ['工場見学可能', 'チーズ作り体験', 'カフェ併設']
        },
        {
          name: '蔵王ワイナリー',
          description: '山形県産ぶどうを使用したワイン醸造所。見学とテイスティングを楽しめます。',
          distance: '車で25分',
          image: '/images/winery.jpg',
          features: ['ワイナリーツアー', 'テイスティング', 'レストラン有り']
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/sightseeing-hero.jpg"
          alt="蔵王の観光スポット"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-medium mb-4 font-mincho">観光案内</h1>
            <p className="text-xl font-mincho">蔵王の魅力をご紹介</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {spots.map((category, index) => (
          <div key={index} className="mb-16 last:mb-0">
            <h2 className="text-3xl font-medium mb-8 text-stone-800 font-mincho">
              {category.category}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {category.items.map((spot, spotIndex) => (
                <div key={spotIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64">
                    <img
                      src={spot.image}
                      alt={spot.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-2 text-stone-800 font-mincho">
                      {spot.name}
                    </h3>
                    <p className="text-stone-600 mb-4">{spot.description}</p>
                    <div className="flex items-center text-stone-600 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{spot.distance}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {spot.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="inline-block bg-amber-50 text-amber-800 text-sm px-3 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Information Section */}
      <div className="bg-stone-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-medium text-center mb-8 text-stone-800 font-mincho">
            観光案内
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-stone-800 mb-2 font-mincho">
                  観光案内所
                </h3>
                <div className="space-y-2 text-stone-600">
                  <p>蔵王温泉観光案内所</p>
                  <p>営業時間：8:30〜17:00</p>
                  <p>電話：123-456-7890</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-stone-800 mb-2 font-mincho">
                  ガイドツアー
                </h3>
                <div className="space-y-2 text-stone-600">
                  <p>地元ガイドと巡る蔵王温泉街散策</p>
                  <p>所要時間：約2時間</p>
                  <p>料金：お一人様 2,000円〜</p>
                  <p>※前日までの予約が必要です</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sightseeing;