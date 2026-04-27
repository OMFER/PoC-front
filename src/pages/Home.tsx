import React, { useState } from 'react';
import type { VersionsRecord } from '../types/build';
import { useBuilds } from '../hooks/useBuilds';

// import { Sidebar } from '../components/layout/SideBar';
import { Header } from '../components/layout/Header';
import { VersionsTable } from '../components/dashboard/VersionsTable';
import { DownloadModal } from '../components/dashboard/DownloadModal';
import FAQAccordion from '../components/dashboard/FAQAccordion';
import ChangelogSection from '../components/dashboard/Changelog';
import { TabNavigation } from '../components/dashboard/TabsNavigation';

const MOCK_USER = { 
  name: "Elva Ginon", 
  email: "elva.ginon@example.com", 
  token: "sf0ef22d22855424cdfc54f14065aa4be6244026849373827f" 
};

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState('BBVA');
  const [selectedBuild, setSelectedBuild] = useState<VersionsRecord | null>(null);
  
  const { builds, isLoading } = useBuilds(activeTab);

  return (
    <div className="flex h-screen bg-[#F8F9FB] font-sans">
      {/* <Sidebar /> */}

      <main className="flex-1 flex flex-col overflow-hidden">
        <Header 
          user={MOCK_USER} 
          onLogout={() => console.log('Logging out...')} 
        />

        <section className="flex-1 p-10 overflow-y-auto custom-scrollbar">
          <div id="versions" className="scroll-mt-10">
            <header className="flex justify-between items-start mb-10">
              <h1 className="text-3xl font-bold text-gray-900 mb-1.5">
                Paquetes disponibles
              </h1>
            </header>
            
            <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
            <VersionsTable builds={builds} onSelectBuild={setSelectedBuild} />
          </div>

          <div className="mt-16 space-y-15">
            <div id="changelog" className="scroll-mt-10">
              <ChangelogSection />
            </div>

            <div id="faq" className="scroll-mt-10">
              <FAQAccordion />
            </div>
          </div>
        </section>
      </main>

      {selectedBuild && (
        <DownloadModal
          build={selectedBuild}
          onClose={() => setSelectedBuild(null)}
        />
      )}
    </div>
  );
};

export default Home;