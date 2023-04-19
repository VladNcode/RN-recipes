import { StyleSheet, Dimensions } from 'react-native';

import { COLOR_SCHEME, FONTS } from '../../constants';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    marginTop: 47,
    borderRadius: 10,
    backgroundColor: COLOR_SCHEME.white,
    paddingHorizontal: 10,
    paddingBottom: 10,
    width: width * 0.6,
    marginVertical: 16,

    // IOS
    shadowColor: COLOR_SCHEME.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    // Android
    elevation: 7,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: COLOR_SCHEME.gray,
    fontFamily: FONTS.poppinsBold,
    fontSize: 14,
    marginRight: 13,
    flex: 1,
  },
  authorImage: {
    width: 25,
    height: 25,
    marginRight: 8,
    borderRadius: 20,
  },
  footerText: {
    fontSize: 11,
    fontFamily: FONTS.poppins,
    color: COLOR_SCHEME.lightGray2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginTop: -40,
  },
  rating: {
    marginTop: -10,
    marginBottom: 10,
    maxWidth: '30%',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
