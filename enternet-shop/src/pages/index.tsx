import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCard from "@/components/productCard";
import { useEffect, useState } from "react";
import { Product, useStore } from "@/store/store";
import { api } from "@/api/api";
import { FadeLoader, ClipLoader } from "react-spinners";
import Filters from "@/components/Filters";
import "@/home.css";

const Index = () => {
  const { productList, loading, error, fetchProducts, getFilteredProducts } =
    useStore();

  const products = getFilteredProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading)
    return (
      <div className="loader">
        <div>Загрузка...</div>
      </div>
    );

  if (error)
    return (
      <div className="error">
        <div>{error}</div>
      </div>
    );

  return (
    <>
      <Header />
      <main>
        <div className="">
          <Filters />
        </div>
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
        <div className="">
          {productList.length === 0 ||
            (!loading && (
              <div className="">
                <p>Товары не найдены</p>
              </div>
            ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
