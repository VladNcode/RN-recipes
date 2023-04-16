import * as Font from 'expo-font';
import { useEffect, useState } from 'react';

import { Fonts } from './assets/fonts';
import { LoadingSpinner } from './src/components/LoadingSpinner';
import { Splash } from './src/screens/Splash';

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

  return <Splash />;
}
