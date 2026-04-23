import React from 'react';
import { Folder } from 'lucide-react';

export const EmptyState: React.FC = () => (
  <div className="text-center py-10">
    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
      <Folder className="w-8 h-8 text-gray-300" />
    </div>
    <p className="text-gray-500">No assets available for this build.</p>
  </div>
);