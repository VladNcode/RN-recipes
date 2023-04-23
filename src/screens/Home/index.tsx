import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { Categories, Input, RecipeCard, Title, VerticalCard } from '../../components';
import { HomeScreenNavigationProp } from '../../constants';
import { useHealthyRecipesContext, useRecipesContext } from '../../contexts';
import { convertNormalCaseToSnakeCase, convertSnakeCaseToNormalCase } from '../../utils/utils';
import { styles } from './styles';
import { Recipe } from '../../constants/recipe.interface';

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

  const navigateToRecipe = (item: Recipe) => {
    navigation.navigate('RecipeDetails', { item });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Input pressable onPress={onPress} />
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
              onPress={() => {
                navigateToRecipe(item);
              }}
              isLastItem={index === healthyRecipes.length - 1}
              title={item.name}
              time={item.total_time_minutes}
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
        data={
          selectedTag === 'All'
            ? recipes
            : recipes.filter(recipe => recipe.tags.some(tag => tag.name === convertNormalCaseToSnakeCase(selectedTag)))
        }
        renderItem={({ item, index }) => {
          return (
            <VerticalCard
              onPress={() => {
                navigateToRecipe(item);
              }}
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
