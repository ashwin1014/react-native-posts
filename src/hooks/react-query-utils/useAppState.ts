import {useEffect} from 'react';

import {AppState, AppStateStatus} from 'react-native';

/**
 * Tells you if the app is in the foreground or background
 */
function useAppState(onChange: (status: AppStateStatus) => void) {
  useEffect(() => {
    const appStateListener = AppState.addEventListener('change', onChange);
    return () => {
      appStateListener?.remove();
    };
  }, [onChange]);
}

export default useAppState;
