import React from 'react';
import { Text } from 'react-native';

import { HomeScreenNavigationProp } from '../../constants';

export const Home = React.memo(({ navigation }: { navigation: HomeScreenNavigationProp }) => {
  return <Text>Home Screen</Text>;
});
