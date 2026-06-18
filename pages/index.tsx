import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

import React, { useState } from "react";
import { Card } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import { APP_STRINGS } from "@/constants";
import { CardProps } from "@/interfaces";
import { FilterSection } from "@/components/filterSection/FilterSection";

// Property listing array structured exactly around your design data points
const FIGMA_PROPERTIES: CardProps[] = [
  {
    id: "1",
    title: "Serene mountain villa with panoramic views",
    location: "Top Villa",
    image: "assets/Image 1-1.png",
    rating: 4.95,
    price: 350,
  },
  {
    id: "2",
    title: "Secluded cabin hidden deep inside the woods",
    location: "Cabins",
    image: "assets/Image 2.png",
    rating: 4.88,
    price: 180,
  },
  {
    id: "3",
    title: "Beautiful beachside house with sunset terrace",
    location: "Beachfront",
    image: "assets/Image 2.png",
    rating: 4.91,
    price: 290,
  },
  {
    id: "4",
    title: "Luxury apartment over the lakefront harbor",
    location: "Self Check-in",
    image: "assets/Image 2.png",
    rating: 4.75,
    price: 210,
  },
];

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All Stays");
  const filteredProperties =
    selectedFilter === "All Stays"
      ? FIGMA_PROPERTIES
      : FIGMA_PROPERTIES.filter(
          (property) => property.location === selectedFilter,
        );

  return (
    <div className="bg-white min-h-screen">
      <section className="relative h-[481px] w-full bg-gray-900 overflow-hidden rounded-[27px] ">
        {/* 1. Immersive Background Image asset pinned to the edges */}
        <img
          src="assets/Image 1.png"
          alt="Scenic Lake Landscape Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-70 select-none pointer-events-none"
        />

        {/* 2. Core Layout Typography Overlay with Drop Shadows matching Figma's 25% black blur opacity */}
        <div className="absolute inset-0 flex flex-col justify-center items-center max-w-7xl mx-auto px-6 z-10 text-white text-center">
          {/* Main Title Style */}
          <h1 className="font-['Source_Sans_Pro'] font-semibold text-[94px] leading-[99px] tracking-normal max-w-4xl mb-6 drop-shadow-[0_4px_7px_rgba(0,0,0,0.25)]">
            Find your favorite place here!
          </h1>

          {/* Subtitle Style - Now featuring Quicksand Medium */}
          <p className="font-['Quicksand'] font-medium text-[24px] leading-none tracking-normal max-w-2xl opacity-95 drop-shadow-[0_4px_7px_rgba(0,0,0,0.25)]">
            The best prices for over 2 million properties worldwide
          </p>
        </div>
      </section>
      <FilterSection onFilterChange={(category)=> setSelectedFilter(category)} />

      {/* 2. Main Accommodations List Section */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Dynamic Multi-column Grid targeting Mobile, Tablet, and Desktop break-lines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProperties.map((property) => (
            <div key={property.id} className="flex flex-col">
              <Card
                {...property}
                onClick={() =>
                  console.log(
                    `Opening details dashboard for listing: ${property.id}`,
                  )
                }
              />
            </div>
          ))}
        </div>

        {/* 3. Action Block: Infinite-scroll/Pagination Interaction */}
        <div className="mt-20 text-center">
          <Button
            label={APP_STRINGS.showMore || "Show more"}
            variant="outline"
            className="px-10 py-3.5 rounded-xl font-bold text-sm border-gray-900 text-gray-900 hover:bg-gray-900 transition shadow-sm"
            onClick={() =>
              console.log("Fetching additional property batches...")
            }
          />
        </div>
      </main>
    </div>
  );
}
