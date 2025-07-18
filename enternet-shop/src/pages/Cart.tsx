
import { useState } from 'react';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Смартфон Samsung Galaxy',
      price: 45000,
      quantity: 1,
      image: '/placeholder.svg',
    },
    {
      id: 2,
      title: 'Наушники Sony WH-1000XM4',
      price: 25000,
      quantity: 2,
      image: '/placeholder.svg',
    },
    {
      id: 3,
      title: 'Ноутбук MacBook Air',
      price: 95000,
      quantity: 1,
      image: '/placeholder.svg',
    },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/catalog" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Продолжить покупки
          </Link>
          <h1 className="text-4xl font-black gradient-text">Корзина</h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag className="w-24 h-24 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-bold mb-2">Корзина пуста</h2>
            <p className="text-muted-foreground mb-6">Добавьте товары, чтобы начать покупки</p>
            <Link to="/catalog">
              <Button className="gradient-primary button-3d font-bold">
                Перейти в каталог
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="glassmorphism rounded-2xl p-6 flex items-center gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-xl font-black gradient-text">{item.price} ₽</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 p-0"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <Input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                      className="w-16 text-center"
                      min="1"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 p-0"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="glassmorphism rounded-2xl p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4 gradient-text">Итого</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Товары ({cartItems.length})</span>
                    <span>{totalPrice} ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Доставка</span>
                    <span className="text-green-600 font-semibold">Бесплатно</span>
                  </div>
                  <hr className="border-border" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>К оплате</span>
                    <span className="gradient-text">{totalPrice} ₽</span>
                  </div>
                </div>

                <Button className="w-full gradient-primary button-3d font-bold text-lg py-3 mb-4">
                  Оформить заказ
                </Button>
                
                <div className="text-xs text-muted-foreground text-center">
                  Нажимая "Оформить заказ", вы соглашаетесь с условиями использования
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
