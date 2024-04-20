/* eslint-disable no-console */
import {useMemo} from 'react';

import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Image, Pressable, View, Text} from 'react-native';

import {arrowBackImage} from 'src/assets';
import CenterLoader from 'src/components/CenterLoader';
import {
  MAIN_STACK,
  NavigationParamList,
  RootStackScreenProps,
} from 'src/navigation/types';
import {usePostsByIdQuery} from 'src/service';
import {type Posts} from 'src/types/Posts';

import MemoizedPostDetail from './MemoizedPostDetail';
import styles from './postDetails.styles';

type PostDetailRoute = RootStackScreenProps<MAIN_STACK.POST_DETAILS>['route'];
type PostDetailNavigation = NativeStackScreenProps<
  NavigationParamList,
  MAIN_STACK.POST_DETAILS
>['navigation'];

/**
 * Creating a random function to log time taken to transform data
 */
function transformPostsData(post?: Posts) {
  const startTime = performance.now();
  if (!post) {
    return null;
  }

  const reverseString = (str: string) => str.split('').reverse().join('');
  const reversedTitle = reverseString(post.title);
  const reversedBody = reverseString(post.body);

  const simpleHash = post.userId + post.id;

  const countVowels = (str: string) => {
    const matched = str.match(/[aeiou]/gi);
    return matched ? matched.length : 0;
  };
  const vowelsCountTitle = countVowels(post.title);
  const vowelsCountBody = countVowels(post.body);

  const result = {
    hash: String(simpleHash),
    reversedBody,
    reversedTitle,
    vowelsCount: vowelsCountTitle + vowelsCountBody,
  };
  const endTime = performance.now();
  console.log(`Time taken to transform data: ${endTime - startTime}ms`);
  return result;
}

const PostDetails = () => {
  const {params} = useRoute<PostDetailRoute>();
  const {goBack} = useNavigation<PostDetailNavigation>();

  const {postId} = params;

  const {data, isLoading} = usePostsByIdQuery(postId);

  const title = data?.title ?? '';
  const body = data?.body ?? '';
  const userId = data?.userId ?? '';
  const id = data?.id ?? '';

  const transformedData = useMemo(() => transformPostsData(data), [data]);

  return (
    <View style={styles.container}>
      <View style={styles.navHeader}>
        <Pressable onPress={goBack}>
          <Image source={arrowBackImage} style={styles.backButtonIcon} />
        </Pressable>
        <Text style={styles.navTitle}>Post Detail</Text>
      </View>
      {isLoading ? (
        <CenterLoader />
      ) : (
        <MemoizedPostDetail
          title={title}
          body={body}
          userId={Number(userId)}
          id={Number(id)}
          numberOfVowels={transformedData?.vowelsCount}
          reversedBody={transformedData?.reversedBody}
          reversedTitle={transformedData?.reversedTitle}
          hash={transformedData?.hash}
        />
      )}
    </View>
  );
};

export default PostDetails;
