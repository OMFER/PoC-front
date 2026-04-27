import React from 'react';
import { tabs } from '../../mock/dashboardData';

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => (
  <div 
    className="flex items-center gap-1 border-b border-gray-100 mb-8"
    role="tablist"
    aria-label="Filtro de paquetes por banco"
  >
    {tabs.map((tab) => {
      const isActive = activeTab === tab.id;
      
      return (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          role="tab"
          aria-selected={isActive}
          className={`relative px-5 py-3 font-medium text-[15px] transition flex items-center gap-2 group ${
            isActive ? 'text-[#1a0533]' : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          {tab.label}
          {tab.count && (
            <span className={`px-2 py-0.5 rounded-md text-xs ${
              isActive ? 'bg-[#1a0533]/5 text-[#1a0533]' : 'bg-gray-100 text-gray-500'
            }`}>
              {tab.count}
            </span>
          )}
          {isActive && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1a0533] rounded-full" />
          )}
        </button>
      );
    })}
  </div>
);