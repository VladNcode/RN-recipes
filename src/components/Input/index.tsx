import React from 'react';
import { Image, View, ViewStyle } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { COLOR_SCHEME } from '../../constants';
import { styles } from './styles';

interface InputProps {
  onPress?: () => void;
  children?: React.ReactNode;
  style?: ViewStyle;
  showSearchIcon?: boolean;
  placeholder?: string;
}

export const Input = React.memo(
  ({ onPress, children, style = {}, showSearchIcon = true, placeholder = 'Search recipe' }: InputProps) => {
    return (
      <View style={[styles.container, style]}>
        {showSearchIcon && <Image source={require('../../../assets/search.png')} style={styles.icon} />}

        <TextInput placeholderTextColor={COLOR_SCHEME.lightGray} placeholder="Search recipe" />
      </View>
    );
  },
);
