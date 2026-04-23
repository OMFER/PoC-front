import React from 'react';
import { X } from 'lucide-react';

import type { VersionsRecord } from '../../types/build';
import { useModalKeyboard } from '../../hooks/useModalKeyboard';
import { AssetItem } from '../DownloadModal/AssetItem';
import { EmptyState } from '../DownloadModal/EmptyState';

interface DownloadModalProps {
  build: VersionsRecord;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ build, onClose }) => {
  useModalKeyboard(onClose);

  const hasAssets = build.assets.length > 0;
  const isEmpty = build.assets.length === 0;

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
          
          {isEmpty && <EmptyState />}
          
          {hasAssets && build.assets.map((asset, index) => (
            <AssetItem 
              key={`${asset.name}-${index}`} 
              asset={asset} 
            />
          ))}

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