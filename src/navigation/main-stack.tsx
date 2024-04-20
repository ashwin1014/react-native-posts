import {lazy, Suspense} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CenterLoader from 'src/components/CenterLoader';
import Posts from 'src/screens/Posts/Posts';

import {MAIN_STACK, type NavigationParamList} from './types';

const PostDetails = lazy(() => import('../screens/PostDetails/PostDetails'));

const Stack = createNativeStackNavigator<NavigationParamList>();

const MainStack = () => {
  return (
    <Suspense fallback={<CenterLoader />}>
      <Stack.Navigator
        screenOptions={{
          freezeOnBlur: true,
          headerShown: false,
        }}
        initialRouteName={MAIN_STACK.POSTS}>
        <Stack.Screen name={MAIN_STACK.POSTS} component={Posts} />
        <Stack.Screen name={MAIN_STACK.POST_DETAILS} component={PostDetails} />
      </Stack.Navigator>
    </Suspense>
  );
};

export default MainStack;
