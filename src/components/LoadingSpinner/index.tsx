import { View, ActivityIndicator } from 'react-native';
import { COLOR_SCHEME } from '../../constants';
import { styles } from './styles';

export const LoadingSpinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLOR_SCHEME.green} />
    </View>
  );
};
