
import { Heart, ShoppingCart, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  title: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  rating: number;
  reviews: number;
  image: string;
  isNew?: boolean;
  isHit?: boolean;
  seller?: string;
  category?: string;
}

const ProductCard = ({
  id,
  title,
  price,
  originalPrice,
  discount,
  rating,
  reviews,
  image,
  isNew,
  isHit,
  seller,
  category,
}: ProductCardProps) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(`Added product ${id} to cart`);
    // TODO: Implement cart functionality
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(`Toggled favorite for product ${id}`);
    // TODO: Implement favorites functionality
  };

  return (
    <Link 
      to={`/product/${id}`}
      className="block bg-white rounded-2xl border border-border/30 p-6 product-card-hover group glassmorphism transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
    >
      {/* Image */}
      <div className="relative mb-6">
        <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold shadow-lg">
              <Zap className="w-3 h-3 mr-1" />
              Новинка
            </Badge>
          )}
          {isHit && (
            <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold shadow-lg">
              🔥 Хит
            </Badge>
          )}
          {discount && (
            <Badge className="bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold shadow-lg">
              -{discount}
            </Badge>
          )}
        </div>
        
        {/* Favorite button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 w-10 h-10 p-0 glassmorphism hover:bg-white/90 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          onClick={handleToggleFavorite}
        >
          <Heart className="w-4 h-4 hover:text-red-500 transition-colors" />
        </Button>
      </div>
      
      {/* Content */}
      <div className="space-y-4">
        {/* Category */}
        {category && (
          <div className="text-xs text-muted-foreground font-medium">
            {category}
          </div>
        )}
        
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground font-medium">({reviews})</span>
        </div>
        
        {/* Title */}
        <h3 className="text-base font-semibold line-clamp-2 min-h-[3rem] text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        {/* Seller */}
        {seller && (
          <div className="text-xs text-muted-foreground">
            Продавец: <span className="font-medium">{seller}</span>
          </div>
        )}
        
        {/* Price */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black gradient-text">{price} ₽</span>
            {originalPrice && (
              <span className="text-base text-muted-foreground line-through font-medium">
                {originalPrice} ₽
              </span>
            )}
          </div>
        </div>
        
        {/* Add to cart button */}
        <Button 
          className="w-full gradient-primary button-3d font-bold text-base py-3 group-hover:shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-300"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          В корзину
        </Button>
      </div>
    </Link>
  );
};

export default ProductCard;
