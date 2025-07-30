const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-playfair text-3xl font-bold mb-4">Al Manar</h3>
            <p className="font-inter text-background/80 mb-6 max-w-md">
              Crafting exceptional fragrances that capture the essence of luxury and elegance. 
              Discover your signature scent with Al Manar.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center cursor-pointer hover:bg-brand-blue-dark transition-colors">
                <span className="text-foreground font-bold text-sm">f</span>
              </div>
              <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center cursor-pointer hover:bg-brand-blue-dark transition-colors">
                <span className="text-foreground font-bold text-sm">i</span>
              </div>
              <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center cursor-pointer hover:bg-brand-blue-dark transition-colors">
                <span className="text-foreground font-bold text-sm">t</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-inter font-semibold text-lg mb-4">Collection</h4>
            <ul className="space-y-2 font-inter text-background/80">
              <li className="hover:text-brand-blue cursor-pointer transition-colors">Azure Dreams</li>
              <li className="hover:text-brand-blue cursor-pointer transition-colors">Celestial Mist</li>
              <li className="hover:text-brand-blue cursor-pointer transition-colors">Sapphire Nights</li>
              <li className="hover:text-brand-blue cursor-pointer transition-colors">All Fragrances</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-inter font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 font-inter text-background/80">
              <li>+1 (555) 123-4567</li>
              <li>info@almanar.com</li>
              <li>123 Luxury Avenue</li>
              <li>New York, NY 10001</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="font-inter text-background/60">
            © 2024 Al Manar. All rights reserved. | Crafted with passion for perfume excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;