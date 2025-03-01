"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Heart, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock data - in a real application, this would come from an API or database
const products = [
  {
    id: 1,
    name: "Royal Oud Attar",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    slug: "royal-oud-attar",
    category: "attar",
    isNew: true,
    isBestseller: false
  },
  {
    id: 2,
    name: "Mystic Amber Attar",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1616604426203-61859411dea8?q=80&w=800&auto=format&fit=crop",
    slug: "mystic-amber-attar",
    category: "attar",
    isNew: false,
    isBestseller: true
  },
  {
    id: 3,
    name: "Saffron Rose Attar",
    price: 109.99,
    image: "https://images.unsplash.com/photo-1595425964071-2c1ecb10b52d?q=80&w=800&auto=format&fit=crop",
    slug: "saffron-rose-attar",
    category: "attar",
    isNew: false,
    isBestseller: false
  },
  {
    id: 4,
    name: "Sandalwood Musk Attar",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?q=80&w=800&auto=format&fit=crop",
    slug: "sandalwood-musk-attar",
    category: "attar",
    isNew: true,
    isBestseller: false
  },
  {
    id: 5,
    name: "Midnight Orchid",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1592945403407-9caf930b2c8d?q=80&w=800&auto=format&fit=crop",
    slug: "midnight-orchid",
    category: "perfume",
    isNew: true,
    isBestseller: false
  },
  {
    id: 6,
    name: "Golden Amber",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?q=80&w=800&auto=format&fit=crop",
    slug: "golden-amber",
    category: "perfume",
    isNew: false,
    isBestseller: true
  },
  {
    id: 7,
    name: "Velvet Noir",
    price: 139.99,
    image: "https://images.unsplash.com/photo-1608528577891-eb055944f2e7?q=80&w=800&auto=format&fit=crop",
    slug: "velvet-noir",
    category: "perfume",
    isNew: false,
    isBestseller: false
  },
  {
    id: 8,
    name: "Ethereal Mist",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=800&auto=format&fit=crop",
    slug: "ethereal-mist",
    category: "perfume",
    isNew: true,
    isBestseller: true
  },
  {
    id: 9,
    name: "Desert Rose",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1616604426203-61859411dea8?q=80&w=800&auto=format&fit=crop",
    slug: "desert-rose",
    category: "attar",
    isNew: false,
    isBestseller: false
  },
  {
    id: 10,
    name: "Amber Wood",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    slug: "amber-wood",
    category: "perfume",
    isNew: false,
    isBestseller: false
  },
  {
    id: 11,
    name: "Jasmine Dreams",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1595425964071-2c1ecb10b52d?q=80&w=800&auto=format&fit=crop",
    slug: "jasmine-dreams",
    category: "attar",
    isNew: false,
    isBestseller: false
  },
  {
    id: 12,
    name: "Oud Royale",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?q=80&w=800&auto=format&fit=crop",
    slug: "oud-royale",
    category: "perfume",
    isNew: false,
    isBestseller: false
  }
];

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card className="overflow-hidden border-none shadow-md group bg-background/50 backdrop-blur-sm">
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
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {(product.isNew || product.isBestseller) && (
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
              {product.isNew && (
                <span className="inline-block bg-[#f6e07b] text-[#000000] text-xs font-medium px-3 py-1 rounded-sm">
                  New
                </span>
              )}
              {product.isBestseller && (
                <span className="inline-block bg-[#99672c] text-white text-xs font-medium px-3 py-1 rounded-sm">
                  Bestseller
                </span>
              )}
            </div>
          )}
          
          <div 
            className={`absolute inset-0 bg-black/30 backdrop-blur-[2px] flex items-center justify-center gap-3 transition-all duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3, delay: 0 }}
            >
              <Button 
                size="icon" 
                variant="secondary" 
                className="rounded-full bg-white/90 hover:bg-[#f6e07b] hover:text-[#000000] h-10 w-10"
              >
                <ShoppingBag className="h-4 w-4" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Button 
                size="icon" 
                variant="secondary" 
                className="rounded-full bg-white/90 hover:bg-[#f6e07b] hover:text-[#000000] h-10 w-10"
              >
                <Heart className="h-4 w-4" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Link href={`/products/${product.slug}`}>
                <Button 
                  size="icon" 
                  variant="secondary" 
                  className="rounded-full bg-white/90 hover:bg-[#f6e07b] hover:text-[#000000] h-10 w-10"
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
        
        <div className="p-5 text-center">
          <Link 
            href={`/products/${product.slug}`} 
            className="block hover:text-[#99672c] transition-colors"
          >
            <h3 className="font-medium mb-2 text-base">{product.name}</h3>
          </Link>
          <p className="text-[#99672c] font-semibold">${product.price.toFixed(2)}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}