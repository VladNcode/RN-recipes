import { StyleSheet, Dimensions } from 'react-native';

import { COLOR_SCHEME, FONTS } from '../../constants';

const { width } = Dimensions.get('window');

const hexFiftyPercentOpacity = 80;

export const styles = StyleSheet.create({
  container: {
    marginLeft: 24,
    marginTop: 60,
    borderRadius: 12,
    backgroundColor: COLOR_SCHEME.lightGray + hexFiftyPercentOpacity,
    padding: 10,
    width: width * 0.393,
    marginVertical: 16,
    justifyContent: 'space-between',
    minHeight: 160,
  },
  title: {
    color: COLOR_SCHEME.gray,
    fontFamily: FONTS.poppinsSemiBold,
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center',
    maxWidth: '80%',
    marginTop: 14,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 100,
    marginTop: -65,
    alignSelf: 'center',
  },
  footer: {},
  label: {
    color: COLOR_SCHEME.lightGray2,
    fontFamily: FONTS.poppins,
    lineHeight: 16,
    marginTop: 25,
    fontSize: 11,
  },
  time: {
    color: COLOR_SCHEME.gray,
    fontFamily: FONTS.poppinsSemiBold,
    marginTop: 8,
    fontSize: 11,
  },
  lastItem: {
    marginRight: 24,
  },
});
