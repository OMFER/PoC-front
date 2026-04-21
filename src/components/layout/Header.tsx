import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-10">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span className="font-medium text-gray-900">Agnostiko</span>
      </div>
      <div className="flex items-center gap-5">
        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-semibold text-sm">M</div>
      </div>
    </header>
  );
};