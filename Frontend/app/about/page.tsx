import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

export const metadata = {
  title: 'About Us | Jameel Fragrance',
  description: 'Learn about our journey, values, and commitment to crafting the finest attars and perfumes.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Our Story</h1>
        <p className="text-lg text-muted-foreground">
          Discover the passion and craftsmanship behind Jameel Fragrance
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-playfair font-bold mb-4">Our Heritage</h2>
          <p className="text-muted-foreground mb-4">
            Founded in 2005, Jameel Fragrance began as a small family business dedicated to preserving the ancient art of attar making. Our founder, inspired by generations of perfumers in his family, set out to create fragrances that honor tradition while embracing modern sensibilities.
          </p>
          <p className="text-muted-foreground">
            Today, we continue to handcraft our attars and perfumes using time-honored techniques, sourcing the finest ingredients from around the world to create scents that tell a story and evoke emotion.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1616604426203-61859411dea8?q=80&w=1200&auto=format&fit=crop" 
            alt="Perfume crafting" 
            fill 
            className="object-cover"
          />
        </div>
      </div>
      
      <Separator className="my-16" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="bg-card p-8 rounded-lg">
          <h3 className="text-2xl font-playfair font-bold mb-4">Our Values</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#c9a96e] flex items-center justify-center mt-1">
                <span className="text-white text-xs">1</span>
              </div>
              <p><span className="font-medium">Quality</span> - We never compromise on the quality of our ingredients or processes.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#c9a96e] flex items-center justify-center mt-1">
                <span className="text-white text-xs">2</span>
              </div>
              <p><span className="font-medium">Sustainability</span> - We source responsibly and minimize our environmental impact.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#c9a96e] flex items-center justify-center mt-1">
                <span className="text-white text-xs">3</span>
              </div>
              <p><span className="font-medium">Craftsmanship</span> - We honor traditional techniques while embracing innovation.</p>
            </li>
          </ul>
        </div>
        
        <div className="bg-card p-8 rounded-lg">
          <h3 className="text-2xl font-playfair font-bold mb-4">Our Process</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#c9a96e] flex items-center justify-center mt-1">
                <span className="text-white text-xs">1</span>
              </div>
              <p><span className="font-medium">Sourcing</span> - We carefully select the finest raw materials from trusted suppliers.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#c9a96e] flex items-center justify-center mt-1">
                <span className="text-white text-xs">2</span>
              </div>
              <p><span className="font-medium">Distillation</span> - We use traditional steam distillation methods for pure extracts.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#c9a96e] flex items-center justify-center mt-1">
                <span className="text-white text-xs">3</span>
              </div>
              <p><span className="font-medium">Aging</span> - Our attars are aged to perfection to develop complex notes.</p>
            </li>
          </ul>
        </div>
        
        <div className="bg-card p-8 rounded-lg">
          <h3 className="text-2xl font-playfair font-bold mb-4">Our Promise</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#c9a96e] flex items-center justify-center mt-1">
                <span className="text-white text-xs">1</span>
              </div>
              <p><span className="font-medium">Authenticity</span> - Every product is 100% authentic with no synthetic additives.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#c9a96e] flex items-center justify-center mt-1">
                <span className="text-white text-xs">2</span>
              </div>
              <p><span className="font-medium">Satisfaction</span> - We stand behind our products with a satisfaction guarantee.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#c9a96e] flex items-center justify-center mt-1">
                <span className="text-white text-xs">3</span>
              </div>
              <p><span className="font-medium">Service</span> - We provide exceptional customer service and expert guidance.</p>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-playfair font-bold mb-6">Meet Our Team</h2>
        <p className="text-muted-foreground mb-12">
          Behind every bottle of Jameel Fragrance is a team of passionate experts dedicated to the art of perfumery.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
              <Image 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" 
                alt="Team member" 
                fill 
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-medium mb-1">Ahmed Jameel</h3>
            <p className="text-muted-foreground">Founder & Master Perfumer</p>
          </div>
          
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
              <Image 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" 
                alt="Team member" 
                fill 
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-medium mb-1">Sarah Khan</h3>
            <p className="text-muted-foreground">Head of Product Development</p>
          </div>
          
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
              <Image 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop" 
                alt="Team member" 
                fill 
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-medium mb-1">Rahul Sharma</h3>
            <p className="text-muted-foreground">Chief Aromatherapist</p>
          </div>
        </div>
      </div>
    </div>
  );
}