import React from 'react';
import type { BuildStatus } from '../../types/build';

interface StatusBadgeProps {
  status: BuildStatus;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const statusConfig: Record<BuildStatus, { bg: string; text: string; label: string }> = {
    SUCCESS: { bg: 'bg-green-100', text: 'text-green-700', label: 'SUCCESS' },
    BUILDING: { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'BUILDING' },
    FAILED: { bg: 'bg-red-100', text: 'text-red-700', label: 'FAILED' },
  };

  const { bg, text, label } = statusConfig[status];

  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${bg} ${text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${text.replace('text', 'bg')}`}></span>
      {label}
    </div>
  );
};