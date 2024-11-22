import React from 'react';
import { ChevronRight } from 'lucide-react';

interface NewsItem {
  date: string;
  title: string;
  link?: string;
}

const News = () => {
  const news: NewsItem[] = [
    {
      date: '2024.03.15',
      title: '春の温泉祭り開催のお知らせ（4月1日〜4月7日）',
      link: '#'
    },
    {
      date: '2024.03.10',
      title: '春の会席料理「桜花会席」提供開始のお知らせ',
      link: '#'
    },
    {
      date: '2024.03.01',
      title: '館内施設メンテナンスに関するお知らせ（3月20日）',
      link: '#'
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-medium text-stone-800">新着情報</h2>
          <a 
            href="#" 
            className="hidden sm:flex items-center text-stone-600 hover:text-stone-800 transition-colors"
          >
            すべてのお知らせ
            <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>
        
        <div className="space-y-4">
          {news.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="block group p-6 bg-stone-50 rounded-lg hover:bg-stone-100 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <time className="text-stone-500 font-medium whitespace-nowrap">
                  {item.date}
                </time>
                <h3 className="text-lg text-stone-800 group-hover:text-stone-900 transition-colors">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <a 
            href="#" 
            className="inline-flex items-center text-stone-600 hover:text-stone-800 transition-colors"
          >
            すべてのお知らせ
            <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;