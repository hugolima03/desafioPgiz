import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3EE',
    textAlign: 'left',
    paddingTop: 80,
  },
  title: {
    color: '#394F63',
    fontSize: 20,
    fontWeight: '700',
  },
  formContainer: {
    flex: 1,
    width: 335,
    margin: 20,
  },
  label: {
    marginTop: 19,
    marginBottom: 2,
  },
  input: {
    padding: 12,
    width: '100%',
    height: 40,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 14,
  },
  passwordInput: {
    padding: 12,
    width: '100%',
    height: 40,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 14,
    letterSpacing: 2.8,
  },
  forgotPassword: {
    color: '#394F63',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 10,

    textDecorationLine: 'underline',
  },
  footerLinks: {
    color: '#394F63',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 10,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  primaryButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#FE671F',
    shadowColor: '#FE671F4D',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 1.0,
    elevation: 1,
    color: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  secondaryButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    shadowColor: '#80808026',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 16,
    shadowOpacity: 1.0,
    elevation: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 100,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  secundaryButtonText: {
    color: '#FE671F',
    fontSize: 18,
    fontWeight: '500',
  },
  simpleLink: {
    color: '#394F63',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 50,
    textAlign: 'center',
  },
});