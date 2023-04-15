import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

interface ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <TouchableOpacity>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};
