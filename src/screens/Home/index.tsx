import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import { Categories } from '../../components/Categories';
import { Input } from '../../components/Input';
import { Title } from '../../components/Title';
import { HomeScreenNavigationProp } from '../../constants';
import { styles } from './styles';

export const Home = React.memo(({ navigation }: { navigation: HomeScreenNavigationProp }) => {
  const onPress = () => {
    navigation.navigate('Search');
  };

  const [selectedCategory, setSelectedCategory] = useState('Trending   ');

  return (
    <SafeAreaView style={styles.container}>
      <Input
        pressable
        onPress={() => {
          navigation.navigate('Search');
        }}
      />
      <Title text="Featured recipes" />
      <Categories
        categories={['All', 'Trending', 'Favorites', 'Delicios']}
        selectedCategory={selectedCategory}
        changeSelectedCategory={setSelectedCategory}
      />
    </SafeAreaView>
  );
});
