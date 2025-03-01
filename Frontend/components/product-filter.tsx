"use client";

import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function ProductFilter() {
  const [priceRange, setPriceRange] = useState([0, 200]);
  
  const categories = [
    { id: 'attars', label: 'Attars' },
    { id: 'perfumes', label: 'Perfumes' },
    { id: 'gift-sets', label: 'Gift Sets' },
    { id: 'accessories', label: 'Accessories' },
  ];
  
  const scents = [
    { id: 'woody', label: 'Woody' },
    { id: 'floral', label: 'Floral' },
    { id: 'oriental', label: 'Oriental' },
    { id: 'spicy', label: 'Spicy' },
    { id: 'citrus', label: 'Citrus' },
    { id: 'fruity', label: 'Fruity' },
  ];
  
  const sizes = [
    { id: '10ml', label: '10ml' },
    { id: '25ml', label: '25ml' },
    { id: '50ml', label: '50ml' },
    { id: '100ml', label: '100ml' },
  ];
  
  return (
    <div className="space-y-6 bg-background/50 p-6 rounded-lg backdrop-blur-sm border border-border/30">
      <div>
        <h3 className="text-lg font-medium mb-4">Filters</h3>
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full border-[#99672c]/30 hover:bg-[#f6e07b]/10 hover:text-[#99672c]"
        >
          Clear All Filters
        </Button>
      </div>
      
      <Separator className="bg-[#99672c]/20" />
      
      <Accordion type="multiple" defaultValue={['categories', 'price', 'scent']}>
        <AccordionItem value="categories" className="border-b-[#99672c]/20">
          <AccordionTrigger className="text-base font-medium hover:text-[#99672c]">Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-3">
                  <Checkbox 
                    id={category.id} 
                    className="border-[#99672c]/50 data-[state=checked]:bg-[#99672c] data-[state=checked]:text-white"
                  />
                  <label htmlFor={category.id} className="text-sm cursor-pointer hover:text-[#99672c]">
                    {category.label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="price" className="border-b-[#99672c]/20">
          <AccordionTrigger className="text-base font-medium hover:text-[#99672c]">Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <Slider
                defaultValue={[0, 200]}
                max={300}
                step={10}
                value={priceRange}
                onValueChange={setPriceRange}
                className="[&>[data-state=dragging]]:bg-[#99672c] [&>span]:bg-[#99672c]"
              />
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium bg-[#f6e07b]/20 text-[#99672c] px-2 py-1 rounded">
                  ${priceRange[0]}
                </span>
                <span className="text-sm font-medium bg-[#f6e07b]/20 text-[#99672c] px-2 py-1 rounded">
                  ${priceRange[1]}
                </span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="scent" className="border-b-[#99672c]/20">
          <AccordionTrigger className="text-base font-medium hover:text-[#99672c]">Scent Profile</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {scents.map((scent) => (
                <div key={scent.id} className="flex items-center space-x-3">
                  <Checkbox 
                    id={scent.id} 
                    className="border-[#99672c]/50 data-[state=checked]:bg-[#99672c] data-[state=checked]:text-white"
                  />
                  <label htmlFor={scent.id} className="text-sm cursor-pointer hover:text-[#99672c]">
                    {scent.label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="size" className="border-b-[#99672c]/20">
          <AccordionTrigger className="text-base font-medium hover:text-[#99672c]">Size</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {sizes.map((size) => (
                <div key={size.id} className="flex items-center space-x-3">
                  <Checkbox 
                    id={size.id} 
                    className="border-[#99672c]/50 data-[state=checked]:bg-[#99672c] data-[state=checked]:text-white"
                  />
                  <label htmlFor={size.id} className="text-sm cursor-pointer hover:text-[#99672c]">
                    {size.label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <Separator className="bg-[#99672c]/20" />
      
      <div>
        <h3 className="text-base font-medium mb-3">Featured</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Checkbox 
              id="new-arrivals" 
              className="border-[#99672c]/50 data-[state=checked]:bg-[#99672c] data-[state=checked]:text-white"
            />
            <label htmlFor="new-arrivals" className="text-sm cursor-pointer hover:text-[#99672c]">
              New Arrivals
            </label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox 
              id="bestsellers" 
              className="border-[#99672c]/50 data-[state=checked]:bg-[#99672c] data-[state=checked]:text-white"
            />
            <label htmlFor="bestsellers" className="text-sm cursor-pointer hover:text-[#99672c]">
              Bestsellers
            </label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox 
              id="on-sale" 
              className="border-[#99672c]/50 data-[state=checked]:bg-[#99672c] data-[state=checked]:text-white"
            />
            <label htmlFor="on-sale" className="text-sm cursor-pointer hover:text-[#99672c]">
              On Sale
            </label>
          </div>
        </div>
      </div>
      
      <Separator className="bg-[#99672c]/20" />
      
      <Button className="w-full bg-[#99672c] hover:bg-[#99672c]/90 text-white">
        Apply Filters
      </Button>
    </div>
  );
}