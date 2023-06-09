import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface VerticalCard {
  image: string;
  title: string;
  servings: number;
  isLastItem: boolean;
  onPress: () => void;
}

export const VerticalCard = React.memo(({ image, title, servings, isLastItem, onPress }: VerticalCard) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, isLastItem && styles.lastItem]}>
      <Image source={{ uri: image }} style={styles.image} />

      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>

      {servings ? (
        <View style={styles.footer}>
          <Text style={styles.label}>Servings</Text>
          <Text style={styles.time}>{servings}</Text>
        </View>
      ) : (
        <View />
      )}
    </TouchableOpacity>
  );
});
