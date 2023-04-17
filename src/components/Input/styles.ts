import { StyleSheet } from 'react-native';
import { COLOR_SCHEME, FONTS } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLOR_SCHEME.lightGray,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginVertical: 16,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  input: {
    fontFamily: FONTS.poppins,
    color: COLOR_SCHEME.black,
    fontSize: 14,
    fontWeight: '500',
  },
});
