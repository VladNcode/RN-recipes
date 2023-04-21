import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { Categories, Input, RecipeCard, Title, VerticalCard } from '../../components';
import { HomeScreenNavigationProp } from '../../constants';
import { useHealthyRecipesContext, useRecipesContext } from '../../contexts';
import { convertSnakeCaseToNormalCase } from '../../utils/utils';
import { styles } from './styles';

export const Home = React.memo(({ navigation }: { navigation: HomeScreenNavigationProp }) => {
  const onPress = () => {
    navigation.navigate('Search');
  };

  const [selectedTag, setSelectedTag] = useState('All');
  const [tags, setTags] = useState(['All']);

  const { healthyRecipes } = useHealthyRecipesContext();
  const { recipes } = useRecipesContext();

  useEffect(() => {
    const tags = new Set<string>(['All']);

    recipes.forEach(recipe => {
      recipe.tags.forEach(tag => tag.name.length > 2 && tags.add(tag.name));
    });

    setTags([...tags].map(convertSnakeCaseToNormalCase));
  }, [recipes]);

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
        keyExtractor={({ id }) => String(id)}
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.list}
        data={healthyRecipes}
        renderItem={({ item, index }) => {
          return (
            <RecipeCard
              isLastItem={index === healthyRecipes.length - 1}
              title={item.name}
              time={item.cook_time_minutes}
              image={item.thumbnail_url}
              rating={item.user_ratings?.score}
              author={{ name: item.credits[0]?.name, photo: item.credits[0]?.image_url }}
            />
          );
        }}
      />

      <Categories categories={tags} selectedCategory={selectedTag} changeSelectedCategory={setSelectedTag} />

      <FlatList
        keyExtractor={({ id }) => String(id)}
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.list}
        data={recipes}
        renderItem={({ item, index }) => {
          return (
            <VerticalCard
              image={item.thumbnail_url}
              title={item.name}
              servings={item.num_servings}
              isLastItem={index === recipes.length - 1}
            />
          );
        }}
      />
    </SafeAreaView>
  );
});
