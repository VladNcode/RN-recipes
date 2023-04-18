import React from 'react';
import { FlatList, ListRenderItemInfo, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

type Category = string;

interface CategoryProps {
  categories: Category[];
  selectedCategory: Category;
  changeSelectedCategory: (item: Category) => void;
}

export const Categories = React.memo(({ categories, selectedCategory, changeSelectedCategory }: CategoryProps) => {
  const renderCategoriesRow = ({ item, index }: ListRenderItemInfo<Category>) => {
    const isSelected = selectedCategory === item;

    return (
      <TouchableOpacity
        onPress={() => {
          changeSelectedCategory(item);
        }}>
        <View
          style={[
            isSelected && styles.selected,
            index === 0 && styles.firstItem,
            index === 0 && !isSelected && styles.firstItemNotSelected,
          ]}>
          <Text style={[styles.item, isSelected && styles.selectedItem]}>{item}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      horizontal
      keyExtractor={item => String(item)}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      data={categories}
      renderItem={renderCategoriesRow}
    />
  );
});
