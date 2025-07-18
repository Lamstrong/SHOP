
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import Categories from '@/components/Categories';
import ProductsGrid from '@/components/ProductsGrid';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroBanner />
        <Categories />
        <ProductsGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
