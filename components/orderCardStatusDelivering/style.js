import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  orderCardStatusDelivering: {
    height: 60,
    backgroundColor: '#E2F0FD',
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
  orderCardStatusDeliveringButton: {
    width: 119,
    height: 29,
    backgroundColor: '#fff',
    borderRadius: 5,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  orderCardStatusDeliveringButtonText: {
    fontWeight: '500',
    fontSize: 12,
  },
  DeliveringOrderContent: {
    marginLeft: -10,
  },
  orderCardStatusIcons: {
    width: 35,
    height: 39,
    paddingLeft: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#409AEF',

    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
});
