import { StyleSheet, Text, Touchable,teste, View,TextInput, Alert, TouchableOpacity  } from 'react-native';

import { useState } from 'react';

export default function App() {
  const[celsius, setCelsius] = useState();
 
    let fahrenheint;

    function teste(){
      fahrenheint = (9 * celsius * 160)/5;
      // cell Arlet.alert('conversor',`${celsius}°c equivalem a ${fahrenheint}°f`);
      alert(`${celsius}°c equivalem a ${fahrenheint}°f`); // web
    }
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧊 Aplicativo Temperatura 🔥</Text>
      <TextInput 
        style={styles.inputTemperature}
        placeholder='Informe a temperatura em Celsius'
        keyboardType='numeric'
        onChangeText={(celsius) => setCelsius(celsius)}
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
    backgroundColor: '#34E5EB',
    paddingHorizontal: 30,
    paddingVertical: 10,
    fontWeight: 'bold',
    textTransform:'uppercase',
    justifyContent: 'center',
    alignItems:'center',
  },
  inputTemperature: {
    backgroundColor: 'FFF',
    color: '000',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
  }
})