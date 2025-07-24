import { Text, View, StyleSheet } from 'react-native';
import { Network } from 'bdk-rn';

const result = Network.Signet;

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your current network is: {Network[result]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
    text: {
    fontSize: 18,
  },
});
