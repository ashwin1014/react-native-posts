import {useEffect} from 'react';

import NetInfo from '@react-native-community/netinfo';
import {onlineManager} from '@tanstack/react-query';

/**
 * Tells React Query if the app is online/offline
 */
function useOnlineManager() {
  useEffect(() => {
    return NetInfo.addEventListener(state => {
      onlineManager.setOnline(
        state.isConnected != null &&
          state.isConnected &&
          Boolean(state.isInternetReachable),
      );
    });
  }, []);
}

export default useOnlineManager;
