import React from 'react';
import { Image, Pressable, View, ViewStyle } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { COLOR_SCHEME } from '../../constants';
import { styles } from './styles';

interface InputProps {
  pressable?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
  showSearchIcon?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
  onChangeText?: (text: string) => void;
}

export const Input = React.memo(
  ({
    onPress,
    pressable = false,
    style = {},
    showSearchIcon = true,
    placeholder = 'Search recipe',
    ...textInputProps
  }: InputProps) => {
    const renderInput = (
      <View style={[styles.container, style]}>
        {showSearchIcon && <Image source={require('../../../assets/search.png')} style={styles.icon} />}
        <TextInput
          onPressIn={pressable ? onPress : undefined}
          {...textInputProps}
          editable={!pressable}
          placeholderTextColor={COLOR_SCHEME.lightGray}
          placeholder={placeholder}
        />
      </View>
    );

    if (pressable) {
      return (
        <Pressable hitSlop={8} onPress={onPress}>
          {renderInput}
        </Pressable>
      );
    }
    return renderInput;
  },
);
