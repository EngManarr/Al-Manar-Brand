import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import CollectionGallery from "@/components/CollectionGallery";
import BrandStory from "@/components/BrandStory";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductShowcase />
      <BrandStory />
      <CollectionGallery />
      <Footer />
    </div>
  );
};

export default Index;
