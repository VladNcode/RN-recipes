import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
}

export const CustomButton = React.memo(({ children, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{children}</Text>
      <Image source={require('../../../assets/arrowRight.png')} style={styles.arrow} />
    </TouchableOpacity>
  );
});
