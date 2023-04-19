import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import { Categories } from '../../components/Categories';
import { Input } from '../../components/Input';
import { Title } from '../../components/Title';
import { HomeScreenNavigationProp } from '../../constants';
import { styles } from './styles';
import { RecipeCard } from '../../components/RecipeCard';

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
      <Title extraTextStyle={styles.heading} text="Featured recipes" />
      <RecipeCard
        title="Steak with tomato sauce and bulgur rice."
        time="20 mins"
        author={{ name: 'James Milner', photo: 'https://www.themarysue.com/wp-content/uploads/2015/12/avatar.jpeg' }}
        image="https://buffalorunranch.com/wp-content/uploads/2017/08/ribeye-1.jpg"
        rating={4.5}
      />
      <Categories
        categories={['All', 'Trending', 'Favorites', 'Delicios']}
        selectedCategory={selectedCategory}
        changeSelectedCategory={setSelectedCategory}
      />
    </SafeAreaView>
  );
});
