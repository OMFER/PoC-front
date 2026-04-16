import React from 'react';
import { Folder, MoreHorizontal } from 'lucide-react';
import type { BuildRecord } from '../../types/build';

interface BuildTableProps {
  builds: BuildRecord[];
  onSelectBuild: (build: BuildRecord) => void;
}

export const BuildTable: React.FC<BuildTableProps> = ({ builds, onSelectBuild }) => {
  return (
    <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50/50 border-b border-gray-100 text-xs uppercase text-gray-500 font-semibold tracking-wider">
          <tr>
            <th className="px-6 py-5">Version</th>
            <th className="px-6 py-5">Version Flutter</th>
            <th className="px-8 py-5 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {builds.length > 0 ? (
            builds.map((build) => (
              <tr key={build.id} className="hover:bg-gray-50/50 transition group">
                <td className="px-6 py-5 font-semibold text-gray-900">{build.version}</td>
                <td className="px-6 py-5 font-semibold text-gray-900">{build.versionFlutter}</td>
                <td className="px-8 py-5 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => onSelectBuild(build)}
                      className="p-2 text-gray-400 hover:text-[#1a0533] hover:bg-[#1a0533]/5 rounded-xl transition"
                      title="View Downloads"
                    >
                      <Folder className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="px-8 py-20 text-center text-gray-400">
                No builds found for this component.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};