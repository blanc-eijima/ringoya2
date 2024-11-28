import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-stone-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white font-mincho">お問い合わせ</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p>〒990-2301</p>
                  <p>山形県山形市蔵王温泉710</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <p>023-694-9187</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <p>info@ringoya-ryokan.jp</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white font-mincho">施設案内</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/onsen" className="hover:text-white transition-colors">温泉</Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-white transition-colors">客室</Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">お食事</a>
              </li>
            </ul>
          </div>

          {/* Access */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white font-mincho">アクセス・観光</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/access" className="hover:text-white transition-colors">アクセス</Link>
              </li>
              <li>
                <Link to="/area" className="hover:text-white transition-colors">周辺エリア</Link>
              </li>
            </ul>
          </div>

          {/* Other Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white font-mincho">その他</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">利用規約</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">お問い合わせ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-stone-700">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center">
          <p className="text-sm">© 2024 旅館 林檎屋. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;