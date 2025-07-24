import { Text, View, StyleSheet } from 'react-native';
import { Month } from 'bdk-rn';

const result = Month.August;

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Result: {result.toString()}</Text> */}
      <Text>Result: {Month[result]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
