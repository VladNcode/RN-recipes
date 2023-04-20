import { StyleSheet } from 'react-native';
import { FONTS } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  heading: {
    fontFamily: FONTS.poppinsBold,
    fontSize: 16,
    marginTop: 25,
  },
  list: {
    marginHorizontal: -24,
  },
});
