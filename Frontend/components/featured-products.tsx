"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingBag, Heart } from 'lucide-react';

const products = {
  attars: [
    {
      id: 1,
      name: "Royal Oud Attar",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
      slug: "royal-oud-attar",
      isNew: true,
      isBestseller: false
    },
    {
      id: 2,
      name: "Mystic Amber Attar",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1616604426203-61859411dea8?q=80&w=800&auto=format&fit=crop",
      slug: "mystic-amber-attar",
      isNew: false,
      isBestseller: true
    },
    {
      id: 3,
      name: "Saffron Rose Attar",
      price: 109.99,
      image: "https://images.unsplash.com/photo-1595425964071-2c1ecb10b52d?q=80&w=800&auto=format&fit=crop",
      slug: "saffron-rose-attar",
      isNew: false,
      isBestseller: false
    },
    {
      id: 4,
      name: "Sandalwood Musk Attar",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?q=80&w=800&auto=format&fit=crop",
      slug: "sandalwood-musk-attar",
      isNew: true,
      isBestseller: false
    }
  ],
  perfumes: [
    {
      id: 5,
      name: "Midnight Orchid",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1592945403407-9caf930b2c8d?q=80&w=800&auto=format&fit=crop",
      slug: "midnight-orchid",
      isNew: true,
      isBestseller: false
    },
    {
      id: 6,
      name: "Golden Amber",
      price: 119.99,
      image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?q=80&w=800&auto=format&fit=crop",
      slug: "golden-amber",
      isNew: false,
      isBestseller: true
    },
    {
      id: 7,
      name: "Velvet Noir",
      price: 139.99,
      image: "https://images.unsplash.com/photo-1608528577891-eb055944f2e7?q=80&w=800&auto=format&fit=crop",
      slug: "velvet-noir",
      isNew: false,
      isBestseller: false
    },
    {
      id: 8,
      name: "Ethereal Mist",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=800&auto=format&fit=crop",
      slug: "ethereal-mist",
      isNew: true,
      isBestseller: true
    }
  ]
};

const ProductCard = ({ product }: { product: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card className="overflow-hidden border-none shadow-md group bg-white">
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
          />
          
          {(product.isNew || product.isBestseller) && (
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
              {product.isNew && (
                <span className="inline-block bg-[#9b692e] text-[#f2d377] text-xs px-3 py-1 font-medium tracking-wider uppercase">
                  New
                </span>
              )}
              {product.isBestseller && (
                <span className="inline-block bg-black text-[#f2d377] text-xs px-3 py-1 font-medium tracking-wider uppercase">
                  Bestseller
                </span>
              )}
            </div>
          )}
          
          <div className={`absolute inset-0 bg-black/40 flex items-center justify-center gap-3 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <Button 
              size="icon" 
              className="rounded-full bg-black/70 hover:bg-[#9b692e] text-[#f2d377] hover:text-[#f2d377] border border-[#f2d377]/30 h-12 w-12 transition-all duration-300"
            >
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button 
              size="icon" 
              className="rounded-full bg-black/70 hover:bg-[#9b692e] text-[#f2d377] hover:text-[#f2d377] border border-[#f2d377]/30 h-12 w-12 transition-all duration-300"
            >
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="p-5 text-center">
          <Link href={`/products/${product.slug}`} className="block group-hover:text-[#9b692e] transition-colors duration-300">
            <h3 className="font-medium mb-2 text-sm uppercase tracking-wider">{product.name}</h3>
          </Link>
          <p className="text-[#9b692e] font-semibold">${product.price}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const FeaturedProducts = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#f9f7f2] to-[#f5f1e6]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          {/* Gold accent line */}
          <div className="w-20 h-1 bg-[#9b692e] mb-6 mx-auto"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a1a1a]">Exquisite <span className="text-[#9b692e]">Collection</span></h2>
          <p className="text-[#555555] max-w-2xl mx-auto">
            Discover our handcrafted selection of premium fragrances, created with the finest ingredients sourced from around the world.
          </p>
        </div>
        
        <Tabs defaultValue="attars" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-white/80 border border-[#9b692e]/20 h-12 p-1 shadow-sm">
              <TabsTrigger 
                value="attars" 
                className="text-sm uppercase tracking-wider px-8 data-[state=active]:bg-[#9b692e] data-[state=active]:text-[#f2d377] data-[state=inactive]:text-[#555555]"
              >
                Attars
              </TabsTrigger>
              <TabsTrigger 
                value="perfumes" 
                className="text-sm uppercase tracking-wider px-8 data-[state=active]:bg-[#9b692e] data-[state=active]:text-[#f2d377] data-[state=inactive]:text-[#555555]"
              >
                Perfumes
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="attars" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.attars.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="perfumes" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.perfumes.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-16">
          <Button className="bg-[#9b692e] hover:bg-[#f2d377] hover:text-black text-white border-none rounded-none px-8 py-6 h-auto text-sm font-medium tracking-wider uppercase transition-all duration-300">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;