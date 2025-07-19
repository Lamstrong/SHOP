
import { Search, Heart, ShoppingCart, User, Menu, Sparkles, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const Header = () => {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const categories = [
    {
      name: 'Электроника',
      subcategories: ['Смартфоны', 'Ноутбуки', 'Телевизоры', 'Наушники', 'Планшеты']
    },
    {
      name: 'Одежда и обувь',
      subcategories: ['Мужская одежда', 'Женская одежда', 'Детская одежда', 'Обувь', 'Аксессуары']
    },
    {
      name: 'Дом и сад',
      subcategories: ['Мебель', 'Декор', 'Садовые товары', 'Кухня', 'Ванная']
    },
    {
      name: 'Красота и здоровье',
      subcategories: ['Косметика', 'Парфюмерия', 'Уход за кожей', 'Витамины', 'Медтехника']
    },
    {
      name: 'Спорт и отдых',
      subcategories: ['Фитнес', 'Туризм', 'Велосипеды', 'Зимний спорт', 'Водный спорт']
    },
    {
      name: 'Детские товары',
      subcategories: ['Игрушки', 'Одежда', 'Коляски', 'Автокресла', 'Питание']
    },
  ];
  
  return (
    <header className="bg-white/98 backdrop-blur-xl border-b border-border/40 sticky top-0 z-50 shadow-xl">
      <div className="container mx-auto px-2 sm:px-4">
        {/* Top bar - скрыт на мобильных */}
        <div className="hidden md:flex items-center justify-between py-2 text-xs text-muted-foreground border-b border-border/20">
          <div className="flex items-center gap-4">
            <span className="font-medium">Москва</span>
            <span>•</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Доставка и оплата</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-primary transition-colors cursor-pointer">Продавайте на E-Store</span>
            <span>•</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Помощь</span>
          </div>
        </div>
        
        {/* Main header */}
        <div className="flex items-center justify-between py-3 sm:py-4 gap-2 sm:gap-4">
          {/* Mobile menu trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden p-2">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 p-0">
              <SheetHeader className="p-6 border-b">
                <SheetTitle className="text-left gradient-text">Каталог товаров</SheetTitle>
              </SheetHeader>
              <div className="p-4">
                {categories.map((category) => (
                  <div key={category.name} className="mb-4">
                    <h3 className="font-semibold text-sm mb-2 text-primary">{category.name}</h3>
                    <div className="space-y-1">
                      {category.subcategories.map((sub) => (
                        <Link
                          key={sub}
                          to={`/catalog?category=${encodeURIComponent(sub)}`}
                          className="block px-3 py-2 text-sm hover:bg-accent rounded-lg transition-colors"
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-12 sm:h-12 gradient-primary rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg neon-glow">
              <Sparkles className="text-white w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <span className="text-xl sm:text-3xl font-black gradient-text">E-Store</span>
          </Link>
          
          {/* Desktop Catalog menu */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="border-2 border-primary/20 hover:border-primary/40 bg-white/80 backdrop-blur-sm font-semibold hover:bg-gradient-to-r hover:from-white hover:to-purple-50/50 transition-all duration-300 button-3d">
                  <Menu className="w-4 h-4 mr-2" />
                  Каталог
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 gap-6 p-6 w-[600px]">
                    {categories.map((category) => (
                      <div key={category.name}>
                        <h3 className="font-bold text-sm mb-3 text-primary">{category.name}</h3>
                        <div className="space-y-2">
                          {category.subcategories.map((sub) => (
                            <Link
                              key={sub}
                              to={`/catalog?category=${encodeURIComponent(sub)}`}
                              className="block text-sm hover:text-primary transition-colors hover:translate-x-1 duration-200"
                            >
                              {sub}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          {/* Search */}
          <div className="flex-1 max-w-xl mx-2 sm:mx-4">
            <form className="relative">
              <Input 
                placeholder="Поиск товаров..."
                className={`pl-4 pr-12 h-10 sm:h-12 rounded-xl sm:rounded-2xl border-2 border-muted bg-white/90 backdrop-blur-sm focus:border-primary/50 text-sm sm:text-base font-medium shadow-lg transition-all duration-300 ${
                  isSearchOpen ? 'w-full' : 'sm:w-full'
                }`}
                onFocus={() => setIsSearchOpen(true)}
                onBlur={() => setIsSearchOpen(false)}
              />
              <Button 
                type="submit"
                size="sm" 
                className="absolute right-1 top-1 h-8 w-8 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl gradient-primary shadow-lg hover:shadow-purple-500/25 transition-all duration-300 button-3d"
              >
                <Search className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </form>
          </div>
          
          {/* Action buttons */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Link to="/favorites">
              <Button 
                variant="ghost" 
                size="sm" 
                className={`flex items-center gap-1 sm:gap-2 hover:bg-purple-50/50 font-medium transition-all duration-300 button-3d p-2 sm:px-3 ${
                  location.pathname === '/favorites' ? 'text-primary bg-primary/10' : ''
                }`}
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden lg:inline text-sm">Избранное</span>
              </Button>
            </Link>
            
            <Link to="/cart">
              <Button 
                variant="ghost" 
                size="sm" 
                className={`flex items-center gap-1 sm:gap-2 relative hover:bg-purple-50/50 font-medium transition-all duration-300 button-3d p-2 sm:px-3 ${
                  location.pathname === '/cart' ? 'text-primary bg-primary/10' : ''
                }`}
              >
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden lg:inline text-sm">Корзина</span>
                <Badge className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 p-0 flex items-center justify-center text-xs gradient-primary shadow-lg">
                  3
                </Badge>
              </Button>
            </Link>
            
            <Link to="/profile">
              <Button 
                variant="ghost" 
                size="sm" 
                className={`flex items-center gap-1 sm:gap-2 hover:bg-purple-50/50 font-medium transition-all duration-300 button-3d p-2 sm:px-3 ${
                  location.pathname === '/profile' ? 'text-primary bg-primary/10' : ''
                }`}
              >
                <User className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden lg:inline text-sm">Профиль</span>
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Bottom navigation - только на больших экранах */}
        <nav className="hidden xl:flex items-center gap-8 py-3 border-t border-border/20">
          {[
            { name: 'Новинки', href: '/catalog?filter=new' },
            { name: 'Скидки', href: '/catalog?filter=sale' },
            { name: 'Бренды', href: '/catalog?filter=brands' },
            { name: 'Premium', href: '/catalog?filter=premium' },
          ].map((item) => (
            <Link 
              key={item.name}
              to={item.href}
              className="text-sm font-medium hover:text-primary transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
