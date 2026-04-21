import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import { defaultFAQ } from '../../mock/faqData';

const FAQAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(3); // Abrimos el 3 por defecto como en el diseño

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Support & Documentation</h2>
      </div>
      
      <div className="space-y-2">
        {defaultFAQ.map(item => (
          <AccordionItem 
            key={item.id} 
            item={item} 
            isOpen={openId === item.id}
            onToggle={() => handleToggle(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;