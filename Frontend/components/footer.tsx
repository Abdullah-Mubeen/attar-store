import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-6">
            <Image src="/logo.png" alt="Jameel Fragrance" width={40} height={40} className="object-contain" />
            <span className="font-playfair text-xl font-bold ml-2 text-[#99672c]">Jameel</span>
          </div>
          <p className="text-gray-400 mb-6">
            Experience luxury with our handcrafted attars and perfumes.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#f0d173]"><Facebook className="h-6 w-6" /></a>
            <a href="#" className="hover:text-[#f0d173]"><Instagram className="h-6 w-6" /></a>
            <a href="#" className="hover:text-[#f0d173]"><Twitter className="h-6 w-6" /></a>
            <a href="#" className="hover:text-[#f0d173]"><Linkedin className="h-6 w-6" /></a>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#99672c]">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            {['Home', 'Products', 'About Us', 'Contact'].map((link, i) => (
              <li key={i}>
                <Link href={`/${link.toLowerCase().replace(' ', '-')}`} className="hover:text-[#f0d173]">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#99672c]">Customer Service</h3>
          <ul className="space-y-3 text-gray-400">
            {['FAQ', 'Shipping & Returns', 'Privacy Policy', 'Terms & Conditions'].map((link, i) => (
              <li key={i}>
                <Link href="#" className="hover:text-[#f0d173]">{link}</Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#99672c]">Newsletter</h3>
          <p className="text-gray-400 mb-4">Subscribe for exclusive deals and updates.</p>
          <div className="flex space-x-2">
            <Input placeholder="Your email" className="bg-gray-800 text-white" />
            <Button className="bg-[#f0d173] hover:bg-[#d4b060] text-black">Subscribe</Button>
          </div>
        </div>
      </div>
      
      <Separator className="mt-8 border-gray-700" />
      
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Jameel Fragrance. All rights reserved.</p>
        <div className="flex space-x-4">
          <Image src="/payment-visa.svg" alt="Visa" width={40} height={24} />
          <Image src="/payment-mastercard.svg" alt="Mastercard" width={40} height={24} />
          <Image src="/payment-paypal.svg" alt="PayPal" width={40} height={24} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
