import React from 'react';
import { MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import TransportationCard from '../components/access/TransportationCard';

const Access = () => {
  const carRoutes = [
    '東北自動車道（村田J.C.T）～山形自動車道（山形蔵王I.C）～西蔵王高原ライン経由約1時間20分',
    '東北自動車道（白石蔵王I.C）～エコーライン経由約1時間30分（冬季通行止め)'
  ];

  const trainRoutes = [
    '東京駅～（山形新幹線）～山形駅(約2時間30分)',
    '新潟駅～（羽越本線）～山形駅(約3時間) →山形駅～（山形交通バス）～蔵王温泉(約40分）',
    '仙台駅～（仙山線）～山形駅(約1時間)'
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/access-hero.webp"
          alt="蔵王温泉へのアクセス"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-medium mb-4 font-mincho">アクセス</h1>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5" />
              <p className="text-xl font-mincho">〒990-2301 山形県山形市蔵王温泉710</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <TransportationCard type="car" routes={carRoutes} />
          <TransportationCard type="train" routes={trainRoutes} />
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-medium text-stone-800 mb-8 text-center font-mincho">地図</h2>
          <div className="aspect-video w-full max-w-3xl mx-auto bg-white rounded-lg shadow-md p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12523.804753441172!2d140.3969972!3d38.166488!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8bb696c1f2fc4f%3A0x37a51d9c8a88b434!2z6JKy546L5rip5rOJ!5e0!3m2!1sja!2sjp!4v1710669600000!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="蔵王温泉 林檎屋 地図"
              className="rounded-md"
            ></iframe>
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

export default Access;