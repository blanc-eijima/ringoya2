import React from 'react';

interface SeasonalHighlightProps {
  season: string;
  title: string;
  description: string;
  imageUrl: string;
}

const SeasonalHighlight: React.FC<SeasonalHighlightProps> = ({
  season,
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <img
          src={imageUrl}
          alt={`${season}の風景 - ${title}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full">
          <span className="text-stone-800 font-medium font-mincho">{season}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-stone-800 mb-2 font-mincho">{title}</h3>
        <p className="text-stone-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default SeasonalHighlight;