import React from 'react';
import { Image, Text, View } from 'react-native';

import { Rating } from '../Rating';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface RecipeCardProps {
  title: string;
  image: string;
  author: { photo?: string; name: string };
  rating?: number;
  time?: number;
  isLastItem: boolean;
  onPress: () => void;
}

export const RecipeCard = React.memo(({ author, image, rating, time, title, isLastItem, onPress }: RecipeCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, isLastItem && styles.lastItem]}>
      <View style={styles.row}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <Image source={{ uri: image }} style={styles.image} />
      </View>

      <Rating rating={rating || 0} />

      <View style={styles.footer}>
        <View style={styles.row}>
          <Image
            source={{
              uri:
                author.photo ||
                'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png',
            }}
            style={styles.authorImage}
          />
          <Text numberOfLines={1} style={styles.footerText}>
            {author.name}
          </Text>
        </View>

        {time ? (
          <View style={styles.row}>
            <Image source={require('../../../assets/timer.png')} style={styles.authorImage} />
            <Text numberOfLines={1} style={styles.footerText}>
              {time} mins
            </Text>
          </View>
        ) : (
          <View />
        )}
      </View>
    </TouchableOpacity>
  );
});
