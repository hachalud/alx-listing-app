import React, { useState } from "react";
import Image from "next/image";

// Categories explicitly matching the Figma Design layout icons
const ACCOMMODATION_TYPES = [
  { id: "apartment", label: "Apartment", icon: "🏢" },
  { id: "house", label: "House", icon: "🏠" },
  { id: "lakefront", label: "Lakefront", icon: "🛶" },
  { id: "farm-house", label: "Farm house", icon: "🏡" },
  { id: "treehouse", label: "Treehouse", icon: "🌲" },
  { id: "cabins", label: "Cabins", icon: "🪵" },
];

export const Header: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("apartment");
  const [dates, setDates] = useState("");
  const [guests, setGuests] = useState("");

  return (
    <header className="gap-6 bg-red-500 bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Top Navigation Row */}
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}

        <div className="flex items-center cursor-pointer flex-shrink-0 gap-6">
          <Image
            src="/assets/Vector-1.png"
            alt="Logo"
            width={120}
            height={40}
            priority
          />
        </div>

        {/* Search Bar (clean unified pill design) */}
        <div className="flex items-center flex-1 max-w-2xl mx-8 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition">
          {/* Check-out */}
          <div className="flex flex-col flex-1 px-6 py-2 border-r border-gray-100">
            <span className="text-xs font-semibold text-gray-900">
              Check out
            </span>
            <input
              type="text"
              placeholder="Add date"
              value={dates}
              onChange={(e) => setDates(e.target.value)}
              className="text-xs text-gray-500 bg-transparent focus:outline-none"
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col flex-1 px-6 py-2">
            <span className="text-xs font-semibold text-gray-900">People</span>
            <input
              type="text"
              placeholder="Add guest"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="text-xs text-gray-500 bg-transparent focus:outline-none"
            />
          </div>

          {/* Search Button */}
          <button className="m-2 p-3 bg-[#FFA500] hover:bg-amber-500 text-white rounded-full transition flex items-center justify-center">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 14 0z"
              />
            </svg>
          </button>
        </div>

        {/* Auth */}
        <div className="flex items-center flex-shrink-0">
          <button
            className="bg-[#1D917A] hover:bg-emerald-800 text-white px-6 py-2.5 text-sm font-semibold rounded-full shadow-sm transition"
            onClick={() => console.log("Sign In Clicked")}
          >
            Sign in
          </button>
        </div>
        <button
          className="text-black hover:bg-red-200 px-6 py-2.5 text-sm font-semibold rounded-full shadow-sm transition"
          onClick={() => console.log("Sign Up Clicked")}
        >
          Sign up
        </button>
      </div>

      {/* Accommodations Category Navigation List */}
      <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-10 h-20 border-t border-gray-100">
          {ACCOMMODATION_TYPES.map((type) => {
            const isActive = activeCategory === type.id;
            return (
              <button
                key={type.id}
                onClick={() => setActiveCategory(type.id)}
                className={`flex flex-col items-center justify-center gap-2 h-full border-b-2 pb-2 transition whitespace-nowrap text-xs font-medium focus:outline-none
                  ${
                    isActive
                      ? "border-gray-900 text-gray-900 font-bold"
                      : "border-transparent text-gray-500 hover:text-gray-900"
                  }`}
              >
                <span className="text-2xl filter grayscale opacity-80 hover:opacity-100 transition-opacity">
                  {type.icon}
                </span>
                <span className="tracking-wide">{type.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
