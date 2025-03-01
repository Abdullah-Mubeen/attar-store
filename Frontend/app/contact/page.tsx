import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Jameel Fragrance',
  description: 'Get in touch with our team for inquiries, support, or to visit our store.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-muted-foreground">
          We'd love to hear from you. Reach out to us with any questions or inquiries.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-playfair font-bold mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <Input id="subject" placeholder="Subject of your message" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea id="message" placeholder="Your message" rows={6} />
            </div>
            
            <Button className="bg-[#c9a96e] hover:bg-[#b89355] text-white w-full sm:w-auto">
              Send Message
            </Button>
          </form>
        </div>
        
        <div>
          <h2 className="text-2xl font-playfair font-bold mb-6">Get in Touch</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-[#c9a96e] mt-1" />
              <div>
                <h3 className="font-medium mb-1">Visit Our Store</h3>
                <p className="text-muted-foreground">123 Fragrance Avenue, Luxury District</p>
                <p className="text-muted-foreground">New Delhi, 110001, India</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-[#c9a96e] mt-1" />
              <div>
                <h3 className="font-medium mb-1">Call Us</h3>
                <p className="text-muted-foreground">+91 98765 43210</p>
                <p className="text-muted-foreground">+91 12345 67890</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-[#c9a96e] mt-1" />
              <div>
                <h3 className="font-medium mb-1">Email Us</h3>
                <p className="text-muted-foreground">info@jameelfragrance.com</p>
                <p className="text-muted-foreground">support@jameelfragrance.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-[#c9a96e] mt-1" />
              <div>
                <h3 className="font-medium mb-1">Opening Hours</h3>
                <p className="text-muted-foreground">Monday - Saturday: 10:00 AM - 8:00 PM</p>
                <p className="text-muted-foreground">Sunday: 11:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-card p-6 rounded-lg">
            <h3 className="font-medium mb-3">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#c9a96e] flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#c9a96e] flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#c9a96e] flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#c9a96e] flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="rounded-lg overflow-hidden h-[400px] relative">
        {/* In a real application, you would embed a Google Map here */}
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <p className="text-muted-foreground">Map Placeholder - In a real application, a Google Map would be embedded here</p>
        </div>
      </div>
    </div>
  );
}