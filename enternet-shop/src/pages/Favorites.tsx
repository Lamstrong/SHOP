
import { useState } from 'react';
import { Heart, ShoppingCart, Star, Grid, List, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: 'iPhone 15 Pro Max 256GB',
      price: 120000,
      originalPrice: 140000,
      rating: 4.8,
      reviews: 245,
      image: '/placeholder.svg',
      discount: 15,
      isNew: true,
    },
    {
      id: 2,
      title: 'MacBook Air M2 13"',
      price: 95000,
      originalPrice: 110000,
      rating: 4.9,
      reviews: 189,
      image: '/placeholder.svg',
      discount: 14,
      isHit: true,
    },
    {
      id: 3,
      title: 'AirPods Pro 2nd Gen',
      price: 22000,
      originalPrice: 28000,
      rating: 4.7,
      reviews: 567,
      image: '/placeholder.svg',
      discount: 21,
    },
  ]);

  const removeFromFavorites = (id: number) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-black gradient-text mb-2">Избранное</h1>
          <p className="text-muted-foreground">Ваши любимые товары ({favorites.length})</p>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="w-24 h-24 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-bold mb-2">Пока здесь пусто</h2>
            <p className="text-muted-foreground mb-6">Добавляйте товары в избранное, нажимая на ❤️</p>
            <Link to="/catalog">
              <Button className="gradient-primary button-3d font-bold">
                Перейти в каталог
              </Button>
            </Link>
          </div>
        ) : (
          <div>
            {/* Панель управления */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                Найдено {favorites.length} товаров
              </p>
              
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

            {/* Сетка товаров */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {favorites.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl border border-border/30 p-6 product-card-hover group glassmorphism">
                  <div className="relative mb-4">
                    <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {product.isNew && (
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold shadow-lg">
                          Новинка
                        </Badge>
                      )}
                      {product.isHit && (
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold shadow-lg">
                          🔥 Хит
                        </Badge>
                      )}
                      {product.discount && (
                        <Badge className="bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold shadow-lg">
                          -{product.discount}%
                        </Badge>
                      )}
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFromFavorites(product.id)}
                      className="absolute top-3 right-3 w-10 h-10 p-0 glassmorphism hover:bg-red-50 text-red-500 hover:text-red-700 transition-all duration-300"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
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
                      <span className="text-sm text-muted-foreground">({product.reviews})</span>
                    </div>
                    
                    <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-black gradient-text">{product.price} ₽</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice} ₽
                        </span>
                      )}
                    </div>
                    
                    <Button className="w-full gradient-primary button-3d font-bold">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      В корзину
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
