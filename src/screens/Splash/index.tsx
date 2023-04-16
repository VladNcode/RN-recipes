import { Image, ImageBackground, Text, View } from 'react-native';

import { CustomButton } from '../../components/Button';
import { styles } from './styles';

export const Splash = () => {
  const onPress = () => {
    console.log('pressed');
  };

  return (
    <ImageBackground source={require('../../../assets/splash.png')} style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>100K+ Premium Recipe</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.bodyTitle}>Get Cooking</Text>
        <Text style={styles.bodySubTitle}>Simple way to find Tasty Recipe</Text>

        <CustomButton onPress={onPress}>Start cooking</CustomButton>
      </View>
    </ImageBackground>
  );
};
