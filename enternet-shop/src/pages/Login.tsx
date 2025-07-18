
import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <div className="glassmorphism rounded-3xl p-8 shadow-2xl neon-glow">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-black gradient-text mb-2">Добро пожаловать!</h1>
              <p className="text-muted-foreground">Войдите в свой аккаунт E-Store</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold">Email</label>
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold">Пароль</label>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Введите пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Запомнить меня
                </label>
                <Link to="#" className="text-primary hover:text-primary/80 transition-colors">
                  Забыли пароль?
                </Link>
              </div>

              <Button type="submit" className="w-full gradient-primary button-3d font-bold text-lg py-3">
                Войти
              </Button>
            </form>

            <div className="mt-6 text-center">
              <span className="text-muted-foreground">Нет аккаунта? </span>
              <Link to="/register" className="text-primary hover:text-primary/80 transition-colors font-semibold">
                Зарегистрироваться
              </Link>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground mb-4">Или войти через</p>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 button-3d">
                  Google
                </Button>
                <Button variant="outline" className="flex-1 button-3d">
                  VK
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
