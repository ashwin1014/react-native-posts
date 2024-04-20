import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';

interface CenterLoaderProps {
  text?: string;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

const CenterLoader = ({text}: CenterLoaderProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
      <Text>{text}</Text>
    </View>
  );
};

export default CenterLoader;
