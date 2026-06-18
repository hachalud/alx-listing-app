import React, { useState } from 'react';
import { Pill } from './pills';

// Predefined filters modeled after the shared Airbnb layout
const PREDEFINED_FILTERS = [
  'All Stays',
  'Top Villa',
  'Self Check-in',
  'Beachfront',
  'Pools',
  'Cabins',
  'Trending',
  'Earth Houses'
];

interface FilterSectionProps {
  onFilterChange?: (filterLabel: string) => void;
}

export const FilterSection: React.FC<FilterSectionProps> = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All Stays');

  const handlePillClick = (filterLabel: string) => {
    setActiveFilter(filterLabel);
    if (onFilterChange) {
      onFilterChange(filterLabel);
    }
  };

  return (
    <section className="w-full py-4 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Horizontal scroll container with scrollbar hidden via custom class */}
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-none py-1">
          {PREDEFINED_FILTERS.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              isActive={activeFilter === filter}
              onClick={() => handlePillClick(filter)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};