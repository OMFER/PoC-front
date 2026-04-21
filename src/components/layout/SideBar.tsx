import React, { useState } from 'react';
import { LayoutGrid, Plus } from 'lucide-react';
import { sidebarItems } from '../../mock/dashboardData';

export const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside 
      className={`bg-[#1a0533] text-white flex flex-col py-6 transition-all duration-300 ease-in-out relative overflow-hidden ${
        isCollapsed ? 'w-[88px] px-4' : 'w-[260px] px-6'
      }`}
    >
      {/* Header del Sidebar */}
      <div className={`flex items-center mb-10 mt-1 ${isCollapsed ? 'justify-center' : 'gap-3'}`}>
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors cursor-pointer shrink-0"
          title="Toggle Sidebar"
        >
          <LayoutGrid className="w-5 h-5 text-white" />
        </button>
        
        {/* Usamos opacity y width para una transición más limpia al ocultar el texto */}
        {!isCollapsed && (
          <div className="whitespace-nowrap animate-in fade-in duration-300">
            <div className="font-bold text-lg">App Pagos</div>
            <div className="text-xs text-white/60">Development Console</div>
          </div>
        )}
      </div>

      {/* Navegación */}
      <nav className="flex-1 space-y-2">
        {sidebarItems.map((item) => (
          <div key={item.id}>
            <a 
              href="#" 
              className={`flex items-center px-4 py-3 rounded-xl transition ${
                isCollapsed ? 'justify-center' : 'gap-3.5'
              } ${
                item.active 
                  ? 'bg-white/10 text-white' 
                  : 'text-white/70 hover:bg-white/5 hover:text-white'
              }`}
              title={isCollapsed ? item.label : undefined}
            >
              <item.icon className="w-5 h-5 shrink-0" />
              {!isCollapsed && (
                <span className="font-medium text-[15px] whitespace-nowrap">
                  {item.label}
                </span>
              )}
            </a>
            
            {/* Submenú: Solo se muestra si no está colapsado y es el item de projects */}
            {!isCollapsed && item.id === 'projects' && (
              <div className="pl-12 pt-2 space-y-2.5 text-sm text-white/70 whitespace-nowrap animate-in fade-in duration-300">
                <div className="text-white font-medium border-l-2 border-white pl-3.5 -ml-px">App Pagos</div>
                <div className="hover:text-white cursor-pointer pl-3.5">Admin Dashboard</div>
                <div className="hover:text-white cursor-pointer pl-3.5">API Gateway</div>
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Botón inferior */}
      <button 
        className={`flex items-center justify-center gap-2.5 bg-white text-[#1a0533] font-semibold rounded-xl mt-10 hover:bg-gray-100 transition-all ${
          isCollapsed ? 'w-12 h-12 p-0 mx-auto' : 'w-full py-3'
        }`}
        title={isCollapsed ? "New Project" : undefined}
      >
        <Plus className="w-5 h-5 shrink-0" />
        {!isCollapsed && <span className="whitespace-nowrap">New Project</span>}
      </button>
    </aside>
  );
};