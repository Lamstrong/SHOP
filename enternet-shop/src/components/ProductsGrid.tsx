
import ProductCard from './ProductCard';

const ProductsGrid = () => {
  // Mock product data с обновленными данными продавцов
  const products = [
    {
      id: 1,
      title: "Смартфон Samsung Galaxy A54 128GB",
      price: "29990",
      originalPrice: "34990",
      discount: "14%",
      rating: 4.5,
      reviews: 1234,
      image: "/placeholder.svg",
      isHit: true,
      seller: "Samsung Official",
      category: "Смартфоны"
    },
    {
      id: 2,
      title: "Наушники Apple AirPods Pro 2-го поколения",
      price: "19990",
      rating: 4.8,
      reviews: 892,
      image: "/placeholder.svg",
      isNew: true,
      seller: "Apple Store",
      category: "Наушники"
    },
    {
      id: 3,
      title: "Ноутбук ASUS VivoBook 15 Intel Core i5",
      price: "54990",
      originalPrice: "59990",
      discount: "9%",
      rating: 4.3,
      reviews: 456,
      image: "/placeholder.svg",
      seller: "ASUS Official",
      category: "Ноутбуки"
    },
    {
      id: 4,
      title: "Умные часы Apple Watch Series 9 GPS 45mm",
      price: "42990",
      rating: 4.7,
      reviews: 678,
      image: "/placeholder.svg",
      isHit: true,
      seller: "Apple Store",
      category: "Электроника"
    },
    {
      id: 5,
      title: "Планшет Samsung Galaxy Tab A8 32GB Wi-Fi",
      price: "16990",
      originalPrice: "19990",
      discount: "15%",
      rating: 4.2,
      reviews: 321,
      image: "/placeholder.svg",
      seller: "Samsung Official",
      category: "Электроника"
    },
    {
      id: 6,
      title: "Беспроводная мышь Logitech MX Master 3S",
      price: "7990",
      rating: 4.6,
      reviews: 234,
      image: "/placeholder.svg",
      isNew: true,
      seller: "Logitech Store",
      category: "Электроника"
    },
    {
      id: 7,
      title: "Игровая клавиатура Razer BlackWidow V3",
      price: "12990",
      originalPrice: "15990",
      discount: "19%",
      rating: 4.4,
      reviews: 567,
      image: "/placeholder.svg",
      seller: "Razer Official",
      category: "Электроника"
    },
    {
      id: 8,
      title: "Фитнес-браслет Xiaomi Mi Band 8",
      price: "3990",
      rating: 4.1,
      reviews: 1123,
      image: "/placeholder.svg",
      isHit: true,
      seller: "Xiaomi Store",
      category: "Электроника"
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">Популярные товары</h2>
          <button className="text-primary hover:text-primary/80 transition-colors">
            Смотреть все
          </button>
        </div>
        
        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
