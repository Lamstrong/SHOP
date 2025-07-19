
import { useState } from 'react';
import { ChevronDown, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="glassmorphism rounded-2xl p-6 sticky top-24">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="w-full flex items-center justify-between p-0 h-auto hover:bg-transparent">
            <h3 className="text-xl font-bold gradient-text flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Категории
            </h3>
            <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </Button>
        </CollapsibleTrigger>
        
        <CollapsibleContent className="space-y-2 mt-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary/20 to-purple-600/20 text-primary border border-primary/30 shadow-lg'
                  : 'hover:bg-accent/50 text-muted-foreground hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default CategoryFilter;
