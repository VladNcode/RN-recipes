import { StyleSheet } from 'react-native';

import { COLOR_SCHEME, FONTS } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_SCHEME.green,
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 66,
    flexDirection: 'row',
    justifyContent: 'center',
    minWidth: 243,
  },
  text: {
    color: COLOR_SCHEME.white,
    fontSize: 16,
    fontFamily: FONTS.poppinsSemiBold,
  },
  arrow: {
    width: 20,
    height: 20,
    marginLeft: 9,
  },
});
