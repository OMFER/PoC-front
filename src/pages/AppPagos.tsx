import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import type { BuildRecord } from '../types/build';
import { mockBuilds, tabs } from '../mock/dashboardData';
import { Sidebar } from '../components/layout/SideBar';
import { Header } from '../components/layout/Header';
import { BuildTable } from '../components/dashboard/BuildTable';
import { DownloadModal } from '../components/dashboard/DownloadModal';

const AppPagosDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('BBVA');
  const [selectedBuild, setSelectedBuild] = useState<BuildRecord | null>(null);

  const filteredBuilds = mockBuilds.filter(b => b.component === activeTab);

  return (
    <div className="flex h-screen bg-[#F8F9FB] font-sans">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <section className="flex-1 p-10 overflow-y-auto">
          {/* Header Section */}
          <div className="flex justify-between items-start mb-10">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-1.5">Build History</h1>
              <p className="text-gray-500 text-[15px]">Manage and monitor your project deployment lifecycle.</p>
            </div>
            <button className="bg-[#1a0533] text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2.5 hover:bg-[#2a0852] transition">
              <Plus className="w-5 h-5" />
              New Build
            </button>
          </div>

          {/* Tabs Navigation */}
          <div className="flex items-center gap-1 border-b border-gray-100 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-3 font-medium text-[15px] transition flex items-center gap-2 group ${
                  activeTab === tab.id ? 'text-[#1a0533]' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab.label}
                {tab.count && (
                  <span className={`px-2 py-0.5 rounded-md text-xs ${
                    activeTab === tab.id ? 'bg-[#1a0533]/5 text-[#1a0533]' : 'bg-gray-100 text-gray-500'
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