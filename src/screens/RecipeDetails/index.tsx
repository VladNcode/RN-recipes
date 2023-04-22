import React from 'react';
import { Image, SafeAreaView, View, Text } from 'react-native';

import { Title } from '../../components';
import { RecipeDetailsRoute, RecipeDetailsScreenNavigationProp } from '../../constants';
import { styles } from './styles';
import { FlatList } from 'react-native-gesture-handler';

interface RecipeDetailsProps {
  route: RecipeDetailsRoute;
  navigation: RecipeDetailsScreenNavigationProp;
}

export const RecipeDetails = React.memo(({ route }: RecipeDetailsProps) => {
  const { item } = route.params;
  const nutrition = item.nutrition;
  const nutritionKeys = Object.keys(nutrition || {}).filter(key => key !== 'updated_at');

  const instructions = item.instructions;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={instructions}
        keyExtractor={item => String(item.id)}
        ListHeaderComponent={() => (
          <View>
            <Image source={{ uri: item.thumbnail_url }} style={styles.image} />
            <Title text={item.name} extraTextStyle={styles.title} />

            {nutritionKeys.map(key => {
              return (
                <View key={key} style={styles.row}>
                  <Text style={styles.rowText}>{key}</Text>
                  <Text style={styles.rowNumber}>{nutrition && nutrition[key as keyof typeof nutrition]}</Text>
                </View>
              );
            })}

            <Text style={styles.instructions}>Instructions</Text>
          </View>
        )}
        renderItem={({ item, index }) => (
          <View style={styles.instructionsContainer}>
            <Text style={styles.instructionsNumber}>{index + 1}</Text>
            <Text style={styles.instructionsText}>{item.display_text}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
});
