import {ComponentProps} from 'react';

import {
  type RouteProp,
  NavigationContainer,
  ParamListBase,
} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';

enum MAIN_STACK {
  POSTS = 'POSTS',
  POST_DETAILS = 'POST_DETAILS',
}

interface NavigationParamList extends ParamListBase {
  [MAIN_STACK.POSTS]: undefined;
  [MAIN_STACK.POST_DETAILS]: {postId: number};
}

type RootRouteProps<RouteName extends keyof NavigationParamList> = RouteProp<
  NavigationParamList,
  RouteName
>;

type RootStackScreenProps<T extends keyof NavigationParamList> =
  StackScreenProps<NavigationParamList, T>;

type NavigationProps = Partial<ComponentProps<typeof NavigationContainer>>;

export {
  type NavigationParamList,
  type RootRouteProps,
  type RootStackScreenProps,
  type NavigationProps,
  MAIN_STACK,
};
