import { StyleSheet, Text, Touchable, View,TextInput, TouchableOpacity  } from 'react-native';
import { Alert } from 'react-native-web';
export default function App() {
  function teste(){
    Alert.alert('Testado');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🥶 Aplicativo Temperatura 🥵</Text>
      <TextInput 
        style={styles.inputTemperature}
        placeholder='Informe a temperatura em Celsius'
        keyboardType='numeric'      
      
      />
   
      <TouchableOpacity onPress={teste}>
        <Text style={styles.buttonCalculated}>Calcular</Text>
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
  },
  buttonCalculated: {
    backgroundColor: '#00FFFF',
    paddingHorizontal:  30,
    paddingVertical: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
  },
  inputTemperature: {
    backgroundColor:  '#FFF',
    color:  '000',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    borderColor:  '#000',
    borderWidth: 1,
  }
});