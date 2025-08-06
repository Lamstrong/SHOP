import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCard from "@/components/productCard";
import { useEffect, useState } from "react";
import { Product } from "@/store/store";
import { api } from "@/api/api";
import { FadeLoader, ClipLoader } from "react-spinners";

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

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Загрузка...
        <ClipLoader loading={!loading} size={40} />
      </div>
    );
  if (error) return <div>{error}</div>;

  return (
    <>
      <Header />
      <main>
        <div
          className=""
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "16px",
            padding: "0 5%",
            margin: "20px auto",
            boxSizing: "border-box",
          }}
        >
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
