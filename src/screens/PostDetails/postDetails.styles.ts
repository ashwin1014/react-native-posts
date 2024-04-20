import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  backButtonIcon: {
    height: 24,
    width: 24,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  container: {
    flex: 1,
  },
  detailCard: {
    backgroundColor: 'rgb(251, 237, 237)',
    borderRadius: 10,
    flexDirection: 'column',
    margin: 10,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  navHeader: {
    backgroundColor: 'rgb(203, 206, 210)',
    flexDirection: 'row',
    height: 50,
    padding: 10,
  },
  navTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    textTransform: 'capitalize',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});

export default styles;
