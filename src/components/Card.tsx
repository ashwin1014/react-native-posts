import {memo} from 'react';

import {Pressable, StyleSheet, View, Text} from 'react-native';

interface CardProps {
  description?: string;
  itemId?: number;
  onPress?: () => void;
  title: string;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  cardPressed: {
    backgroundColor: '#E6E6E6',
  },
  container: {
    flexDirection: 'column',
  },
  title: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  userId: {
    fontSize: 12,
    fontStyle: 'italic',
    fontWeight: '400',
    marginBottom: 5,
  },
});

const Card = ({description, onPress, title, itemId}: CardProps) => {
  const isPressable = typeof onPress === 'function';

  return (
    <Pressable
      onPress={onPress}
      disabled={!isPressable}
      style={({pressed}) => [styles.card, pressed ? styles.cardPressed : {}]}>
      <View style={styles.container}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        {itemId ? <Text style={styles.userId}>UserId:{itemId}</Text> : null}
        {description ? <Text numberOfLines={2}>{description}</Text> : null}
      </View>
    </Pressable>
  );
};

export default memo(Card);
