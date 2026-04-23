import React, { useState, useEffect } from 'react';
import type { VersionsRecord } from '../types/build';
import { tabs, fetchBuilds } from '../mock/dashboardData';
import { Sidebar } from '../components/layout/SideBar';
import { Header } from '../components/layout/Header';
import { VersionsTable } from '../components/dashboard/VersionsTable';
import { DownloadModal } from '../components/dashboard/DownloadModal';
import FAQAccordion from '../components/dashboard/FAQAccordion';
import ChangelogSection from '../components/dashboard/Changelog';


const useBuilds = (activeTab: string) => {
  const [builds, setBuilds] = useState<VersionsRecord[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setBuilds(null);

    const loadData = async () => {
      try {
        const results = await fetchBuilds(activeTab);
        if (isMounted) setBuilds(results);
      } catch (error) {
        console.error("Error fetching builds:", error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, [activeTab]);

  return { builds, isLoading };
};

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => (
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

const AppPagosDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('BBVA');
  const [selectedBuild, setSelectedBuild] = useState<VersionsRecord | null>(null);
  
  const { builds, isLoading } = useBuilds(activeTab);

  const mockUser = { 
    name: "Elva Ginon", 
    email: "elva.ginon@example.com", 
    token: "sf0ef22d22855424cdfc54f14065aa4be6244026849373827f" 
  };

  return (
    <div className="flex h-screen bg-[#F8F9FB] font-sans">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden">
        <Header 
          user={mockUser} 
          onLogout={() => console.log('Logging out...')} 
        />

        <section className="flex-1 p-10 overflow-y-auto custom-scrollbar">
          <div className="flex justify-between items-start mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-1.5">
              Paquetes disponibles
            </h1>
          </div>
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

          <VersionsTable 
            builds={builds} 
            onSelectBuild={setSelectedBuild} 
          />

          <div className="mt-16 space-y-12 border-t border-gray-200 pt-12">
            <FAQAccordion />
            <ChangelogSection />
          </div>
        </section>
      </main>

      {/* Modales */}
      {selectedBuild && (
        <DownloadModal
          build={selectedBuild}
          onClose={() => setSelectedBuild(null)}
        />
      )}
    </div>
  );
};

export default AppPagosDashboard;