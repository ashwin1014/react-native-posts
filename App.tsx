import 'react-native-reanimated';
import 'react-native-get-random-values';

import ErrorBoundary from 'react-native-error-boundary';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

import AppNavigator from 'src/navigation/app-navigator';
import ServiceProvider from 'src/providers/ServiceProvider';

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ErrorBoundary>
        <ServiceProvider>
          <AppNavigator />
        </ServiceProvider>
      </ErrorBoundary>
    </SafeAreaProvider>
  );
};

export default App;
