
import { useState } from 'react';
import { ChevronDown, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface PriceFilterProps {
  minPrice: number;
  maxPrice: number;
  onPriceChange: (min: number, max: number) => void;
}

const PriceFilter = ({ minPrice, maxPrice, onPriceChange }: PriceFilterProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [tempMin, setTempMin] = useState(minPrice.toString());
  const [tempMax, setTempMax] = useState(maxPrice.toString());

  const handleApply = () => {
    const min = parseInt(tempMin) || 0;
    const max = parseInt(tempMax) || 999999;
    onPriceChange(min, max);
  };

  return (
    <div className="glassmorphism rounded-2xl p-6 mt-4">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="w-full flex items-center justify-between p-0 h-auto hover:bg-transparent">
            <h3 className="text-xl font-bold gradient-text flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Цена
            </h3>
            <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </Button>
        </CollapsibleTrigger>
        
        <CollapsibleContent className="space-y-4 mt-4">
          <div className="flex gap-2">
            <Input
              placeholder="От"
              value={tempMin}
              onChange={(e) => setTempMin(e.target.value)}
              className="text-sm"
              type="number"
            />
            <Input
              placeholder="До"
              value={tempMax}
              onChange={(e) => setTempMax(e.target.value)}
              className="text-sm"
              type="number"
            />
          </div>
          
          <Button 
            onClick={handleApply}
            className="w-full gradient-primary button-3d font-bold"
          >
            Применить
          </Button>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default PriceFilter;
