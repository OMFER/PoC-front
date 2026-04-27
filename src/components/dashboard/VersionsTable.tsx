import React from 'react';
import type { VersionsRecord } from '../../types/build';

import { BuildRow } from '../VersionsTable/BuildRow';
import { LoadingState } from '../VersionsTable/LoadingState';
import { EmptyState } from '../VersionsTable/EmptyState';

interface VersionsTableProps {
  builds: VersionsRecord[] | null;
  onSelectBuild: (build: VersionsRecord) => void;
}

export const VersionsTable: React.FC<VersionsTableProps> = ({ builds, onSelectBuild }) => {
  const isLoading = builds === null;
  const isEmpty = builds !== null && builds.length === 0;
  const hasData = builds !== null && builds.length > 0;
  
  return (
    <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden relative">
      <div className="overflow-y-auto max-h-[400px] custom-scrollbar">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#1a0533] sticky top-0 z-10 border-b border-gray-100 text-xs uppercase text-gray-500 font-semibold tracking-wider">
            <tr className="bg-[#1a0533]">
              <th className="bg-[#1a0533] text-white px-6 py-5">Versión</th>
              <th className="bg-[#1a0533] text-white px-6 py-5">Versión Flutter</th>
              <th className="bg-[#1a0533] text-white px-8 py-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            
            {isLoading && <LoadingState />}
            
            {isEmpty && <EmptyState />}
            
            {hasData && builds.map((build) => (
              <BuildRow 
                key={build.id} 
                build={build} 
                onSelectBuild={onSelectBuild} 
              />
            ))}
            
          </tbody>
        </table>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
          margin-bottom: 20px; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1a0533;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #1a0533;
        }
      `}</style>
    </div>
  );
};