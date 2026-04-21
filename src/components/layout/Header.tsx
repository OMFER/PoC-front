import React, { useState } from 'react';
import { Hexagon, User } from 'lucide-react'; 
import UserProfileModal from '../header/UserProfileModal';
import type { UserProfileModalProps } from '../../types/UserProfile'; 

interface HeaderProps {
  user: UserProfileModalProps['user'];
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-10">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Hexagon className="w-8 h-8 text-orange-600" />
        </div>
        
        <div className="flex items-center gap-5">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 hover:bg-orange-200 transition-colors cursor-pointer"
            aria-label="Abrir perfil de usuario"
          >
            <User className="w-5 h-5" />
          </button>
        </div>
      </header>

      {isModalOpen && (
        <UserProfileModal 
          user={user} 
          onClose={() => setIsModalOpen(false)} 
          onLogout={onLogout} 
        />
      )}
    </>
  );
};