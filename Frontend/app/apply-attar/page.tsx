"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Droplets, 
  Wind, 
  Sparkles, 
  SprayCan, 
  Heart, 
  XCircle, 
  CheckCircle2, 
  Shirt,
  Fingerprint,
  Flame
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const attarSteps = [
  {
    title: "The Sacred Ritual",
    description: "Begin with clean, moisturized skin to create the perfect canvas for your attar",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&q=80&w=2000",
  },
  {
    title: "Pulse Points",
    description: "Apply attar to warm pulse points: wrists, neck, and behind ears",
    icon: Fingerprint,
    image: "https://images.unsplash.com/photo-1583467875263-d9e87993c703?auto=format&fit=crop&q=80&w=2000",
  },
  {
    title: "Clothing Application",
    description: "Gently dab attar on clothing fabric, allowing the oils to blend naturally",
    icon: Shirt,
    image: "https://images.unsplash.com/photo-1556774687-0e2fdd0116c0?auto=format&fit=crop&q=80&w=2000",
  },
];

const perfumeSteps = [
  {
    title: "The Perfect Distance",
    description: "Hold perfume 6-8 inches away from skin for optimal dispersion",
    icon: SprayCan,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=2000",
  },
  {
    title: "Cloud Method",
    description: "Create a fragrance cloud and walk through it for even distribution",
    icon: Wind,
    image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&q=80&w=2000",
  },
  {
    title: "Layer & Lock",
    description: "Use matching body lotion to enhance longevity",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1616004675303-ae5657c14af7?auto=format&fit=crop&q=80&w=2000",
  },
];

const dosAndDonts = {
  do: [
    { text: "Store in a cool, dark place", icon: Heart },
    { text: "Apply to moisturized skin", icon: CheckCircle2 },
    { text: "Layer with matching products", icon: Sparkles },
  ],
  dont: [
    { text: "Rub wrists together", icon: XCircle },
    { text: "Store in bathroom", icon: Flame },
    { text: "Over-apply fragrance", icon: SprayCan },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-4"
        >
          <h1 className="text-5xl md:text-7xl font-light mb-6 text-[#9b692e]">
            The Art of Fragrance
          </h1>
          <p className="text-xl md:text-2xl text-[#000000]/80 max-w-2xl mx-auto mb-8">
            A journey through the ancient art of Attar and modern elegance of Perfume
          </p>
          <Card className="p-6 bg-white/50 backdrop-blur border border-[#f0d173]/20 max-w-xl mx-auto">
            <p className="text-[#9b692e] italic">
              "Fragrance is the voice of inanimate things" - Mary Webb
            </p>
          </Card>
        </motion.div>
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(45deg, rgba(240,209,115,0.1) 0%, rgba(155,105,46,0.1) 100%)",
          }}
        />
      </section>

      {/* Attar Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-[#9b692e]">Attar: The Ancient Art</h2>
          <p className="text-lg md:text-xl text-[#000000]/80 max-w-3xl mx-auto">
            Discover the traditional method of applying concentrated oil-based fragrances
          </p>
        </motion.div>
        {attarSteps.map((step, index) => (
          <StepSection
            key={index}
            step={step}
            index={index}
            isEven={index % 2 === 0}
          />
        ))}
      </section>

      {/* Perfume Section */}
      <section className="py-20 px-4 bg-[#f0d173]/5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-[#9b692e]">Modern Perfumery</h2>
          <p className="text-lg md:text-xl text-[#000000]/80 max-w-3xl mx-auto">
            Master the contemporary approach to fragrance application
          </p>
        </motion.div>
        {perfumeSteps.map((step, index) => (
          <StepSection
            key={index}
            step={step}
            index={index}
            isEven={index % 2 === 0}
          />
        ))}
      </section>

      {/* Do's & Don'ts Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-[#9b692e] text-center">
            Essential Guidelines
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 border-[#f0d173]/20">
              <h3 className="text-2xl font-light mb-6 text-[#9b692e]">Do's</h3>
              <div className="space-y-6">
                {dosAndDonts.do.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <item.icon className="w-6 h-6 text-[#9b692e]" />
                    <span className="text-lg text-[#000000]/80">{item.text}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-8 border-[#f0d173]/20">
              <h3 className="text-2xl font-light mb-6 text-[#9b692e]">Don'ts</h3>
              <div className="space-y-6">
                {dosAndDonts.dont.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <item.icon className="w-6 h-6 text-[#9b692e]" />
                    <span className="text-lg text-[#000000]/80">{item.text}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Final Call to Action */}
      <section className="min-h-[50vh] bg-[#f0d173]/10 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-[#9b692e]">
            Begin Your Fragrance Journey
          </h2>
          <p className="text-lg md:text-xl text-[#000000]/80 mb-8">
            Explore our curated collection of premium attars and perfumes
          </p>
          <Button
            className="bg-[#9b692e] hover:bg-[#9b692e]/90 text-white px-8 py-6 text-lg"
          >
            Shop Now
          </Button>
        </motion.div>
      </section>
    </main>
  );
}

function StepSection({ step, index, isEven }) {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className={`w-full md:w-1/2 p-8 md:p-16 z-10 ${
          isEven ? "md:ml-auto" : ""
        }`}
      >
        <div className="max-w-xl">
          <step.icon className="w-12 h-12 text-[#f0d173] mb-6" />
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-[#9b692e]">
            {step.title}
          </h2>
          <p className="text-lg text-[#000000]/80">{step.description}</p>
        </div>
      </motion.div>
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${step.image})`,
          opacity: 0.15,
        }}
      />
    </section>
  );
}