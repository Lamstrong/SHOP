
import { useState } from 'react';
import { User, Mail, Phone, MapPin, CreditCard, Package, Heart, Settings, LogOut, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Иван Петров',
    email: 'ivan.petrov@email.com',
    phone: '+7 (999) 123-45-67',
    address: 'г. Москва, ул. Примерная, д. 123',
  });

  const orders = [
    { id: 1, date: '2024-01-15', status: 'Доставлен', total: 45000, items: 3 },
    { id: 2, date: '2024-01-10', status: 'В пути', total: 12500, items: 1 },
    { id: 3, date: '2024-01-05', status: 'Обрабатывается', total: 78000, items: 2 },
  ];

  const menuItems = [
    { id: 'profile', label: 'Профиль', icon: User },
    { id: 'orders', label: 'Заказы', icon: Package },
    { id: 'favorites', label: 'Избранное', icon: Heart },
    { id: 'cards', label: 'Карты', icon: CreditCard },
    { id: 'settings', label: 'Настройки', icon: Settings },
  ];

  const handleSave = () => {
    setIsEditing(false);
    console.log('Saving user data:', userData);
  };

  const renderProfileContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold gradient-text">Личная информация</h2>
              <Button
                variant="outline"
                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                className="button-3d"
              >
                <Edit className="w-4 h-4 mr-2" />
                {isEditing ? 'Сохранить' : 'Редактировать'}
              </Button>
            </div>

            <div className="grid gap-6">
              <div>
                <label className="text-sm font-semibold mb-2 block">Имя</label>
                <Input
                  value={userData.name}
                  onChange={(e) => setUserData({...userData, name: e.target.value})}
                  disabled={!isEditing}
                  className={isEditing ? '' : 'bg-muted'}
                />
              </div>
              
              <div>
                <label className="text-sm font-semibold mb-2 block">Email</label>
                <Input
                  value={userData.email}
                  onChange={(e) => setUserData({...userData, email: e.target.value})}
                  disabled={!isEditing}
                  className={isEditing ? '' : 'bg-muted'}
                />
              </div>
              
              <div>
                <label className="text-sm font-semibold mb-2 block">Телефон</label>
                <Input
                  value={userData.phone}
                  onChange={(e) => setUserData({...userData, phone: e.target.value})}
                  disabled={!isEditing}
                  className={isEditing ? '' : 'bg-muted'}
                />
              </div>
              
              <div>
                <label className="text-sm font-semibold mb-2 block">Адрес</label>
                <Input
                  value={userData.address}
                  onChange={(e) => setUserData({...userData, address: e.target.value})}
                  disabled={!isEditing}
                  className={isEditing ? '' : 'bg-muted'}
                />
              </div>
            </div>
          </div>
        );
      
      case 'orders':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold gradient-text">Мои заказы</h2>
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="glassmorphism rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold">Заказ #{order.id}</h3>
                      <p className="text-sm text-muted-foreground">{order.date}</p>
                    </div>
                    <Badge 
                      className={
                        order.status === 'Доставлен' ? 'bg-green-100 text-green-800' :
                        order.status === 'В пути' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }
                    >
                      {order.status}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {order.items} товара на сумму
                    </span>
                    <span className="font-bold gradient-text">{order.total} ₽</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      default:
        return (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-2">Раздел в разработке</h2>
            <p className="text-muted-foreground">Этот раздел скоро будет доступен</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Боковое меню */}
          <div className="lg:col-span-1">
            <div className="glassmorphism rounded-2xl p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-semibold gradient-text">{userData.name}</h3>
                <p className="text-sm text-muted-foreground">{userData.email}</p>
              </div>

              <nav className="space-y-2">
                {menuItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${
                        activeTab === item.id
                          ? 'bg-primary/10 text-primary font-semibold'
                          : 'hover:bg-accent/50'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                      {item.label}
                    </button>
                  );
                })}
                
                <hr className="my-4 border-border" />
                
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 text-red-600 transition-colors text-left">
                  <LogOut className="w-5 h-5" />
                  Выйти
                </button>
              </nav>
            </div>
          </div>

          {/* Основной контент */}
          <div className="lg:col-span-3">
            <div className="glassmorphism rounded-2xl p-8">
              {renderProfileContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
