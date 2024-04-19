import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MAIN_STACK, type NavigationParamList} from './types';
import Posts from '../screens/Posts/Posts';

const Stack = createNativeStackNavigator<NavigationParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        freezeOnBlur: true,
        headerShown: false,
      }}
      initialRouteName={MAIN_STACK.POSTS}>
      <Stack.Screen name={MAIN_STACK.POSTS} component={Posts} />
    </Stack.Navigator>
  );
};

export default MainStack;
