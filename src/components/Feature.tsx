import React from 'react';

interface FeatureProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description, imageUrl, imageAlt }) => {
  return (
    <div className="text-center">
      <div className="relative h-64 mb-6 overflow-hidden rounded-lg shadow-md">
        <img
          src={`https://zao-ringo-sakura.jp/image-bolt${imageUrl}`}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-medium mb-3 text-stone-800 font-mincho">{title}</h3>
      <p className="text-stone-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default Feature;