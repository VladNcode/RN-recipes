import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';

interface VerticalCard {
  image: string;
  title: string;
  time: string;
  isLastItem: boolean;
}

export const VerticalCard = React.memo(({ image, title, time, isLastItem }: VerticalCard) => {
  return (
    <View style={[styles.container, isLastItem && styles.lastItem]}>
      <Image source={{ uri: image }} style={styles.image} />

      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.label}>Time</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
});
