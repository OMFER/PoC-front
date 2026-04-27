import React from 'react';

interface Section {
  name: string;
  id: string;
}

export const HeaderNavegation: React.FC = () => {
  const sections: Section[] = [
    { name: 'Versions', id: 'versions' },
    { name: 'Changelog', id: 'changelog' },
    { name: 'FAQ', id: 'faq' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (

    <nav className="flex items-center gap-2 md:gap-6 lg:gap-15" aria-label="Secciones">
      {sections.map((section) => {
        return (
          <button
            key={section.name}
            onClick={() => scrollToSection(section.id)}
            className="relative px-3 md:px-5 py-3 font-medium text-[15px] md:text-base lg:text-lg transition flex items-center group text-gray-600 hover:text-[#1a0533]"
          >
            {section.name}
          </button>
        );
      })}
    </nav>
  );
};