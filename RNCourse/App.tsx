import { StyleSheet, Text, View, Button } from 'react-native';

const App = () => (
  <View style={styles.container}>
    <View>
      <Text>Another piece of text</Text>
    </View>
    <Text>Hello World</Text>
    <Button title="Tap me" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
