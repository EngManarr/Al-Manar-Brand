const CollectionGallery = () => {
  const galleryImages = [
    {
      id: 1,
      title: "Artisan Craftsmanship",
      description: "Each bottle is meticulously crafted by skilled artisans",
    },
    {
      id: 2,
      title: "Premium Ingredients",
      description: "Sourced from the finest perfumeries worldwide",
    },
    {
      id: 3,
      title: "Elegant Design",
      description: "Timeless bottles that complement any vanity",
    },
    {
      id: 4,
      title: "Signature Scents",
      description: "Unique fragrances that define your personality",
    },
  ];

  return (
    <section className="py-20 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Gallery
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Step into the world of Al Manar and discover the artistry behind each fragrance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-luxury transition-all duration-500"
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-brand-blue-light to-brand-blue flex items-center justify-center">
                <div className="w-16 h-24 bg-white/20 rounded-lg shadow-lg transform group-hover:scale-110 transition-transform duration-500"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-playfair text-xl font-semibold mb-2">
                    {image.title}
                  </h3>
                  <p className="font-inter text-sm opacity-90">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-luxury">
            <h3 className="font-playfair text-3xl font-bold text-foreground mb-4">
              Experience Al Manar
            </h3>
            <p className="font-inter text-muted-foreground mb-6 max-w-md">
              Visit our flagship store or explore our complete collection online. 
              Each fragrance comes with a personal consultation to find your perfect scent.
            </p>
            <button className="font-inter bg-brand-blue hover:bg-brand-blue-dark text-foreground px-8 py-3 rounded-lg transition-colors duration-300 font-medium shadow-card">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionGallery;