import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import { FlatList } from 'react-native-gesture-handler';
import { Input, VerticalCard } from '../../components';
import { HomeScreenNavigationProp } from '../../constants';
import { Recipe } from '../../constants/recipe.interface';
import { useRecipesContext } from '../../contexts';
import { styles } from './styles';

export const Search = React.memo(({ navigation }: { navigation: HomeScreenNavigationProp }) => {
  const { recipes } = useRecipesContext();
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipes);

  const navigateToRecipe = (item: Recipe) => {
    navigation.navigate('RecipeDetails', { item });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Input
        style={styles.input}
        autoFocus
        onChangeText={(text: string) => {
          if (text.length > 2 || text.length === 0) {
            setFilteredRecipes(recipes.filter(recipe => recipe.name.toLowerCase().includes(text.toLowerCase())));
          }
        }}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.list}
        data={filteredRecipes}
        numColumns={2}
        keyExtractor={item => String(item.id)}
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
