import { StyleSheet } from 'react-native';

import { COLOR_SCHEME, FONTS } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'space-between',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 104,
  },
  logo: {
    width: 79,
    height: 79,
  },
  title: {
    color: COLOR_SCHEME.white,
    marginTop: 14,
    fontSize: 18,
    fontFamily: FONTS.poppinsSemiBold,
    textAlign: 'center',
    fontWeight: '500',
  },
  body: {
    alignItems: 'center',
    marginBottom: 84,
  },
  bodyTitle: {
    fontFamily: FONTS.poppinsSemiBold,
    fontSize: 50,
    color: COLOR_SCHEME.white,
    maxWidth: '60%',
    textAlign: 'center',
  },
  bodySubTitle: {
    fontFamily: FONTS.poppins,
    fontSize: 16,
    color: COLOR_SCHEME.white,
    marginBottom: 64,
    marginTop: 20,
  },
});
