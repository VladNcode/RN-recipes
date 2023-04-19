import 'react-native-gesture-handler';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';

import { Fonts } from './assets/fonts';
import { LoadingSpinner } from './src/components/LoadingSpinner';
import { COLOR_SCHEME, RootStackParamsList } from './src/constants';
import { Home, Search, Splash } from './src/screens';

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

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({ ...Fonts });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <LoadingSpinner />;
  }

  return (
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  back: {
    width: 20,
    height: 20,
    marginLeft: 20,
  },
});
