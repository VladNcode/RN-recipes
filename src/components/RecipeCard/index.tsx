import React from 'react';
import { Image, Text, View } from 'react-native';

import { Rating } from '../Rating';
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
    <View style={styles.container}>
      <View style={styles.row}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <Image source={{ uri: image }} style={styles.image} />
      </View>

      <Rating rating={rating} />

      <View style={styles.footer}>
        <View style={styles.row}>
          <Image source={{ uri: author.photo }} style={styles.authorImage} />
          <Text numberOfLines={1} style={styles.footerText}>
            {author.name}
          </Text>
        </View>

        <View style={styles.row}>
          <Image source={require('../../../assets/timer.png')} style={styles.authorImage} />
          <Text numberOfLines={1} style={styles.footerText}>
            {time}
          </Text>
        </View>
      </View>
    </View>
  );
});
