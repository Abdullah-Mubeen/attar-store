
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ProductGallery } from '@/components/product-gallery';
import { ProductReviews } from '@/components/product-reviews';
import { RelatedProducts } from '@/components/related-products';
import { ChevronRight, Star } from 'lucide-react';

// Sample product data
const products = [
  {
    name: 'Royal Oud Attar',
    slug: 'royal-oud-attar',
    price: 129.99,
    description: 'A luxurious blend of rare agarwood, sandalwood, and exotic spices. This premium attar offers a rich, long-lasting fragrance that evolves beautifully throughout the day.',
    features: [
      'Made with 100% natural ingredients',
      'Alcohol-free formulation',
      'Long-lasting fragrance (8-10 hours)',
      'Handcrafted in small batches',
      'Comes in an elegant glass bottle'
    ],
    images: [
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616604426203-61859411dea8?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595425964071-2c1ecb10b52d?q=80&w=800&auto=format&fit=crop'
    ],
    sizes: ['10ml', '25ml', '50ml'],
    inStock: true,
    rating: 4.8,
    reviewCount: 156
  }
];

// Generate static paths
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Page component
export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return <div className="container mx-auto p-10 text-center text-red-600">Product not found</div>;
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Perfume Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-[#f2d377] mb-4">
                <span className="text-sm uppercase tracking-wider">Premium Collection</span>
                <ChevronRight className="h-4 w-4" />
                <span className="text-sm uppercase tracking-wider">{product.name}</span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                Experience the Magic of<br />
                <span className="text-[#f2d377]">Traditional Attars</span>
              </h1>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-[#f2d377] text-[#f2d377]' : 'text-gray-400'}`}
                    />
                  ))}
                </div>
                <span className="text-white/80">({product.reviewCount} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ProductGallery images={product.images} />
          
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-2">{product.name}</h2>
            <div className="flex items-center gap-4 mb-4">
              <p className="text-2xl font-medium text-[#c9a96e]">${product.price}</p>
              <div className="h-6 w-[1px] bg-gray-300"></div>
              <span className="text-green-600 font-medium">In Stock</span>
            </div>
            <p className="text-muted-foreground mb-8">{product.description}</p>
            
            <div className="mb-8">
            <h3 className="text-lg font-medium mb-3">Size</h3>
            <div className="flex gap-3">
              {product.sizes.map((size) => (
                <Button key={size} variant="outline" className="rounded-full px-6">
                  {size}
                </Button>
              ))}
            </div>
          </div>
            
            <div className="flex gap-4 mb-8">
            <Button size="lg" className="bg-[#c9a96e] hover:bg-[#b89355] text-white">
              Add to Cart
            </Button>
            <Button size="lg" variant="outline">
              Add to Wishlist
            </Button>
          </div>
          
          <Separator className="my-6" />
            
            <div>
              <h3 className="text-lg font-medium mb-3">Features</h3>
              <ul className="list-disc pl-5 space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-muted-foreground">{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <Separator className="my-16" />
        <ProductReviews />
        <Separator className="my-16" />
        <RelatedProducts />
      </div>
    </>
  );
}