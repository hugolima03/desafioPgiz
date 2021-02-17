import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  orderCardStatusPending: {
    height: 60,
    backgroundColor: '#FDECEB',
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
  orderCardStatusPendingButton: {
    width: 86,
    height: 29,
    backgroundColor: '#fff',
    borderRadius: 5,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  orderCardStatusPendingButtonText: {
    fontWeight: '500',
    fontSize: 12,
  },
  pendingOrderContent: {
    width: 130,
    marginLeft: -10,
  },
  orderCardStatusIcons: {
    width: 35,
    height: 39,
    paddingLeft: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#E8453E',

    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
});
