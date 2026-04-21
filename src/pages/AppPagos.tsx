import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import type { BuildRecord } from '../types/build';
// 1. Importa la nueva función fetchBuilds
import { tabs, fetchBuilds } from '../mock/dashboardData';
import { Sidebar } from '../components/layout/SideBar';
import { Header } from '../components/layout/Header';
import { BuildTable } from '../components/dashboard/BuildTable';
import { DownloadModal } from '../components/dashboard/DownloadModal';
import FAQAccordion from '../components/dashboard/FAQAccordion';
import ChangelogSection from '../components/dashboard/changelog';

const AppPagosDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('BBVA');
  const [selectedBuild, setSelectedBuild] = useState<BuildRecord | null>(null);
  const [filteredBuilds, setFilteredBuilds] = useState<BuildRecord[] | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      setFilteredBuilds(null);
      const results = await fetchBuilds(activeTab);
      if (isMounted) {
        setFilteredBuilds(results);
      }
    };
    loadData();

    return () => {
      isMounted = false;
    };
  }, [activeTab]);

  return (
    <div className="flex h-screen bg-[#F8F9FB] font-sans">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <section className="flex-1 p-10 overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-start mb-10">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-1.5">Paquetes disponibles</h1>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="flex items-center gap-1 border-b border-gray-100 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-3 font-medium text-[15px] transition flex items-center gap-2 group ${activeTab === tab.id ? 'text-[#1a0533]' : 'text-gray-400 hover:text-gray-600'
                  }`}
              >
                {tab.label}
                {tab.count && (
                  <span className={`px-2 py-0.5 rounded-md text-xs ${activeTab === tab.id ? 'bg-[#1a0533]/5 text-[#1a0533]' : 'bg-gray-100 text-gray-500'
                    }`}>
                    {tab.count}
                  </span>
                )}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1a0533] rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Table Component */}
          <BuildTable builds={filteredBuilds} onSelectBuild={setSelectedBuild} />

          <div className="mt-16 border-t border-gray-200 pt-8">
            <FAQAccordion />
          </div>

          <ChangelogSection />
        </section>
      </main>

      {/* Modal Render */}
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