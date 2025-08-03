import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCard from "@/components/productCard";
import { useEffect, useState } from "react";
import { Product } from "@/store/store";
import { api } from "@/api/api";

const Index = () => {
  const [products, setProducts] = useState<Product[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await api.getProducts();
        setProducts(data);
      } catch (err) {
        setError("Не удалось загрузить товары");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Header />
      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
