import React from 'react';
import { Pressable, SafeAreaView, Text } from 'react-native';

import { Input } from '../../components/Input';
import { HomeScreenNavigationProp } from '../../constants';
import { styles } from './styles';

export const Home = React.memo(({ navigation }: { navigation: HomeScreenNavigationProp }) => {
  const onPress = () => {
    navigation.navigate('Search');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={onPress}>
        <Text>Go to search</Text>
      </Pressable>
      <Input />
    </SafeAreaView>
  );
});
