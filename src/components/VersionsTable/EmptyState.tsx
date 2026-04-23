import React from 'react';

export const EmptyState: React.FC = () => (
  <tr>
    <td colSpan={3} className="px-8 py-20 text-center text-gray-400">
      No builds found for this component.
    </td>
  </tr>
);