import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingState: React.FC = () => (
  <tr>
    <td colSpan={3} className="px-8 py-20">
      <div className="flex flex-col items-center justify-center gap-3 text-gray-400">
        <Loader2 className="w-6 h-6 animate-spin text-[#1a0533]" />
        <span className="font-medium text-sm">Cargando builds...</span>
      </div>
    </td>
  </tr>
);