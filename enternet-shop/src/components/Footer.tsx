
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">П</span>
              </div>
              <span className="text-xl font-bold text-primary">E-store</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Крупнейший интернет-магазин в России. Миллионы товаров для дома, работы и отдыха.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Customer service */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Покупателям</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Как сделать заказ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Способы оплаты</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Доставка</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Возврат товара</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Гарантия</a></li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Партнёрам</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Продавайте на E-store</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Личный кабинет продавца</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Реклама на сайте</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Affiliate программа</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Компания</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Новости</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Пресс-центр</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 E-store. Все права защищены.
          </div>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Пользовательское соглашение</a>
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
