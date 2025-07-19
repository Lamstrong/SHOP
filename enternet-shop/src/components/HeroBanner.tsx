
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Star } from 'lucide-react';

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/20">
      {/* Декоративные элементы */}
      <div className="absolute top-10 left-10 text-purple-200 animate-pulse">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="absolute top-32 right-20 text-pink-200 animate-bounce">
        <Star className="w-6 h-6" />
      </div>
      <div className="absolute bottom-20 left-32 text-blue-200 animate-pulse">
        <Sparkles className="w-10 h-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-shimmer font-black leading-tight">
                Невероятные
                <span className="block">предложения</span>
                <span className="block text-4xl lg:text-5xl gradient-text">каждый день</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-lg leading-relaxed">
                Миллионы товаров по{' '}
                <span className="font-bold gradient-text">выгодным ценам</span>.
                Быстрая доставка по всей России.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="gradient-primary button-3d px-8 py-4 text-lg font-bold shadow-2xl hover:shadow-purple-500/25 group"
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                Начать покупки
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary/20 hover:border-primary/40 bg-white/80 backdrop-blur-sm px-8 py-4 text-lg font-semibold hover:bg-gradient-to-r hover:from-white hover:to-purple-50/50 transition-all duration-300"
              >
                Скачать приложение
              </Button>
            </div>

            {/* Статистика */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-black gradient-text">1M+</div>
                <div className="text-sm text-muted-foreground font-medium">Товаров</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black gradient-text">500K+</div>
                <div className="text-sm text-muted-foreground font-medium">Покупателей</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black gradient-text">24/7</div>
                <div className="text-sm text-muted-foreground font-medium">Поддержка</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="glassmorphism rounded-3xl p-8 shadow-2xl neon-glow">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/20 rounded-2xl p-6 h-40 flex items-center justify-center group hover:scale-105 transition-transform duration-300">
                  <span className="text-purple-700 font-bold text-lg group-hover:scale-110 transition-transform">Электроника</span>
                </div>
                <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/20 rounded-2xl p-6 h-40 flex items-center justify-center group hover:scale-105 transition-transform duration-300">
                  <span className="text-pink-700 font-bold text-lg group-hover:scale-110 transition-transform">Одежда</span>
                </div>
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/20 rounded-2xl p-6 h-40 flex items-center justify-center group hover:scale-105 transition-transform duration-300">
                  <span className="text-blue-700 font-bold text-lg group-hover:scale-110 transition-transform">Дом</span>
                </div>
                <div className="bg-gradient-to-br from-green-500/10 to-green-600/20 rounded-2xl p-6 h-40 flex items-center justify-center group hover:scale-105 transition-transform duration-300">
                  <span className="text-green-700 font-bold text-lg group-hover:scale-110 transition-transform">Красота</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
