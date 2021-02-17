import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  orderCardStatusPreparing: {
    height: 60,
    backgroundColor: '#FFE6DE',
    borderRadius: 5,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginBottom: 10,
  },
  orderCardStatusPreparingButton: {
    width: 99,
    height: 29,
    backgroundColor: '#fff',
    borderRadius: 5,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  orderCardStatusPreparingButtonText: {
    fontWeight: '500',
    fontSize: 12,
  },
  PreparingOrderContent: {
    marginLeft: -10,
  },
  orderCardStatusIcons: {
    width: 35,
    height: 39,
    paddingLeft: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#FF5622',

    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
});
