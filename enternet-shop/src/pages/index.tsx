import { Search } from "lucide-react";
import { Button } from "@/components/UI/CustomButton";

const Index = () => {
  return (
    <div className="container">
      <header>
        <div className="">
          <span>OZON</span>
          <nav>
            <a href="#">Каталог</a>
            <input type="text" />
            <button>
              <Search />
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Index;
