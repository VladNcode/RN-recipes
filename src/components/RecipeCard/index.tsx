import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';

interface RecipeCardProps {
  title: string;
  image: string;
  author: { photo: string; name: string };
  rating: number;
  time: string;
}

export const RecipeCard = React.memo(({ author, image, rating, time, title }: RecipeCardProps) => {
  return (
    <View>
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>

      <View style={styles.footer}>
        <View style={styles.row}>
          <Image source={{ uri: author.photo }} style={styles.authorImage} />
          <Text numberOfLines={1} style={styles.authorName}>
            {author.name}
          </Text>
        </View>

        <View style={styles.row}>
          <Image source={require('../../../assets/timer.png')} style={styles.authorName} />
          <Text numberOfLines={1} style={styles.time}>
            {time}
          </Text>
        </View>
      </View>
    </View>
  );
});
