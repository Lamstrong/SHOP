
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, Star, Plus, Minus, ShoppingCart, Truck, Shield, RotateCcw, Store, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock product data - в реальном приложении это будет загружаться с сервера
  const product = {
    id: id || '1',
    title: 'Apple iPhone 15 Pro Max 256GB Titanium Natural',
    price: 129990,
    originalPrice: 149990,
    rating: 4.8,
    reviews: 2547,
    discount: 13,
    category: 'Смартфоны',
    images: [
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg'
    ],
    description: 'iPhone 15 Pro Max с титановым корпусом и камерой 48 Мп. Самый мощный чип A17 Pro для невероятной производительности. Поддержка Action Button для быстрого доступа к функциям.',
    specifications: {
      'Диагональ экрана': '6.7"',
      'Разрешение': '2796x1290',
      'Память': '256 ГБ',
      'ОЗУ': '8 ГБ',
      'Камера': '48 Мп + 12 Мп + 12 Мп',
      'Батарея': '4441 мАч',
      'ОС': 'iOS 17',
      'Процессор': 'Apple A17 Pro',
      'Материал корпуса': 'Титан',
      'Цвет': 'Natural Titanium'
    },
    inStock: true,
    delivery: 'Завтра до 18:00',
    seller: {
      name: 'Apple Store Official',
      rating: 4.9,
      reviews: 15847,
      address: 'Москва, ТЦ Авиапарк',
      workingHours: '10:00 - 22:00',
      isOfficial: true
    }
  };

  const reviews = [
    {
      id: 1,
      author: 'Алексей М.',
      rating: 5,
      date: '15 января 2024',
      text: 'Отличный телефон! Камера превосходная, батарея держит целый день активного использования. Титановый корпус выглядит премиально. Доставка быстрая, упаковка идеальная.',
      helpful: 12,
      images: []
    },
    {
      id: 2,
      author: 'Мария К.',
      rating: 4,
      date: '10 января 2024',
      text: 'Качество на высшем уровне, но цена действительно кусается. Action Button удобная штука. В целом довольна покупкой, но ожидала большего от батареи.',
      helpful: 8,
      images: []
    },
    {
      id: 3,
      author: 'Дмитрий П.',
      rating: 5,
      date: '5 января 2024',
      text: 'Переходил с Android и не жалею. Экосистема Apple работает безупречно. Камера в разы лучше предыдущих моделей.',
      helpful: 15,
      images: []
    }
  ];

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of product ${id} to cart`);
    // TODO: Implement cart functionality
  };

  const handleBuyNow = () => {
    console.log(`Buy now: ${quantity} of product ${id}`);
    // TODO: Implement buy now functionality
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
          <span>/</span>
          <Link to="/catalog" className="hover:text-primary transition-colors">Каталог</Link>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span className="text-foreground line-clamp-1">{product.title}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 xl:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-2xl border border-border/30 p-8 glassmorphism overflow-hidden">
              <img 
                src={product.images[selectedImage]} 
                alt={product.title}
                className="w-full h-full object-contain hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-white rounded-xl border-2 p-2 transition-all duration-300 ${
                    selectedImage === index 
                      ? 'border-primary shadow-lg' 
                      : 'border-border/30 hover:border-primary/50'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground mb-2">{product.category}</div>
                  <h1 className="text-2xl xl:text-3xl font-bold mb-3">{product.title}</h1>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-lg font-semibold ml-2">{product.rating}</span>
                    </div>
                    <span className="text-muted-foreground">({product.reviews} отзывов)</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`button-3d ${isFavorite ? 'text-red-500' : ''}`}
                  >
                    <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                  </Button>
                  <Button variant="ghost" size="sm" className="button-3d">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Seller Info */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Store className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-lg">{product.seller.name}</h3>
                    {product.seller.isOfficial && (
                      <Badge className="bg-green-100 text-green-800 border-green-300">
                        ✓ Официальный
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{product.seller.rating} ({product.seller.reviews} отзывов)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{product.seller.address}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{product.seller.workingHours}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-primary/20">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl xl:text-4xl font-black gradient-text">{product.price.toLocaleString()} ₽</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      {product.originalPrice.toLocaleString()} ₽
                    </span>
                    <Badge className="gradient-primary text-white font-bold">
                      -{product.discount}%
                    </Badge>
                  </>
                )}
              </div>
              
              {product.inStock ? (
                <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                  ✓ В наличии
                </Badge>
              ) : (
                <Badge variant="outline" className="text-red-600 border-red-200 bg-red-50">
                  Нет в наличии
                </Badge>
              )}
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-semibold">Количество:</span>
                <div className="flex items-center border border-border rounded-xl overflow-hidden">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 h-10 rounded-none hover:bg-accent"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="px-4 py-2 font-semibold">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 h-10 rounded-none hover:bg-accent"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-3">
                <Button 
                  className="h-12 text-base font-bold gradient-primary button-3d"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  В корзину
                </Button>
                <Button 
                  variant="outline" 
                  className="h-12 text-base font-bold border-2 button-3d"
                  onClick={handleBuyNow}
                >
                  Купить в 1 клик
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/50 border border-border/30">
                <Truck className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-semibold text-sm">Быстрая доставка</div>
                  <div className="text-xs text-muted-foreground">{product.delivery}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/50 border border-border/30">
                <Shield className="w-6 h-6 text-green-600" />
                <div>
                  <div className="font-semibold text-sm">Гарантия</div>
                  <div className="text-xs text-muted-foreground">12 месяцев</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/50 border border-border/30">
                <RotateCcw className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="font-semibold text-sm">Возврат</div>
                  <div className="text-xs text-muted-foreground">14 дней</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
              <TabsTrigger value="description">Описание</TabsTrigger>
              <TabsTrigger value="specifications">Характеристики</TabsTrigger>
              <TabsTrigger value="reviews">Отзывы ({product.reviews})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-6">
              <div className="bg-white rounded-2xl border border-border/30 p-8 glassmorphism">
                <h3 className="text-xl font-bold mb-4">О товаре</h3>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>
            </TabsContent>
            
            <TabsContent value="specifications" className="mt-6">
              <div className="bg-white rounded-2xl border border-border/30 p-8 glassmorphism">
                <h3 className="text-xl font-bold mb-6">Технические характеристики</h3>
                <div className="grid gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-3 border-b border-border/20 last:border-0">
                      <span className="text-muted-foreground">{key}</span>
                      <span className="font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-border/30 p-6 glassmorphism">
                  <h3 className="text-xl font-bold mb-4">Сводка отзывов</h3>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-black gradient-text">{product.rating}</div>
                      <div className="flex items-center justify-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">{product.reviews} отзывов</div>
                    </div>
                  </div>
                </div>
                
                {reviews.map((review) => (
                  <div key={review.id} className="bg-white rounded-2xl border border-border/30 p-6 glassmorphism">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="font-semibold">{review.author}</div>
                        <div className="text-sm text-muted-foreground">{review.date}</div>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{review.text}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Полезно ({review.helpful})
                      </div>
                      <Button variant="ghost" size="sm" className="text-xs">
                        👍 Полезно
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
