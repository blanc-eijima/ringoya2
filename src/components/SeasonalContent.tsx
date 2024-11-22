import React from 'react';
import { Leaf } from 'lucide-react';

const SeasonalContent = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <Leaf className="w-6 h-6 text-amber-600 mr-2" />
          <h2 className="text-3xl font-medium text-stone-800">春の特別企画</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1522327646852-4e28586a40dd?auto=format&fit=crop&q=80&w=1024" 
              alt="春の庭園" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-stone-800">桜花爛漫プラン</h3>
            <p className="text-stone-600 leading-relaxed">
              春爛漫の季節、当館の日本庭園では見事な桜が咲き誇ります。
              夜にはライトアップも実施し、幻想的な夜桜をお楽しみいただけます。
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-stone-800 mb-2">期間限定の特典</h4>
                <ul className="space-y-2 text-stone-600">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></span>
                    桜を眺められる確約部屋をご用意
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></span>
                    夕食時に季節限定の桜酒をサービス
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></span>
                    桜をイメージした創作和菓子付き
                  </li>
                </ul>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg">
                <p className="text-amber-800 text-sm">
                  ※桜の開花時期は天候により前後する場合がございます。
                </p>
              </div>
            </div>
            
            <button className="bg-stone-800 text-white px-8 py-3 rounded-md hover:bg-stone-900 transition-colors">
              ご予約はこちら
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalContent;