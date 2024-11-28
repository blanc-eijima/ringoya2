import React from 'react';
import { Check } from 'lucide-react';

interface LocationFeatureProps {
  title: string;
  features: string[];
}

const LocationFeature: React.FC<LocationFeatureProps> = ({ title, features }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-medium text-stone-800 mb-4 font-mincho">{title}</h3>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <span className="text-stone-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationFeature;