const BrandStory = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
                The Al Manar Story
              </h2>
              <p className="font-inter text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in the heart of tradition and innovation, Al Manar represents the perfect 
                harmony between timeless elegance and contemporary sophistication. Our journey began 
                with a simple vision: to create fragrances that transcend ordinary experiences.
              </p>
              <p className="font-inter text-lg text-muted-foreground mb-8 leading-relaxed">
                Every Al Manar fragrance is a testament to our commitment to excellence, crafted 
                with rare ingredients sourced from the most prestigious perfume houses around the world. 
                We believe that a great perfume is not just a scent, but a personal signature that 
                speaks to the soul.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-brand-cream rounded-lg">
                  <div className="font-playfair text-3xl font-bold text-brand-blue mb-2">50+</div>
                  <div className="font-inter text-sm text-muted-foreground">Unique Fragrances</div>
                </div>
                <div className="text-center p-4 bg-brand-cream rounded-lg">
                  <div className="font-playfair text-3xl font-bold text-brand-blue mb-2">15</div>
                  <div className="font-inter text-sm text-muted-foreground">Years of Excellence</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-brand-blue-light to-brand-blue rounded-2xl shadow-luxury flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-8">
                  <div className="w-12 h-16 bg-white/30 rounded-lg shadow-lg"></div>
                  <div className="w-12 h-16 bg-white/20 rounded-lg shadow-lg mt-4"></div>
                  <div className="w-12 h-16 bg-white/20 rounded-lg shadow-lg -mt-2"></div>
                  <div className="w-12 h-16 bg-white/30 rounded-lg shadow-lg mt-2"></div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-gold rounded-full shadow-glow flex items-center justify-center">
                <span className="font-playfair text-white font-bold text-lg">AM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;