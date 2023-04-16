import { Text, TouchableOpacity, Image } from 'react-native';

import { styles } from './styles';

interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
}

export const CustomButton = ({ children, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{children}</Text>
      <Image source={require('../../../assets/arrowRight.png')} style={styles.arrow} />
    </TouchableOpacity>
  );
};
