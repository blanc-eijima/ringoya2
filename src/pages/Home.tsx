import React from 'react';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import Gallery from '../components/Gallery';
import Plan from '../components/Plan';
import News from '../components/News';

const Home = () => {
  return (
    <main>
      <Hero />
      
      {/* Introduction */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-medium mb-6 text-stone-800">山口県の温泉宿「林檎屋」</h1>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
          当館では、伝統的な和の雰囲気と心安らぐ温泉体験を提供いたします。
          山口県の美しい景観と共にお楽しみください。
        </p>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Feature 
            title="温泉"
            description="当館自慢の天然温泉で日々の疲れを癒してください。"
            imageUrl="https://images.unsplash.com/photo-1545079968-1feb95494244?auto=format&fit=crop&q=80&w=800"
          />
          <Feature
            title="客室"
            description="和の落ち着いた空間で、ゆったりとお過ごしください。"
            imageUrl="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800"
          />
          <Feature
            title="料理"
            description="地元の旬の食材をふんだんに使用した料理を提供します。"
            imageUrl="https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?auto=format&fit=crop&q=80&w=800"
          />
        </div>
      </section>

      <News />

      <Gallery />

      {/* Plans */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-medium text-center mb-12 text-stone-800">おすすめプラン</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Plan
              title="四季折々プラン"
              price="¥22,000"
              description="1泊2食付き、季節の会席料理と温泉を楽しむ基本プラン"
              features={['夕食：季節の会席料理', '朝食：和朝食', '温泉無制限入浴']}
            />
            <Plan
              title="特選懐石プラン"
              price="¥35,000"
              description="特選食材を使用した懐石料理と特別室でのご宿泊"
              features={['特選懐石料理', '朝食：部屋出し和朝食', '貸切風呂1回付き']}
            />
            <Plan
              title="のんびり湯治プラン"
              price="¥18,000"
              description="リーズナブルに温泉を満喫できる湯治向けプラン"
              features={['夕食：郷土料理', '朝食：和朝食', '長時間滞在OK']}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;