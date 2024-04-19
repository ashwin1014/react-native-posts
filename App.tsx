import 'react-native-reanimated';
import 'react-native-get-random-values';

import {View, Text} from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ErrorBoundary>
        <View>
          <Text>Hello, world!</Text>
        </View>
      </ErrorBoundary>
    </SafeAreaProvider>
  );
};

export default App;
