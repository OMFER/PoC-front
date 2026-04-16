import React from 'react';
import { LayoutGrid, Plus } from 'lucide-react';
import { sidebarItems } from '../../mock/dashboardData';

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-[260px] bg-[#1a0533] text-white flex flex-col p-6">
      <div className="flex items-center gap-3 mb-10 mt-1">
        <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
          <LayoutGrid className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="font-bold text-lg">App Pagos</div>
          <div className="text-xs text-white/60">Development Console</div>
        </div>
      </div>

      <nav className="flex-1 space-y-2">
        {sidebarItems.map((item) => (
          <div key={item.id}>
            <a href="#" className={`flex items-center gap-3.5 px-4 py-3 rounded-xl transition ${
              item.active 
                ? 'bg-white/10 text-white' 
                : 'text-white/70 hover:bg-white/5 hover:text-white'
            }`}>
              <item.icon className="w-5 h-5" />
              <span className="font-medium text-[15px]">{item.label}</span>
            </a>
            {item.id === 'projects' && (
              <div className="pl-12 pt-2 space-y-2.5 text-sm text-white/70">
                <div className="text-white font-medium border-l-2 border-white pl-3.5 -ml-px">App Pagos</div>
                <div className="hover:text-white cursor-pointer pl-3.5">Admin Dashboard</div>
                <div className="hover:text-white cursor-pointer pl-3.5">API Gateway</div>
              </div>
            )}
          </div>
        ))}
      </nav>

      <button className="flex items-center justify-center gap-2.5 w-full bg-white text-[#1a0533] font-semibold py-3 rounded-xl mt-10 hover:bg-gray-100 transition">
        <Plus className="w-5 h-5" />
        New Project
      </button>
    </aside>
  );
};