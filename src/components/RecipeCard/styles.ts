import { StyleSheet } from 'react-native';
import { COLOR_SCHEME, FONTS } from '../../constants';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: COLOR_SCHEME.gray,
    fontFamily: FONTS.poppinsBold,
    fontSize: 14,
  },

  authorName: {},
  authorImage: {
    width: 25,
    height: 25,
    marginRight: 8,
    color: COLOR_SCHEME.lightGray2,
    fontSize: 11,
    fontFamily: FONTS.poppins,
  },
  image: {},
  rating: {},
  time: {},
  footer: {},
});
