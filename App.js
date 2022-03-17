<<<<<<< HEAD
import { StyleSheet, Text, Touchable,teste, View,TextInput, Alert, TouchableOpacity  } from 'react-native';

import { useState } from 'react';

export default function App() {
  const[celsius, setCelsius] = useState();
 
    let fahrenheint;

    function teste(){
      fahrenheint = (9 * celsius * 160)/5;
      Alert.alert('conversor',`${celsius}°c equivalem a ${fahrenheint}°f`);
     // alert(`${celsius}°c equivalem a ${fahrenheint}°f`);  web
    }
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧊 Aplicativo Temperatura 🔥</Text>
      <TextInput 
        style={styles.inputTemperature}
        placeholder='Informe a temperatura em Celsius'
        keyboardType='numeric'
        onChangeText={(celsius) => setCelsius(celsius)}
=======
import { StyleSheet, Text, Touchable, View,TextInput, TouchableOpacity  } from 'react-native';
<<<<<<< HEAD
import { Alert } from 'react-native-web';
=======
>>>>>>> 2f2c5cef7286f8f28dde568ec69d0847138ab541
export default function App() {
  function teste(){
    Alert.alert('Testado');
  }
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Text style={styles.title}>🥶 Aplicativo Temperatura 🥵</Text>
      <TextInput 
        style={styles.inputTemperature}
        placeholder='Informe a temperatura em Celsius'
        keyboardType='numeric'      
      
>>>>>>> 11a7dfe034eaa2ac16d347819fdb552db45d1a69
      />
   
      <TouchableOpacity onPress={teste}>
        <Text style={styles.buttonCalculated}>Calcular</Text>
<<<<<<< HEAD
=======
=======
      <Text>🥶 Aplicativo Temperatura 🥵</Text>
      <TextInput />
   
      <TouchableOpacity>
        <Text>Calcular</Text>
>>>>>>> 2f2c5cef7286f8f28dde568ec69d0847138ab541
>>>>>>> 11a7dfe034eaa2ac16d347819fdb552db45d1a69
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 11a7dfe034eaa2ac16d347819fdb552db45d1a69
  },
  title: {
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 40,
    fontSize: 22,
    color: '#000',
  },
  buttonCalculated: {
<<<<<<< HEAD
    backgroundColor: '#34E5EB',
    paddingHorizontal: 30,
    paddingVertical: 10,
    fontWeight: 'bold',
    textTransform:'uppercase',
    justifyContent: 'center',
    alignItems:'center',
  },
  inputTemperature: {
    backgroundColor: '#FFF',
    color: '#000',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
  },
=======
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
=======
  },
  title: {
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 40,
    fontSize: 22,
    color: '#000',
>>>>>>> 2f2c5cef7286f8f28dde568ec69d0847138ab541
  }
>>>>>>> 11a7dfe034eaa2ac16d347819fdb552db45d1a69
});