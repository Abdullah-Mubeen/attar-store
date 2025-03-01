"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

// Mock data - in a real application, this would come from an API or database
const relatedProducts = [
  {
    id: 1,
    name: "Mystic Amber Attar",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1616604426203-61859411dea8?q=80&w=800&auto=format&fit=crop",
    slug: "mystic-amber-attar"
  },
  {
    id: 2,
    name: "Saffron Rose Attar",
    price: 109.99,
    image: "https://images.unsplash.com/photo-1595425964071-2c1ecb10b52d?q=80&w=800&auto=format&fit=crop",
    slug: "saffron-rose-attar"
  },
  {
    id: 3,
    name: "Sandalwood Musk Attar",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?q=80&w=800&auto=format&fit=crop",
    slug: "sandalwood-musk-attar"
  },
  {
    id: 4,
    name: "Midnight Orchid",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1592945403407-9caf930b2c8d?q=80&w=800&auto=format&fit=crop",
    slug: "midnight-orchid"
  }
];

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card className="overflow-hidden border-none shadow-sm group">
      <CardContent className="p-0">
        <div 
          className="relative aspect-square overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          <div className={`absolute inset-0 bg-black/20 flex items-center justify-center gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <Button size="icon" variant="secondary" className="rounded-full bg-white hover:bg-[#c9a96e] hover:text-white">
              <ShoppingBag className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="secondary" className="rounded-full bg-white hover:bg-[#c9a96e] hover:text-white">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="p-4 text-center">
          <Link href={`/products/${product.slug}`} className="hover:text-[#c9a96e]">
            <h3 className="font-medium mb-2">{product.name}</h3>
          </Link>
          <p className="text-[#c9a96e] font-medium">${product.price}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export function RelatedProducts() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-playfair font-bold">You May Also Like</h2>
        
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="rounded-full">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}