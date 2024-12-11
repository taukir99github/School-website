import React from 'react';

interface GalleryImageProps {
  src: string;
  alt: string;
  category: string;
}

export default function GalleryImage({ src, alt }: GalleryImageProps) {
  return (
    <div 
      className="relative group overflow-hidden rounded-lg"
      data-aos="fade-up"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
            {category}
          </span>
          <h3 className="text-white text-lg font-semibold mt-2">{alt}</h3>
        </div>
      </div> */}
    </div>
  );
}