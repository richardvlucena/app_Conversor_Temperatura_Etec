import { StyleSheet, Text, Touchable, View,TextInput, TouchableOpacity  } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>🥶 Aplicativo Temperatura 🥵</Text>
      <TextInput />
   
      <TouchableOpacity>
        <Text>Calcular</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF0E6',
    alignItems: 'center',
    justifyContent: 'center',

  },
  title: {
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 40,
    fontSize: 22,
    color: '#000',
  }
});