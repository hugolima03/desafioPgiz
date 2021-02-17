import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  orderCardStatusDelivered: {
    height: 60,
    backgroundColor: '#E8F6E9',
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
  orderCardStatusDeliveredButton: {
    width: 85,
    height: 29,
    backgroundColor: '#fff',
    borderRadius: 5,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  orderCardStatusDeliveredButtonText: {
    fontWeight: '500',
    fontSize: 12,
  },
  DeliveredOrderContent: {
    width: 130,
    marginLeft: -10,
  },
  orderCardStatusIcons: {
    height: 39,
    paddingLeft: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#679F38',

    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
});
