import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import GalleryFilter from './GalleryFilter';
import GalleryImage from './GalleryImage';
import g1 from '../../Assests/g1.jpeg';
import g2 from '../../Assests/g2.jpeg';
import g3 from '../../Assests/g3.jpeg';
import g4 from '../../Assests/g4.jpeg';
import g5 from '../../Assests/g5.jpeg';
import g6 from '../../Assests/g6.jpeg';
import g7 from '../../Assests/g7.jpeg';
import g8 from '../../Assests/g8.jpeg';
import g9 from '../../Assests/g9.jpeg';
import g10 from '../../Assests/g10.jpeg';
import g11 from '../../Assests/g11.jpeg';
import g12 from '../../Assests/g12.jpeg';
import g13 from '../../Assests/g13.jpeg';
import g14 from '../../Assests/g14.jpeg';
import art2 from '../../Assests/art 2.jpeg';
import art3 from '../../Assests/art.jpeg';
import outdoor1 from '../../Assests/outdoor1.jpeg'


const galleryItems = [
  {
    src: g1,
    alt: "Learning Through Play",
    category: "Activities"
  },
  {
    src: g2,
    alt: "Art Studio",
    category: "Facilities"
  },
  {
    src: g3,
    alt: "Music Room",
    category: "Facilities"
  },
  {
    src: g4,
    alt: "Outdoor Playground",
    category: "Facilities"
  },
  {
    src: g5,
    alt: "Science Experiments",
    category: "Activities"
  },
  {
    src: g6,
    alt: "Library Corner",
    category: "Facilities"
  },
  {
    src: g7,
    alt: "Sports Activities",
    category: "Activities"
  },
  {
    src: g8,
    alt: "Group Learning",
    category: "Activities"
  },
  {
    src: g9,
    alt: "Group Learning",
    category: "Activities"
  },
  {
    src: g10,
    alt: "Group Learning",
    category: "Activities"
  },
  {
    src: g11,
    alt: "Group Learning",
    category: "Activities"
  },
  {
    src: g12,
    alt: "Group Learning",
    category: "Activities"
  },
  {
    src: g13,
    alt: "Group Learning",
    category: "Activities"
  },
  {
    src: g14,
    alt: "Group Learning",
    category: "Activities"
  },
  {
    src: art2,
    alt: "Art & Craft",
    category: "Activities"
  },
  {
    src: art3,
    alt: "Art & Craft",
    category: "Activities"
  },
  {
    src: outdoor1,
    alt: "Outdoor Play",
    category: "Activities"
  },
];

const categories = ["All", ...new Set(galleryItems.map(item => item.category))];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Gallery"
          subtitle="Take a visual tour through our facilities and daily activities"
        />
        
        <GalleryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((item, index) => (
            <GalleryImage
              key={index}
              src={item.src}
              alt={item.alt}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}