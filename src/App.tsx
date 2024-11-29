import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Gallery from './components/Gallery';
import Plan from './components/Plan';
import News from './components/News';
import Amenities from './components/Amenities';
import Rooms from './pages/Rooms';
import Onsen from './pages/Onsen';
import Access from './pages/Access';
import Area from './pages/Area';
import Reservation from './pages/Reservation';
import Thanks from './pages/Thanks';
import Introduction from './components/Introduction';
import { useScrollToTop } from './utils/scrollRestoration';

function ScrollToTop() {
  useScrollToTop();
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/onsen" element={<Onsen />} />
        <Route path="/access" element={<Access />} />
        <Route path="/area" element={<Area />} />
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
        <News />
        <Amenities />
      </main>
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