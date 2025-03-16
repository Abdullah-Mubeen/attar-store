"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft, Droplets } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Discover Luxury Fragrances",
    subtitle: "Handcrafted Attars & Perfumes",
    description: "Experience the art of perfumery with our exclusive collection of premium fragrances.",
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=2000&auto=format&fit=crop",
    cta: "Shop Collection"
  },
  {
    id: 2,
    title: "The Essence of Tradition",
    subtitle: "Authentic Arabic Attars",
    description: "Immerse yourself in the rich heritage of traditional attar making, perfected over generations.",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=2000&auto=format&fit=crop",
    cta: "Explore Attars"
  },
  {
    id: 3,
    title: "Modern Elegance",
    subtitle: "Contemporary Perfumes",
    description: "Discover our modern interpretations of classic fragrances, designed for the discerning individual.",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=2000&auto=format&fit=crop",
    cta: "View Perfumes"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-xl transform transition-all duration-1000 ease-out translate-y-0">
                {/* Gold accent line */}
                <div className="w-20 h-1 bg-[#f2d377] mb-6"></div>
                
                <p className="text-[#f2d377] font-medium mb-3 tracking-wider uppercase text-sm">{slide.subtitle}</p>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-white/90 text-lg mb-10 leading-relaxed">
                  {slide.description}
                </p>
                <Button className="bg-[#9b692e] hover:bg-[#f2d377] hover:text-black text-white border-none rounded-none px-8 py-6 h-auto text-sm font-medium tracking-wider uppercase transition-all duration-300">
                  {slide.cta} <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Counter - Enhanced */}
      <div className="absolute bottom-10 right-10 z-30 flex items-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative mx-2 transition-all duration-500 ease-in-out ${
              index === currentSlide ? 'scale-125' : 'opacity-70 hover:opacity-100'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
              index === currentSlide 
                ? 'border-[#f2d377] bg-[#9b692e]/30' 
                : 'border-white/30 bg-transparent hover:border-[#f2d377]/50'
            }`}>
              <span className={`text-sm font-bold ${
                index === currentSlide ? 'text-[#f2d377]' : 'text-white/70'
              }`}>
                {(index + 1).toString().padStart(2, '0')}
              </span>
            </div>
            {index === currentSlide && (
              <svg className="absolute -inset-1 opacity-70" viewBox="0 0 100 100">
                <circle 
                  cx="50" cy="50" r="48" 
                  fill="none" 
                  stroke="#f2d377" 
                  strokeWidth="2"
                  strokeDasharray="302"
                  strokeDashoffset="302"
                  className="animate-[dash_6s_linear_forwards]"
                />
              </svg>
            )}
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <div className="h-1 bg-[#f2d377]/30">
          <div 
            className="h-full bg-[#f2d377] transition-all duration-300 ease-linear"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;