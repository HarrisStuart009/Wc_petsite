import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { X } from 'lucide-react';

// Types for the filter data
export interface FilterData {
  priceRange: [number, number];
  categories: string[];
}

interface FilterDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onApplyFilters: (filters: FilterData) => void;
  currentFilters: FilterData;
  maxPrice: number;
}

const FilterDialog: React.FC<FilterDialogProps> = ({
  isOpen,
  onOpenChange,
  onApplyFilters,
  currentFilters,
  maxPrice
}) => {
  const [priceRange, setPriceRange] = useState<[number, number]>(currentFilters.priceRange);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(currentFilters.categories);
  
  const categories = [
    { id: 'dogs', label: 'Dogs' },
    { id: 'cats', label: 'Cats' },
    { id: 'birds', label: 'Birds' },
    { id: 'small-pets', label: 'Small Pets' },
    { id: 'food', label: 'Food' },
    { id: 'accessories', label: 'Accessories' },
    { id: 'beds-furniture', label: 'Beds & Furniture' },
    { id: 'toys', label: 'Toys' },
  ];
  
  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
  };
  
  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prevSelected => 
      prevSelected.includes(category)
        ? prevSelected.filter(c => c !== category)
        : [...prevSelected, category]
    );
  };
  
  const handleApply = () => {
    onApplyFilters({
      priceRange,
      categories: selectedCategories
    });
    onOpenChange(false);
  };
  
  const handleReset = () => {
    setPriceRange([0, maxPrice]);
    setSelectedCategories([]);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>Filter Products</DialogTitle>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => onOpenChange(false)}
              className="h-8 w-8 rounded-full"
            >
              <X size={16} />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="py-6 space-y-6">
          {/* Price Range Filter */}
          <div className="space-y-4">
            <h3 className="font-medium text-sm">Price Range (₹)</h3>
            
            <Slider
              defaultValue={[priceRange[0], priceRange[1]]}
              max={maxPrice}
              step={100}
              value={[priceRange[0], priceRange[1]]}
              onValueChange={handlePriceChange}
              className="py-4"
            />
            
            <div className="flex items-center justify-between text-sm">
              <span>₹{priceRange[0]}</span>
              <span>₹{priceRange[1]}</span>
            </div>
          </div>
          
          {/* Category Filter */}
          <div className="space-y-3">
            <h3 className="font-medium text-sm">Categories</h3>
            
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`category-${category.id}`} 
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={() => handleCategoryToggle(category.id)}
                  />
                  <Label htmlFor={`category-${category.id}`}>{category.label}</Label>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <DialogFooter className="flex justify-between sm:justify-between">
          <Button variant="outline" onClick={handleReset}>
            Reset
          </Button>
          <Button onClick={handleApply}>
            Apply Filters
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FilterDialog; 