import React from 'react';
import { Key, Copy } from "lucide-react";

interface TokenSectionProps {
  token: string;
  onCopy: () => void;
}

export const TokenSection: React.FC<TokenSectionProps> = ({ token, onCopy }) => (
  <div className="px-6 pb-6">
    <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
      <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
        <Key className="w-3 h-3" /> Token
      </label>
      <div className="flex items-center justify-between gap-2">
        <code className="text-xs text-gray-600 font-mono truncate bg-white px-2 py-1 rounded border border-gray-100 flex-1">
          {token}
        </code>
        <button 
          onClick={onCopy}
          className="p-2 bg-white text-[#1a0533] hover:bg-[#1a0533] hover:text-white rounded-lg border border-gray-200 transition-all shadow-sm"
          aria-label="Copy token"
        >
          <Copy className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
);