import Hero from '@/components/hero';
import FeaturedProducts from '@/components/featured-products';
import CollectionShowcase from '@/components/collection-showcase';
import Testimonials from '@/components/testimonials';
import Newsletter from '@/components/newsletter';
import AboutSection from '@/components/about-section';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <FeaturedProducts />
      <CollectionShowcase />
      <AboutSection />
      <Testimonials />
      <Newsletter />
    </div>
  );
}