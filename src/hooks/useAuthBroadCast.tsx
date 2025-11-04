import { useAuth } from './useAuth';
import { useEffect } from 'react';
import { TAB_ID } from '@/utils/commonHelper';

// Type for the message event data
interface AuthMessageEvent {
  type: string;
  sender: string;
}

export const useAuthBroadcast = (): void => {
  const { handleLogout, refreshUserDetails } = useAuth();

  useEffect(() => {
    const channel = new BroadcastChannel('auth');

    const handleMessage = (event: MessageEvent<AuthMessageEvent>): void => {
      const { type, sender } = event.data || {};
      if (type === 'auth-changed' && sender !== TAB_ID) {
        handleLogout();
      }
    };
    channel.addEventListener('message', handleMessage);

    return () => {
      channel.removeEventListener('message', handleMessage);
      channel.close();
    };
  }, [refreshUserDetails]);
};
