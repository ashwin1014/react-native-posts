/* eslint-disable react/jsx-props-no-spreading */
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';

import MainStack from './main-stack';
import {type NavigationParamList, type NavigationProps} from './types';

const AppNavigator = (props: NavigationProps) => {
  const navigationRef = useNavigationContainerRef<NavigationParamList>();

  return (
    <NavigationContainer ref={navigationRef} {...props}>
      <MainStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
