import React from 'react';
import { Text } from 'react-native';

import { HomeScreenNavigationProp } from '../../constants';

export const Search = React.memo(({ navigation }: { navigation: HomeScreenNavigationProp }) => {
  return <Text>Search Screen</Text>;
});