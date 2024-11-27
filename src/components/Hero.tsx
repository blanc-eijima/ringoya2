import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: "/images/slide01.webp",
      alt: "木製の内装が施された温泉の浴槽。透明な湯が満たされ、落ち着いた雰囲気のある温泉の一角"
    },
    {
      url: "/images/slide02.webp",
      alt: "冬の岩壁に形成された大きな氷柱群が垂れ下がる、迫力ある雪景色"
    },
    {
      url: "/images/slide03.webp",
      alt: "湯気が立ち上る温泉の湯面。穏やかな雰囲気が漂う、落ち着いた温泉の情景"
    },
    {
      url: "/images/slide04.webp",
      alt: "樹氷に覆われた雪山のスキーコースを滑るスキーヤー。周囲には白銀の世界が広がり、美しい冬の景色が楽しめる"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.url}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-medium mb-4 font-mincho tracking-wider">旅館 林檎屋</h1>
          <p className="text-xl md:text-2xl font-mincho tracking-widest">心やすらぐ温泉の宿</p>
        </div>
      </div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index 
                ? 'bg-white w-4' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;