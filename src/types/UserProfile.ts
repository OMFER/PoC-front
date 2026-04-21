import React from 'react';
export interface UserProfileModalProps {
  user: {
    name: string;
    email: string;
    token: string;
  };
  onClose: () => void;
  onLogout: () => void;
}