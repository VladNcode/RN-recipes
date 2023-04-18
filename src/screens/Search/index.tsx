import React from 'react';
import { SafeAreaView } from 'react-native';

import { HomeScreenNavigationProp } from '../../constants';
import { Input } from '../../components/Input';
import { styles } from './styles';

export const Search = React.memo(({ navigation }: { navigation: HomeScreenNavigationProp }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Input />
    </SafeAreaView>
  );
});
