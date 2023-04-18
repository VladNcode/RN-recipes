import { StyleSheet } from 'react-native';
import { COLOR_SCHEME, FONTS } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: -24,
    paddingVertical: 16,
  },
  selected: {
    backgroundColor: COLOR_SCHEME.green,
    borderRadius: 10,
  },
  item: {
    color: COLOR_SCHEME.green,
    fontFamily: FONTS.poppinsBold,
    fontSize: 12,
    paddingHorizontal: 20,
    paddingVertical: 7,
  },
  selectedItem: {
    color: COLOR_SCHEME.white,
    fontFamily: FONTS.poppinsBold,
  },
  firstItem: {
    marginLeft: 24,
  },
  firstItemNotSelected: {
    marginLeft: 8,
  },
});
