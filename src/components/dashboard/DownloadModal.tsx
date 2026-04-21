import React, { useEffect } from 'react';
import { X, FileIcon, Download, Folder } from 'lucide-react';
import type { BuildRecord } from '../../types/build';

interface DownloadModalProps {
  build: BuildRecord;
  onClose: () => void;
}

type Asset = BuildRecord['assets'][0];


const EmptyState: React.FC = () => (
  <div className="text-center py-10">
    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
      <Folder className="w-8 h-8 text-gray-300" />
    </div>
    <p className="text-gray-500">No assets available for this build.</p>
  </div>
);

const AssetItem: React.FC<{ asset: Asset }> = ({ asset }) => (
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


export const DownloadModal: React.FC<DownloadModalProps> = ({ build, onClose }) => {
  
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1a0533]/40 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="bg-white w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h2 id="modal-title" className="text-xl font-bold text-gray-900">
              Download Assets
            </h2>
            <p className="text-sm text-gray-500">
              Version {build.version} • {build.component}
            </p>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-gray-100 rounded-full transition"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-8 space-y-4 max-h-[60vh] overflow-y-auto custom-scrollbar">
          {build.assets.length > 0 ? (
            build.assets.map((asset, index) => (
              <AssetItem key={`${asset.name}-${index}`} asset={asset} />
            ))
          ) : (
            <EmptyState />
          )}
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-gray-50/50 border-t border-gray-100 flex justify-end">
          <button 
            onClick={onClose} 
            className="px-6 py-2.5 font-semibold text-gray-600 hover:text-gray-900 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};