import React from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';
import type { FAQItem } from '../../types/FAQData';

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onToggle }) => {
  return (
    <div className="bg-[#E9EFFF] rounded-[1.5rem] border border-transparent overflow-hidden mb-4 transition-all duration-300">
      <button 
        onClick={onToggle}
        className="w-full px-8 py-5 flex items-center justify-between text-left hover:bg-[#1a0533]/5 transition-colors focus:outline-none"
      >
        <span className="font-bold text-[#1a0533] text-lg leading-tight">
          {item.question}
        </span>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <MinusCircle className="text-[#1a0533] w-6 h-6" />
          ) : (
            <PlusCircle className="text-[#1a0533] w-6 h-6" />
          )}
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-8 pb-6 text-[#1a0533]/80 text-[15px] leading-relaxed border-t border-[#1a0533]/5 pt-2">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;