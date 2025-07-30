import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    name: "Azure Dreams",
    description: "A captivating blend of bergamot, jasmine, and sandalwood that evokes the serenity of ocean waves.",
    price: "$120",
    category: "Fresh & Aquatic",
    notes: ["Bergamot", "Jasmine", "Sandalwood"],
  },
  {
    id: 2,
    name: "Celestial Mist",
    description: "An ethereal fragrance combining white tea, peony, and soft musk for a divine sensory experience.",
    price: "$145",
    category: "Floral & Elegant",
    notes: ["White Tea", "Peony", "Soft Musk"],
  },
  {
    id: 3,
    name: "Sapphire Nights",
    description: "A mysterious and alluring scent with notes of vanilla, amber, and precious woods.",
    price: "$165",
    category: "Warm & Sensual",
    notes: ["Vanilla", "Amber", "Precious Woods"],
  },
];

const ProductShowcase = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Signature Collection
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Each fragrance in our collection is a masterpiece, carefully composed to capture 
            unique emotions and memories.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="bg-gradient-card border-0 shadow-card hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 group"
            >
              <CardContent className="p-8">
                <div className="aspect-square bg-brand-blue-light rounded-lg mb-6 flex items-center justify-center group-hover:bg-brand-blue transition-colors duration-300">
                  <div className="w-24 h-32 bg-brand-blue rounded-lg shadow-lg transform group-hover:scale-110 transition-transform duration-300"></div>
                </div>
                
                <Badge className="bg-brand-blue text-foreground mb-4 font-inter">
                  {product.category}
                </Badge>
                
                <h3 className="font-playfair text-2xl font-semibold text-foreground mb-3">
                  {product.name}
                </h3>
                
                <p className="font-inter text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="mb-4">
                  <p className="font-inter text-sm text-brand-gray mb-2">Key Notes:</p>
                  <div className="flex flex-wrap gap-2">
                    {product.notes.map((note, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-brand-cream text-foreground px-2 py-1 rounded-full font-inter"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-playfair text-2xl font-bold text-foreground">
                    {product.price}
                  </span>
                  <button className="font-inter bg-brand-blue hover:bg-brand-blue-dark text-foreground px-6 py-2 rounded-lg transition-colors duration-300 font-medium">
                    Learn More
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;