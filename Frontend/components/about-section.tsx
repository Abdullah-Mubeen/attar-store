import { Droplets, Award, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: <Droplets className="h-10 w-10 text-[#9b692e]" />,
    title: "Premium Ingredients",
    description: "Our fragrances are crafted using only the finest natural ingredients, sourced from around the world."
  },
  {
    icon: <Award className="h-10 w-10 text-[#9b692e]" />,
    title: "Artisanal Quality",
    description: "Each fragrance is handcrafted by master perfumers with decades of experience in traditional techniques."
  },
  {
    icon: <Clock className="h-10 w-10 text-[#9b692e]" />,
    title: "Long-Lasting Scent",
    description: "Our concentrated formulations ensure that your fragrance remains vibrant throughout the day."
  },
  {
    icon: <Shield className="h-10 w-10 text-[#9b692e]" />,
    title: "Ethical Sourcing",
    description: "We are committed to sustainable and ethical sourcing practices for all our ingredients."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-[#9b692e] mb-6 mx-auto"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a1a1a]">Why Choose <span className="text-[#9b692e]">ATTARLUXE</span></h2>
          <p className="text-[#555555] max-w-2xl mx-auto">
            Discover the exceptional qualities that set our luxury fragrances apart.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#f9f7f2] p-8 rounded-md border border-[#9b692e]/10 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-full bg-[#f2d377]/20 group-hover:bg-[#f2d377]/30 transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-[#1a1a1a]">{feature.title}</h3>
              <p className="text-[#555555] text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;