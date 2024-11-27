import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: '田中 美咲',
      date: '2024年2月',
      rating: 5,
      text: '露天風呂からの景色が最高でした。お料理も美味しく、スタッフの方々の対応も丁寧で素晴らしい滞在となりました。',
      type: '四季折々プラン利用'
    },
    {
      name: '山田 健一',
      date: '2024年1月',
      rating: 5,
      text: '静かな環境で心身ともにリフレッシュできました。特に夕食の懐石料理は見た目も味も素晴らしかったです。',
      type: '特選懐石プラン利用'
    },
    {
      name: '佐藤 優子',
      date: '2024年1月',
      rating: 5,
      text: '長期滞在でしたが、毎日違うお料理が出て飽きることがありませんでした。温泉も効能があり、体が軽くなりました。',
      type: 'のんびり湯治プラン利用'
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-medium text-center mb-12 text-stone-800">お客様の声</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-stone-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-stone-600 mb-4 leading-relaxed">{testimonial.text}</p>
              <div className="border-t border-stone-200 pt-4">
                <p className="font-medium text-stone-800">{testimonial.name}</p>
                <p className="text-sm text-stone-500">{testimonial.date}</p>
                <p className="text-sm text-amber-600 mt-1">{testimonial.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;