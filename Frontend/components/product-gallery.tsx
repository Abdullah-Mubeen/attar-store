"use client";

import { useState } from 'react';
import Image from 'next/image';

export function ProductGallery({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      <div className="relative aspect-square rounded-lg overflow-hidden border border-border">
        <Image 
          src={mainImage} 
          alt="Product" 
          fill 
          className="object-cover"
        />
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative aspect-square rounded-md overflow-hidden border ${
              mainImage === image ? 'border-[#c9a96e]' : 'border-border'
            }`}
            onClick={() => setMainImage(image)}
          >
            <Image 
              src={image} 
              alt={`Product thumbnail ${index + 1}`} 
              fill 
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}