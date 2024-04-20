import {useRef, useCallback} from 'react';

import {useNavigation} from '@react-navigation/native';
import {View, Animated, Text} from 'react-native';

import Card from 'src/components/Card';
import CenterLoader from 'src/components/CenterLoader';
import {MAIN_STACK, RootStackScreenProps} from 'src/navigation/types';
import {usePostsQuery} from 'src/service';

import postsStyles from './posts.styles';

const AnimatedFlatList = Animated.FlatList;

const PostsScreen = () => {
  const {navigate} =
    useNavigation<RootStackScreenProps<MAIN_STACK>['navigation']>();
  const scrollRef = useRef<Animated.Value>(new Animated.Value(0))?.current;

  const {data, isLoading} = usePostsQuery();

  const handleNavigation = useCallback(
    (postId: number) => {
      navigate(MAIN_STACK.POST_DETAILS, {postId});
    },
    [navigate],
  );

  return (
    <View style={postsStyles.container}>
      {isLoading ? (
        <CenterLoader text="Loading posts" />
      ) : (
        <AnimatedFlatList
          data={data ?? []}
          ListHeaderComponent={
            <View style={postsStyles.headerContainer}>
              <Text style={postsStyles.header}>Posts</Text>
            </View>
          }
          stickyHeaderIndices={[0]}
          renderItem={({item}) => (
            <Card
              title={item.title}
              description={item.body}
              onPress={() => handleNavigation(item.id)}
              itemId={item.id}
            />
          )}
          keyExtractor={item => String(item.id)}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollRef}}}],
            {useNativeDriver: true},
          )}
        />
      )}
    </View>
  );
};

export default PostsScreen;
