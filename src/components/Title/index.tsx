import React from 'react';
import { Text, TextStyle } from 'react-native';

import { styles } from './styles';

interface TitleProps {
  text: string;
  extraTextStyle?: TextStyle;
}

export const Title = React.memo(({ text, extraTextStyle }: TitleProps) => {
  return <Text style={[styles.title, extraTextStyle]}>{text}</Text>;
});
