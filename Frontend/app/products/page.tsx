import { ProductGrid } from '@/components/product-grid';
import { ProductFilter } from '@/components/product-filter';

export const metadata = {
  title: 'Products | Jameel Fragrance',
  description: 'Browse our exclusive collection of luxury attars and perfumes.',
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-8">Our Collection</h1>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Discover our exquisite range of handcrafted attars and perfumes, created with the finest ingredients from around the world.
      </p>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/4">
          <ProductFilter />
        </div>
        <div className="w-full lg:w-3/4">
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}