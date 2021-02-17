import { StyleSheet } from 'react-native';
export default styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#E9EAEB',
    textAlign: 'left',
  },
  header: {
    width: '100%',
    height: 50,
    backgroundColor: '#FE671F',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
  },
  input: {
    padding: 12,
    width: 335,
    height: 46,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 10,
    marginTop: 10,
    fontSize: 14,
  },
  cardHeader: {
    width: 335,
    height: 43,
    backgroundColor: '#394F63',
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    padding: 14,
  },
  headerTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  headerButton: {
    width: 73.28,
    height: 25,
    backgroundColor: '#758492',
    borderRadius: 5,
    flexDirection: 'row',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  headerButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  cardContent: {
    width: 335,
    backgroundColor: '#fff',
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,

    padding: 15,
  }
});
