import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Gallery from './components/Gallery';
import Plan from './components/Plan';
import News from './components/News';
import Amenities from './components/Amenities';
import Testimonials from './components/Testimonials';
import Rooms from './pages/Rooms';
import Reservation from './pages/Reservation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
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
              description="当館自慢の天然温泉で日々の疲れを癒してください。露天風呂からは美しい山々の景色をお楽しみいただけます。"
              imageUrl="https://images.unsplash.com/photo-1545079968-1feb95494244?auto=format&fit=crop&q=80&w=800"
            />
            <Feature
              title="客室"
              description="和の落ち着いた空間で、ゆったりとお過ごしください。全室から日本庭園が一望できます。"
              imageUrl="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800"
            />
            <Feature
              title="料理"
              description="地元の旬の食材をふんだんに使用した会席料理。山口の味覚を存分にご堪能ください。"
              imageUrl="https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?auto=format&fit=crop&q=80&w=800"
            />
          </div>
        </section>

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
                features={[
                  '夕食：季節の会席料理',
                  '朝食：和朝食',
                  '温泉無制限入浴',
                  '色浴衣レンタル無料',
                  'ウェルカムドリンク付き'
                ]}
              />
              <Plan
                title="特選懐石プラン"
                price="¥35,000"
                description="特選食材を使用した懐石料理と特別室でのご宿泊"
                features={[
                  '特選懐石料理',
                  '朝食：部屋出し和朝食',
                  '貸切風呂1回付き',
                  '色浴衣レンタル無料',
                  '専用ラウンジ利用可',
                  '夜食サービス付き'
                ]}
              />
              <Plan
                title="のんびり湯治プラン"
                price="¥18,000"
                description="リーズナブルに温泉を満喫できる湯治向けプラン"
                features={[
                  '夕食：郷土料理',
                  '朝食：和朝食',
                  '長時間滞在OK',
                  '館内着貸出無料',
                  'お茶菓子サービス'
                ]}
              />
            </div>
          </div>
        </section>

        <News />
        <Amenities />
        <Testimonials />

        {/* Access */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-medium text-center mb-12 text-stone-800">アクセス</h2>
            <div className="bg-stone-50 p-8 rounded-lg max-w-2xl mx-auto">
              <div className="flex items-start space-x-4 mb-4">
                <MapPin className="w-6 h-6 text-stone-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-stone-800">〒123-4567</p>
                  <p className="text-stone-800">山口県温泉町温泉123-4</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <Phone className="w-6 h-6 text-stone-600" />
                <p className="text-stone-800">123-456-7890</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-stone-600" />
                <p className="text-stone-800">info@ringoya-ryokan.jp</p>
              </div>
            </div>
          </div>
        </section>
      </main>

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
}

export default App;