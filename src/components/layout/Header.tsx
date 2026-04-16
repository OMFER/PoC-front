import React from 'react';
import { ChevronRight, Search, Bell } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-10">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span className="hover:text-gray-800 cursor-pointer">Projects</span>
        <ChevronRight className="w-4 h-4 text-gray-300" />
        <span className="font-medium text-gray-900">App Pagos</span>
      </div>
      <div className="flex items-center gap-5">
        <div className="relative w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search builds..." 
            className="w-full pl-12 pr-4 py-2.5 bg-gray-100/70 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a0533]/20"
          />
        </div>
        <Bell className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-600" />
        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-semibold text-sm">M</div>
      </div>
    </header>
  );
};