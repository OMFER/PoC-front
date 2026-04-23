import { useEffect, useCallback } from 'react';

export const useUserProfileActions = (onClose: () => void, token: string) => {
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