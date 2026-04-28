import React from 'react';
import { Folder} from 'lucide-react';
import type { VersionsRecord } from '../../types/build';

interface BuildRowProps {
  build: VersionsRecord;
  onSelectBuild: (build: VersionsRecord) => void;
}

export const BuildRow: React.FC<BuildRowProps> = ({ build, onSelectBuild }) => (
  <tr className="hover:bg-gray-50/50 transition group">
    <td className="px-6 py-5 font-semibold text-gray-900">{build.version}</td>
    <td className="px-6 py-5 font-semibold text-gray-900 pl-20 pr-6 text-left">{build.versionFlutter}</td>
    <td className="px-8 py-5 text-right">
      <div className="flex items-center justify-around gap-2 padding-10">
        <button
          onClick={() => onSelectBuild(build)}
          className="p-2 text-gray-400 hover:text-[#1a0533] hover:bg-[#1a0533]/5 rounded-xl transition padding-2"
          title="View Downloads"
        >
          <Folder className="w-5 h-5" />
        </button>
      </div>
    </td>
  </tr>
);