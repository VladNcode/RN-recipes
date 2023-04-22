import 'react-native-gesture-handler';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';

import { Fonts } from './assets/fonts';
import { getRecipesList } from './src/api/getRecipesList';
import { LoadingSpinner } from './src/components/LoadingSpinner';
import { COLOR_SCHEME, RootStackParamsList } from './src/constants';
import { Recipe } from './src/constants/recipe.interface';
import { HealthyRecipesContext, RecipesContext } from './src/contexts/contexts';
import { Home, RecipeDetails, Search, Splash } from './src/screens';

const Stack = createStackNavigator<RootStackParamsList>();

const BackButton = (props: { onPress?: () => void }) => {
  return (
    <Pressable onPress={props.onPress}>
      <Image source={require('./assets/arrowLeft.png')} style={styles.back} />
    </Pressable>
  );
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLOR_SCHEME.white,
  },
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [healthyRecipes, setHealthyRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({ ...Fonts });
      setFontsLoaded(true);
    }

    const fetchData = async () => {
      try {
        const response = await getRecipesList({ size: 50 });
        const response2 = await getRecipesList({ tags: 'healthy', size: 30 });

        if (response.status === 200)
          setRecipes(
            response.data.results.filter(
              recipe =>
                recipe.instructions &&
                recipe.instructions.length &&
                Object.keys(recipe.nutrition || {}).length &&
                recipe.total_time_minutes &&
                recipe.num_servings,
            ),
          );
        if (response2.status === 200)
          setHealthyRecipes(
            response2.data.results.filter(
              recipe =>
                recipe.instructions &&
                recipe.instructions.length &&
                Object.keys(recipe.nutrition || {}).length &&
                recipe.total_time_minutes &&
                recipe.num_servings,
            ),
          );
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    loadFonts();
  }, []);

  if (!fontsLoaded || !recipes.length || !healthyRecipes.length) {
    return <LoadingSpinner />;
  }

  return (
    <HealthyRecipesContext.Provider value={{ healthyRecipes, setHealthyRecipes }}>
      <RecipesContext.Provider value={{ recipes, setRecipes }}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', headerShadowVisible: false }}>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false, headerTitle: 'Back' }} />
            <Stack.Screen name="Home" component={Home} options={{ headerLeft: () => <></>, gestureEnabled: false }} />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{
                headerLeft: BackButton,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="RecipeDetails"
              component={RecipeDetails}
              options={{
                title: 'Recipe Details',
                headerLeft: BackButton,
                gestureEnabled: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </RecipesContext.Provider>
    </HealthyRecipesContext.Provider>
  );
}

const styles = StyleSheet.create({
  back: {
    width: 20,
    height: 20,
    marginLeft: 20,
  },
});
