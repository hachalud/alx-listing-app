import React from 'react';
import { CardProps } from '../../interfaces';

export const Card: React.FC<CardProps> = ({
  image,
  title,
  location,
  rating,
  price,
  onClick,
}) => {
  return (
    <div 
      onClick={onClick}
      className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer group bg-white"
    >
      {/* Image Container */}
      <div className="w-full aspect-[4/3] bg-gray-100 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
          loading="lazy"
        />
      </div>

      {/* Property Details */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-1 bg-blend-color">
          <h3 className="font-semibold text-gray-900 truncate pr-2 flex-1">{location}</h3>
          <div className="flex items-center space-x-1 text-sm text-gray-700">
            <span>★</span>
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <p className="text-gray-500 text-sm truncate mb-2">{title}</p>
        
        <div className="flex justify-between items-center mt-3">
          <p className="text-gray-900 font-semibold">
            ${price} <span className="text-gray-500 font-normal text-sm">/ night</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;