//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Este es un titulo.</Text>
      <Pressable onPress={Alert.alert}>
        <Text>Agregar nueva tarea!</Text>
      </Pressable>
      <View> style={styles.lista}
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  lista: {
    flex: 2,
    alignItems: 'flex-start',

  },
});
