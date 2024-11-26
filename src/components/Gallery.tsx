import React from 'react';

const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?auto=format&fit=crop&q=80&w=800",
      alt: "Ryokan exterior"
    },
    {
      url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800",
      alt: "Traditional room"
    },
    {
      url: "https://images.unsplash.com/photo-1545079968-1feb95494244?auto=format&fit=crop&q=80&w=800",
      alt: "Hot spring"
    },
    {
      url: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?auto=format&fit=crop&q=80&w=800",
      alt: "Japanese cuisine"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-medium text-center mb-12 text-stone-800">フォトギャラリー</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative h-64 overflow-hidden rounded-lg">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;