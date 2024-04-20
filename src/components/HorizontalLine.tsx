import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  horizontalLine: {
    backgroundColor: 'rgb(173, 177, 183)',
    height: 1,
    marginVertical: 8,
    width: '100%',
  },
});

const HorizontalLine = () => {
  return <View style={styles.horizontalLine} />;
};

export default HorizontalLine;
