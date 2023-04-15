import { StyleSheet } from 'react-native';

import { COLOR_SCHEME } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_SCHEME.green,
    flex: 1,
    borderRadius: 10,
    padding: 15,
  },
  text: {
    color: COLOR_SCHEME.white,
    fontSize: 16,
    fontWeight: '500',
  },
});
