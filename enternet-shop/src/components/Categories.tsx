
import { 
  Smartphone, 
  Laptop, 
  Shirt, 
  Home, 
  Palette, 
  Dumbbell, 
  Baby, 
  Book,
  Car,
  Gamepad2,
  Music,
  Camera
} from 'lucide-react';

const Categories = () => {
  const categories = [
    { name: 'Электроника', icon: Smartphone, color: 'bg-blue-100 text-blue-600' },
    { name: 'Компьютеры', icon: Laptop, color: 'bg-purple-100 text-purple-600' },
    { name: 'Одежда', icon: Shirt, color: 'bg-pink-100 text-pink-600' },
    { name: 'Дом и сад', icon: Home, color: 'bg-green-100 text-green-600' },
    { name: 'Красота', icon: Palette, color: 'bg-orange-100 text-orange-600' },
    { name: 'Спорт', icon: Dumbbell, color: 'bg-red-100 text-red-600' },
    { name: 'Детские товары', icon: Baby, color: 'bg-yellow-100 text-yellow-600' },
    { name: 'Книги', icon: Book, color: 'bg-indigo-100 text-indigo-600' },
    { name: 'Авто', icon: Car, color: 'bg-gray-100 text-gray-600' },
    { name: 'Игры', icon: Gamepad2, color: 'bg-cyan-100 text-cyan-600' },
    { name: 'Музыка', icon: Music, color: 'bg-rose-100 text-rose-600' },
    { name: 'Фото', icon: Camera, color: 'bg-teal-100 text-teal-600' },
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          Популярные категории
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.name}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1"
              >
                <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {category.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
