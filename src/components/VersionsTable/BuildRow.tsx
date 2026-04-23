import React from 'react';
import { Folder, MoreHorizontal } from 'lucide-react';
import type { VersionsRecord } from '../../types/build';

interface BuildRowProps {
  build: VersionsRecord;
  onSelectBuild: (build: VersionsRecord) => void;
}

export const BuildRow: React.FC<BuildRowProps> = ({ build, onSelectBuild }) => (
  <tr className="hover:bg-gray-50/50 transition group">
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
);