import React from 'react';
import { Droplets, Thermometer, Clock, Calendar } from 'lucide-react';
import Navbar from '../components/Navbar';

const Onsen = () => {
  const seasons = [
    {
      name: '冬',
      title: '雪見風呂',
      description: '真っ白な雪景色の中、湯船から見る雪の降る風景は幻想的です。冷たい空気と温かな湯の対比が、冬ならではの贅沢な癒しを提供します。',
      image: '/images/yukimi.webp'
    },
    {
      name: '秋',
      title: '紅葉',
      description: '鮮やかな紅葉に包まれた露天風呂は、まるで絵画の中にいるかのような美しさです。山々を染める赤や黄色の色彩が心を和ませます。',
      image: '/images/aki.webp'
    },
    {
      name: '夏',
      title: '涼感',
      description: '高原の涼しい風とともに、温泉でリフレッシュ。都会の暑さから逃れて、自然に癒されるひとときが過ごせます。',
      image: '/images/natu.webp'
    },
    {
      name: '春',
      title: '新緑',
      description: '山々が若葉に覆われるこの季節には、清々しい空気とともに温泉を楽しめます。春ならではの生命力あふれる風景が訪れる人々を魅了します。',
      image: '/images/haru.webp'
    }
  ];

  const bathhouses = [
    {
      name: '蔵王大露天風呂',
      description: '広大な自然の中にある露天風呂で、川沿いに湯煙が立ち上るダイナミックな景色が魅力です。四季折々の風景とともに、心も体も解き放たれるような感覚を味わえます。',
      hours: '6:00-22:00',
      price: '大人 800円 / 子供 400円',
      features: ['露天風呂', '内湯', '休憩所'],
      image: '/images/open-air-bath.webp'
    },
    {
      name: '上湯',
      description: '地元の方々との交流が楽しめる共同浴場で、温泉街の伝統的な風情を感じられる場所です。',
      hours: '5:00-22:00',
      price: '大人 500円 / 子供 250円',
      features: ['内湯', '洗い場'],
      image: '/images/kamiyu.webp'
    },
    {
      name: '川原湯',
      description: '川のせせらぎを聞きながら入浴できる風情ある共同浴場です。',
      hours: '5:00-22:00',
      price: '大人 500円 / 子供 250円',
      features: ['内湯', '洗い場'],
      image: '/images/kawarayu.webp'
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/onsen-top.webp"
          alt="蔵王温泉の露天風呂"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-medium mb-4 font-mincho">蔵王温泉</h1>
            <p className="text-xl font-mincho">心も体も癒される至福のひととき</p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-medium mb-6 text-stone-800 font-mincho">癒しのスポット</h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            蔵王温泉は、その温泉街全体が「癒しのスポット」として魅力にあふれています。
            特に、露天風呂や共同浴場が提供する多様な体験が訪れる人々を惹きつけています。
          </p>
        </div>
      </section>

      {/* Bathhouses */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-medium text-center mb-12 text-stone-800 font-mincho">
            露天風呂と共同浴場
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bathhouses.map((bath, index) => (
              <div key={index} className="bg-stone-50 rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48">
                  <img
                    src={bath.image}
                    alt={bath.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-3 text-stone-800 font-mincho">{bath.name}</h3>
                  <p className="text-stone-600 mb-4">{bath.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-stone-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{bath.hours}</span>
                    </div>
                    <div className="flex items-center text-stone-600">
                      <Thermometer className="w-4 h-4 mr-2" />
                      <span>{bath.price}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {bath.features.map((feature, i) => (
                        <span
                          key={i}
                          className="inline-block bg-amber-100 text-amber-800 text-sm px-2 py-1 rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Experience */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-medium text-center mb-12 text-stone-800 font-mincho">
            季節ごとの楽しみ方
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seasons.map((season, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={season.image}
                    alt={`${season.name}の温泉`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-5 h-5 mr-2" />
                      <h3 className="text-xl font-medium font-mincho">{season.name} - {season.title}</h3>
                    </div>
                    <p className="text-white/90">{season.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information */}
      <section className="bg-stone-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-medium text-center mb-8 text-stone-800 font-mincho">
            ご利用案内
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-stone-800 mb-2 font-mincho">入浴時のマナー</h3>
                <ul className="list-disc list-inside text-stone-600 space-y-1">
                  <li>入浴前に身体を洗い流してください</li>
                  <li>タオルは湯船に入れないでください</li>
                  <li>他のお客様のご迷惑となる行為はお控えください</li>
                  <li>貴重品は貴重品ロッカーをご利用ください</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-stone-800 mb-2 font-mincho">注意事項</h3>
                <ul className="list-disc list-inside text-stone-600 space-y-1">
                  <li>体調の優れない方は入浴をお控えください</li>
                  <li>飲酒後の入浴はご遠慮ください</li>
                  <li>刺青・タトゥーのある方のご入浴はお断りしております</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Onsen;