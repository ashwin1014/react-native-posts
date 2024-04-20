/* eslint-disable react/require-default-props */
import {memo} from 'react';

import {Text, View} from 'react-native';

import HorizontalLine from 'src/components/HorizontalLine';

import styles from './postDetails.styles';

interface MemoizedPostDetailProps {
  body: string;
  hash?: string;
  id: number;
  numberOfVowels?: number;
  reversedBody?: string;
  reversedTitle?: string;
  title: string;
  userId: number;
}

const MemoizedPostDetail = memo(
  ({
    body,
    id,
    title,
    userId,
    numberOfVowels,
    reversedBody,
    reversedTitle,
    hash,
  }: MemoizedPostDetailProps) => {
    return (
      <View style={styles.detailCard}>
        <View style={styles.cardHeader}>
          <View>
            <Text style={styles.title}>User ID: {userId}</Text>
          </View>
          <View>
            <Text style={styles.title}>Post ID: {id}</Text>
          </View>
        </View>
        <HorizontalLine />
        <Text style={styles.title}>{title}</Text>
        <HorizontalLine />
        <Text>{body}</Text>
        <HorizontalLine />
        <Text style={styles.title}>Transformed Data</Text>
        <Text>Reversed Title -&gt; {reversedTitle}</Text>
        <Text>Reversed Body -&gt; {reversedBody}</Text>
        <Text>Hash -&gt; {hash}</Text>
        <Text>Number of vowels: {numberOfVowels}</Text>
      </View>
    );
  },
);

export default MemoizedPostDetail;
