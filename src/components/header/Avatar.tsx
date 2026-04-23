import React from 'react';

interface AvatarProps {
  name: string;
}

export const Avatar: React.FC<AvatarProps> = ({ name }) => (
  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-2xl font-bold mx-auto mb-4 border-4 border-white shadow-sm">
    {name.charAt(0).toUpperCase()}
  </div>
);