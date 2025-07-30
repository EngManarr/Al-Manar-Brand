import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-overlay"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="font-playfair text-6xl md:text-8xl font-bold text-foreground mb-6 animate-fade-in">
          Al Manar
        </h1>
        <p className="font-inter text-xl md:text-2xl text-brand-gray mb-4 max-w-2xl mx-auto">
          Luxury Perfumes Collection
        </p>
        <p className="font-inter text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover our exquisite fragrances crafted with the finest ingredients from around the world. 
          Each scent tells a unique story of elegance and sophistication.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-brand-blue hover:bg-brand-blue-dark text-foreground font-inter font-medium px-8 py-3 shadow-luxury transition-all duration-300 hover:shadow-glow"
          >
            Explore Collection
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-foreground font-inter font-medium px-8 py-3 transition-all duration-300"
          >
            Our Story
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;