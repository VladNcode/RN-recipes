import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import { Categories } from '../../components/Categories';
import { Input } from '../../components/Input';
import { Title } from '../../components/Title';
import { HomeScreenNavigationProp } from '../../constants';
import { styles } from './styles';
import { RecipeCard } from '../../components/RecipeCard';
import { FlatList } from 'react-native-gesture-handler';
import { VerticalCard } from '../../components/VerticalCard';

export const Home = React.memo(({ navigation }: { navigation: HomeScreenNavigationProp }) => {
  const onPress = () => {
    navigation.navigate('Search');
  };

  const [selectedCategory, setSelectedCategory] = useState('Trending   ');

  const data = [
    {
      title: 'Steak with tomato sauce and bulgur rice.',
      time: '20 mins',
      author: { name: 'James Milner', photo: 'https://www.themarysue.com/wp-content/uploads/2015/12/avatar.jpeg' },
      image: 'https://buffalorunranch.com/wp-content/uploads/2017/08/ribeye-1.jpg',
      rating: 4.5,
    },
    {
      title: 'Steak with tomato sauce and bulgur rice.',
      time: '20 mins',
      author: { name: 'James Milner', photo: 'https://www.themarysue.com/wp-content/uploads/2015/12/avatar.jpeg' },
      image: 'https://buffalorunranch.com/wp-content/uploads/2017/08/ribeye-1.jpg',
      rating: 4.5,
    },
    {
      title: 'Steak',
      time: '20 mins',
      author: { name: 'James Milner', photo: 'https://www.themarysue.com/wp-content/uploads/2015/12/avatar.jpeg' },
      image: 'https://buffalorunranch.com/wp-content/uploads/2017/08/ribeye-1.jpg',
      rating: 4.5,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Input
        pressable
        onPress={() => {
          navigation.navigate('Search');
        }}
      />
      <Title extraTextStyle={styles.heading} text="Featured recipes" />

      <FlatList
        keyExtractor={({ title }) => String(title) + Math.random()}
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.list}
        data={data}
        renderItem={({ item, index }) => {
          return (
            <RecipeCard
              isLastItem={index === data.length - 1}
              title={item.title}
              time={item.time}
              author={{
                name: item.author.name,
                photo: item.author.photo,
              }}
              image={item.image}
              rating={item.rating}
            />
          );
        }}
      />

      <Categories
        categories={['All', 'Trending', 'Favorites', 'Delicios']}
        selectedCategory={selectedCategory}
        changeSelectedCategory={setSelectedCategory}
      />

      <FlatList
        keyExtractor={({ title }) => String(title) + Math.random()}
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.list}
        data={data}
        renderItem={({ item, index }) => {
          return (
            <VerticalCard
              image={item.image}
              title={item.title}
              time={item.time}
              isLastItem={index === data.length - 1}
            />
          );
        }}
      />
    </SafeAreaView>
  );
});
