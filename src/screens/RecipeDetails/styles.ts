import { StyleSheet } from 'react-native';
import { COLOR_SCHEME, FONTS } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },

  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 12,
  },
  title: {
    fontFamily: FONTS.poppinsBold,
    fontSize: 16,
    marginBottom: 24,
  },

  instructions: {
    fontFamily: FONTS.poppinsBold,
    color: COLOR_SCHEME.black,
    fontSize: 16,
    marginTop: 40,
    marginBottom: 16,
  },
  row: {
    padding: 12,
    backgroundColor: COLOR_SCHEME.lightGray3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    borderRadius: 8,
  },
  rowText: {
    fontFamily: FONTS.poppins,
    color: COLOR_SCHEME.black,
    fontSize: 14,
    textTransform: 'capitalize',
  },
  rowNumber: {
    fontFamily: FONTS.poppins,
    color: COLOR_SCHEME.lightGray2,
    fontSize: 12,
  },
  instructionsContainer: {
    flexDirection: 'row',

    alignItems: 'center',
    marginBottom: 22,
  },
  instructionsNumber: {
    fontFamily: FONTS.poppins,
    color: COLOR_SCHEME.darkGray,
    fontSize: 20,
    minWidth: 20,
    marginRight: 24,
  },
  instructionsText: {
    fontFamily: FONTS.poppins,
    color: COLOR_SCHEME.black,
    maxWidth: '80%',
  },
});
