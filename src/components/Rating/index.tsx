import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './styles';

interface RatingProps {
  rating: number;
}

export const Rating = React.memo(({ rating }: RatingProps) => {
  const stars = [1, 2, 3, 4, 5];
  const renderStars = () =>
    stars.map(star => {
      let image;

      if (rating >= star) {
        image = require('../../../assets/star.png');
      } else if (rating + 0.5 === star) {
        image = require('../../../assets/halfStar.png');
      } else {
        image = require('../../../assets/emptyStar.png');
      }

      return <Image style={styles.star} source={image} />;
    });

  return <View style={styles.container}>{renderStars()}</View>;
});
