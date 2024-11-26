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
import Thanks from './pages/Thanks';
import Introduction from './components/Introduction';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/thanks" element={<Thanks />} />
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
        <Introduction />

        {/* Features */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Feature 
              title="温泉"
              description="開湯1900年の温泉が楽しめる共同浴場がすぐ目の前です。その他の共同浴場も徒歩圏内にあり飲食店やお土産屋さんも同じ通りにございます。"
              imageUrl="/images/onsen.jpg"
              imageAlt="天然温泉の露天風呂"
            />
            <Feature
              title="お部屋"
              description="お部屋には薄型テレビが備わります。それぞれのお部屋に共用バスルーム、無料バスアメニティ、ベッドリネンが備わります。"
              imageUrl="/images/room.jpg"
              imageAlt="和モダンな客室"
            />
            <Feature
              title="お料理"
              description="蔵王温泉 林檎屋にはレストランがあります。滞在時に営業しています。"
              imageUrl="/images/cuisine.jpg"
              imageAlt="会席料理"
            />
          </div>
        </section>

        <Gallery />

        {/* Plans */}
        <section className="bg-stone-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-medium text-center mb-12 text-stone-800 font-mincho">おすすめプラン</h2>
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
            <h2 className="text-3xl font-medium text-center mb-12 text-stone-800 font-mincho">アクセス</h2>
            <div className="bg-stone-50 p-8 rounded-lg max-w-2xl mx-auto">
              <div className="flex items-start space-x-4 mb-4">
                <MapPin className="w-6 h-6 text-stone-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-stone-800">〒123-4567</p>
                  <p className="text-stone-800">山口県温泉町温泉123-4</p>
                  <p className="text-stone-600 mt-2">
                    最寄り駅：JR温泉駅より車で15分<br />
                    無料送迎バスをご用意しております（要予約）
                  </p>
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