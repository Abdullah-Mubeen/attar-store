"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Fragrance Enthusiast",
    quote: "ATTARLUXE fragrances have transformed my collection. The Royal Oud Attar has a depth and complexity that I've never experienced before. It's become my signature scent.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Perfume Collector",
    quote: "As someone who has collected perfumes for over a decade, I can confidently say that ATTARLUXE offers some of the most authentic and high-quality attars on the market.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 3,
    name: "Amina Patel",
    title: "Luxury Boutique Owner",
    quote: "My customers constantly request ATTARLUXE products. The Saffron Rose Attar has become our bestseller, with clients appreciating its authentic aroma and lasting power.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    rating: 5
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-[#9b692e] mb-6 mx-auto"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a1a1a]">Client <span className="text-[#9b692e]">Testimonials</span></h2>
          <p className="text-[#555555] max-w-2xl mx-auto">
            Discover what our clients have to say about their experience with our luxury fragrances.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-[#f9f7f2] p-10 md:p-16 rounded-md shadow-sm border border-[#9b692e]/10">
            {/* Quote mark */}
            <div className="absolute top-6 left-6 text-[#9b692e]/20 text-8xl font-serif">"</div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-[#f2d377]/30">
                  <Image 
                    src={currentTestimonial.avatar} 
                    alt={currentTestimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#f2d377] text-[#f2d377]" />
                ))}
              </div>
              
              <blockquote className="text-center mb-8">
                <p className="text-lg md:text-xl text-[#333333] italic leading-relaxed">
                  "{currentTestimonial.quote}"
                </p>
              </blockquote>
              
              <div className="text-center">
                <p className="font-semibold text-[#1a1a1a]">{currentTestimonial.name}</p>
                <p className="text-[#9b692e] text-sm">{currentTestimonial.title}</p>
              </div>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-5">
              <Button 
                onClick={prevTestimonial}
                size="icon"
                className="rounded-full bg-white hover:bg-[#9b692e] text-[#9b692e] hover:text-[#f2d377] border border-[#9b692e]/20 h-10 w-10 shadow-sm"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-5">
              <Button 
                onClick={nextTestimonial}
                size="icon"
                className="rounded-full bg-white hover:bg-[#9b692e] text-[#9b692e] hover:text-[#f2d377] border border-[#9b692e]/20 h-10 w-10 shadow-sm"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;