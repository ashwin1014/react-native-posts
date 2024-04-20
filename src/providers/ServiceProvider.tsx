import {type ReactNode} from 'react';

import {
  QueryClient,
  QueryClientProvider,
  focusManager,
} from '@tanstack/react-query';
import {type AppStateStatus} from 'react-native';

import {useAppState, useOnlineManager} from 'src/hooks';

import AxiosProvider from './AxiosProvider';

interface ServiceProviderProps {
  children: ReactNode;
}

function onAppStateChange(status: AppStateStatus) {
  focusManager.setFocused(status === 'active');
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 180000,
    },
  },
});

const ServiceProvider = ({children}: ServiceProviderProps) => {
  useOnlineManager();
  useAppState(onAppStateChange);
  return (
    <QueryClientProvider client={queryClient}>
      <AxiosProvider>{children}</AxiosProvider>
    </QueryClientProvider>
  );
};

export default ServiceProvider;
