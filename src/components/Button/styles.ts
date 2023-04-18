import { StyleSheet } from 'react-native';

import { COLOR_SCHEME, FONTS } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_SCHEME.green,
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 243,
  },
  text: {
    color: COLOR_SCHEME.white,
    fontFamily: FONTS.poppinsSemiBold,
    fontSize: 16,
  },
  arrow: {
    width: 20,
    height: 20,
    marginLeft: 9,
  },
});
