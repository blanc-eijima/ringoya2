import React from 'react';
import { Car, Train } from 'lucide-react';

interface TransportationCardProps {
  type: 'car' | 'train';
  routes: string[];
}

const TransportationCard: React.FC<TransportationCardProps> = ({ type, routes }) => {
  const icon = type === 'car' ? <Car className="w-6 h-6" /> : <Train className="w-6 h-6" />;
  const title = type === 'car' ? 'お車の場合' : '新幹線・列車の場合';

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-amber-600">{icon}</div>
        <h3 className="text-xl font-medium text-stone-800 font-mincho">{title}</h3>
      </div>
      <ul className="space-y-3">
        {routes.map((route, index) => (
          <li key={index} className="flex items-start gap-2 text-stone-600">
            <span className="text-amber-600 mt-1.5">•</span>
            <span>{route}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransportationCard;