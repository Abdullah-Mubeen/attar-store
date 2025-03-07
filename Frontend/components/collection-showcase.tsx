import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const CollectionShowcase = () => {
  return (
    <section className="py-24 bg-black/95">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-md overflow-hidden h-[550px] group">
            <Image
              src="https://images.unsplash.com/photo-1616604426203-61859411dea8?q=80&w=1200&auto=format&fit=crop"
              alt="Traditional Attars"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-10">
              {/* Gold accent line */}
              <div className="w-16 h-1 bg-[#f2d377] mb-6"></div>

              <p className="text-[#f2d377] font-medium mb-3 tracking-wider uppercase text-sm">
                Traditional Collection
              </p>
              <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                Authentic Attars
              </h3>
              <p className="text-white/80 mb-8 max-w-md leading-relaxed">
                Experience the rich heritage of traditional attar making with
                our authentic collection, crafted using centuries-old
                techniques.
              </p>
              <Link href="/attar">
                <Button className="bg-[#9b692e] hover:bg-[#f2d377] hover:text-black text-white border-none rounded-none px-8 py-6 h-auto text-sm font-medium tracking-wider uppercase transition-all duration-300 w-fit flex items-center">
                  Explore Collection <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative rounded-md overflow-hidden h-[550px] group">
            <Image
              src="https://images.unsplash.com/photo-1595425964071-2c1ecb10b52d?q=80&w=1200&auto=format&fit=crop"
              alt="Modern Perfumes"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-10">
              {/* Gold accent line */}
              <div className="w-16 h-1 bg-[#f2d377] mb-6"></div>

              <p className="text-[#f2d377] font-medium mb-3 tracking-wider uppercase text-sm">
                Modern Collection
              </p>
              <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                Luxury Perfumes
              </h3>
              <p className="text-white/80 mb-8 max-w-md leading-relaxed">
                Discover our contemporary perfumes, blending time-honored
                traditions with modern sophistication for the discerning
                individual.
              </p>
              <Link href="/perfume">
                <Button className="bg-[#9b692e] hover:bg-[#f2d377] hover:text-black text-white border-none rounded-none px-8 py-6 h-auto text-sm font-medium tracking-wider uppercase transition-all duration-300 w-fit flex items-center">
                  Discover More <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionShowcase;
