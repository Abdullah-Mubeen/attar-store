import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Newsletter = () => {
  return (
    <section className="py-20 bg-[#c9a96e]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to receive updates on new products, special offers, and fragrance tips.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="bg-background"
            />
            <Button className="bg-[#c9a96e] hover:bg-[#b89355] text-white">
              Subscribe
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;