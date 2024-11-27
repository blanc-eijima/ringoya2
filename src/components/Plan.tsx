import React from 'react';
import { useNavigate } from 'react-router-dom';

interface PlanProps {
  title: string;
  price: string;
  description: string;
  features: string[];
}

const Plan: React.FC<PlanProps> = ({ title, price, description, features }) => {
  const navigate = useNavigate();

  const handleReservation = () => {
    navigate('/reservation');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-medium mb-2 text-stone-800">{title}</h3>
      <p className="text-2xl font-bold mb-4 text-amber-600">{price}<span className="text-sm text-stone-600">〜</span></p>
      <p className="text-stone-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-stone-700">
            <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
      <button 
        onClick={handleReservation}
        className="w-full mt-6 bg-stone-800 text-white py-2 rounded hover:bg-stone-900 transition-colors"
      >
        予約する
      </button>
    </div>
  );
};

export default Plan;