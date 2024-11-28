import React from 'react';
import Navbar from '../components/Navbar';
import LocationFeature from '../components/area/LocationFeature';
import SeasonalHighlight from '../components/area/SeasonalHighlight';
import { MapPin } from 'lucide-react';

const Area = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/area-top.webp"
          alt="蔵王温泉街の風景"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-medium mb-4 font-mincho">周辺エリア</h1>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5" />
              <p className="text-xl font-mincho">蔵王温泉高湯通り</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-2xl font-medium text-stone-800 mb-8 text-center font-mincho">
            蔵王温泉高湯通りの中心に位置する当館
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <LocationFeature
              title="抜群のロケーション"
              features={[
                'バスターミナルから徒歩3分',
                'スキー場まで徒歩5分',
                'お向かいには共同浴場',
                '足湯や手湯が近接',
                '飲食店や居酒屋が徒歩圏内',
                'お土産屋が通りに軒を連ねる'
              ]}
            />
            <LocationFeature
              title="温泉を満喫"
              features={[
                '開湯1900年の共同浴場が目の前',
                '3つの共同浴場が徒歩圏内',
                '館内にかけ流しの温泉',
                '湯めぐりに最適な立地',
                '食べ歩きも楽しめる',
                '温泉街の風情を満喫'
              ]}
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-stone-800 mb-8 text-center font-mincho">
            四季折々の魅力
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SeasonalHighlight
              season="春"
              title="新緑"
              description="山々が芽吹き、新緑が広がる爽やかな季節。ハイキングや温泉巡りが特におすすめです。"
              imageUrl="/images/haru.webp"
            />
            <SeasonalHighlight
              season="夏"
              title="登山"
              description="涼しい高原の気候を活かした避暑や、山登りを楽しむのに最適な季節です。"
              imageUrl="/images/natu.webp"
            />
            <SeasonalHighlight
              season="秋"
              title="紅葉"
              description="山々が赤や黄色に染まり、温泉と紅葉の絶景をお楽しみいただけます。"
              imageUrl="/images/aki.webp"
            />
            <SeasonalHighlight
              season="冬"
              title="樹氷"
              description="圧巻の樹氷、ロープウェイからの眺望、氷瀑など、冬ならではの絶景が広がります。"
              imageUrl="/images/yukimi.webp"
            />
          </div>
        </section>
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

export default Area;