
import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register attempt:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <div className="glassmorphism rounded-3xl p-8 shadow-2xl neon-glow">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-black gradient-text mb-2">Регистрация</h1>
              <p className="text-muted-foreground">Создайте аккаунт в E-Store</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold">Имя</label>
                <div className="relative">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold">Email</label>
                <div className="relative">
                  <Input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold">Телефон</label>
                <div className="relative">
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold">Пароль</label>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Введите пароль"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10 pr-10"
                    required
                  />
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold">Подтвердите пароль</label>
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="Повторите пароль"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="pl-10 pr-10"
                    required
                  />
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-start text-sm">
                <input type="checkbox" className="mr-2 mt-1" required />
                <span className="text-muted-foreground">
                  Я согласен с{' '}
                  <Link to="#" className="text-primary hover:text-primary/80 transition-colors">
                    условиями использования
                  </Link>{' '}
                  и{' '}
                  <Link to="#" className="text-primary hover:text-primary/80 transition-colors">
                    политикой конфиденциальности
                  </Link>
                </span>
              </div>

              <Button type="submit" className="w-full gradient-primary button-3d font-bold text-lg py-3">
                Зарегистрироваться
              </Button>
            </form>

            <div className="mt-6 text-center">
              <span className="text-muted-foreground">Уже есть аккаунт? </span>
              <Link to="/login" className="text-primary hover:text-primary/80 transition-colors font-semibold">
                Войти
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
