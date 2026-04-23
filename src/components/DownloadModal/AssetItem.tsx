import React from 'react';
import { FileIcon, Download } from 'lucide-react';
import type { VersionsRecord } from '../../types/build';

type Asset = VersionsRecord['assets'][0];

interface AssetItemProps {
  asset: Asset;
}

export const AssetItem: React.FC<AssetItemProps> = ({ asset }) => (
  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-[#1a0533]/20 transition">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100">
        <FileIcon className="w-6 h-6 text-[#1a0533]" />
      </div>
      <div>
        <div className="font-semibold text-gray-900">{asset.name}</div>
        <div className="text-xs text-gray-500">
          {asset.size} • {asset.type}
        </div>
      </div>
    </div>
    <button 
      className="bg-white text-[#1a0533] p-2.5 rounded-xl border border-gray-200 hover:bg-[#1a0533] hover:text-white hover:border-[#1a0533] transition shadow-sm"
      aria-label={`Download ${asset.name}`}
      title={`Download ${asset.name}`}
    >
      <Download className="w-5 h-5" />
    </button>
  </div>
);