
import { useState, useMemo } from 'react';
import { Search, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import CategoryFilter from '@/components/CategoryFilter';
import PriceFilter from '@/components/PriceFilter';

const Catalog = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все категории');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(999999);

  const categories = [
    'Все категории', 'Электроника', 'Смартфоны', 'Ноутбуки', 'Наушники', 
    'Одежда', 'Дом и сад', 'Спорт', 'Красота', 'Детские товары', 
    'Автотовары', 'Книги', 'Игрушки'
  ];

  const allProducts = [
    {
      id: 1,
      title: "Смартфон Samsung Galaxy A54 128GB Black",
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
    {
      id: 9,
      title: "Футболка Nike Dri-FIT мужская",
      price: "2990",
      originalPrice: "3500",
      discount: "15%",
      rating: 4.3,
      reviews: 245,
      image: "/placeholder.svg",
      seller: "Nike Official",
      category: "Одежда"
    },
    {
      id: 10,
      title: "Кроссовки Adidas Ultraboost 22",
      price: "12990",
      rating: 4.6,
      reviews: 456,
      image: "/placeholder.svg",
      isNew: true,
      seller: "Adidas Store",
      category: "Одежда"
    }
  ];

  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'Все категории' || product.category === selectedCategory;
      const price = parseInt(product.price);
      const matchesPrice = price >= minPrice && price <= maxPrice;
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchQuery, selectedCategory, minPrice, maxPrice]);

  const handlePriceChange = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-4 sm:py-8">
        {/* Заголовок */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-black gradient-text mb-2 sm:mb-4">Каталог товаров</h1>
          <p className="text-muted-foreground text-sm sm:text-lg">Найдите всё, что вам нужно в нашем E-Store</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-4 sm:gap-8">
          {/* Фильтры */}
          <div className="hidden lg:block lg:col-span-1">
            <CategoryFilter 
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            <PriceFilter 
              minPrice={minPrice}
              maxPrice={maxPrice}
              onPriceChange={handlePriceChange}
            />
          </div>

          {/* Товары */}
          <div className="lg:col-span-3">
            {/* Панель управления */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="relative flex-1 max-w-md w-full sm:w-auto">
                <Input
                  placeholder="Поиск товаров..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="button-3d"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="button-3d"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Результаты поиска */}
            <div className="mb-4">
              <p className="text-muted-foreground text-sm">
                Найдено товаров: <span className="font-semibold">{filteredProducts.length}</span>
                {selectedCategory !== 'Все категории' && (
                  <span> в категории "{selectedCategory}"</span>
                )}
              </p>
            </div>

            {/* Сетка товаров */}
            <div className={`grid gap-4 sm:gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Сообщение если товары не найдены */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">Товары не найдены</h3>
                <p className="text-muted-foreground">
                  Попробуйте изменить параметры поиска или фильтры
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
