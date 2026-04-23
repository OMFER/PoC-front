import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Mail, X } from "lucide-react";

import type { UserProfileModalProps } from "../../types/UserProfile";
import { useUserProfileActions } from '../../hooks/useUserProfileActions';
import { Avatar } from './Avatar';
import { TokenSection } from './TokenSection';

export const UserProfileModal: React.FC<UserProfileModalProps> = ({ user, onClose, onLogout }) => {
  const { copyToken } = useUserProfileActions(onClose, user?.token || '');
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    navigate('/');
  };

  if (!user) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-start justify-end p-4 pt-20 bg-black/5 backdrop-blur-[2px]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-white w-80 rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden animate-in slide-in-from-top-4 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-8 pb-6 text-center relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
          
          <Avatar name={user.name} />
          <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
          <p className="text-sm text-gray-500 flex items-center justify-center gap-1.5 mt-1">
            <Mail className="w-3.5 h-3.5" />
            {user.email}
          </p>
        </div>

        <TokenSection token={user.token} onCopy={copyToken} />

        {/* Footer */}
        <div className="p-4 bg-gray-50/50 border-t border-gray-100">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 bg-white text-red-600 font-bold rounded-xl border border-gray-100 hover:bg-red-50 hover:border-red-100 transition-all active:scale-[0.98]"
          >
            <LogOut className="w-5 h-5" />
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileModal;