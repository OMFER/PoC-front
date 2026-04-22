import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Copy, Key, LogOut, Mail, X } from "lucide-react";
import type { UserProfileModalProps } from "../../types/UserProfile";

const useUserProfileActions = (onClose: () => void, token: string) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const copyToken = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(token);
      alert('Token copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  }, [token]);

  return { copyToken };
};

const Avatar = ({ name }: { name: string }) => (
  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-2xl font-bold mx-auto mb-4 border-4 border-white shadow-sm">
    {name.charAt(0).toUpperCase()}
  </div>
);

const TokenSection = ({ token, onCopy }: { token: string, onCopy: () => void }) => (
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

const UserProfileModal: React.FC<UserProfileModalProps> = ({ user, onClose, onLogout }) => {
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
            onClick={handleLogout} // 4. Asignamos nuestra nueva función aquí
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