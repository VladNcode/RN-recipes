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
    alignItems: 'center',
    marginTop: 104,
  },
  logo: {
    width: 79,
    height: 79,
  },
  title: {
    fontFamily: FONTS.poppinsSemiBold,
    color: COLOR_SCHEME.white,
    marginTop: 14,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '500',
  },
  body: {
    alignItems: 'center',
    marginBottom: 84,
  },
  bodyTitle: {
    fontFamily: FONTS.poppinsSemiBold,
    color: COLOR_SCHEME.white,
    fontSize: 50,
    maxWidth: '70%',
    textAlign: 'center',
  },
  bodySubTitle: {
    fontFamily: FONTS.poppins,
    color: COLOR_SCHEME.white,
    fontSize: 16,
    marginBottom: 64,
    marginTop: 20,
  },
});
