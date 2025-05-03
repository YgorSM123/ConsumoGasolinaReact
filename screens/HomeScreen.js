import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [km, setKm] = useState('');
  const [litros, setLitros] = useState('');


  const handleCalcular = () => {
    const media = km / litros;
    let classificacao = '';

    if (media > 12) classificacao = 'A';
    else if (media > 10) classificacao = 'B';
    else if (media > 8) classificacao = 'C';
    else if (media > 4) classificacao = 'D';
    else classificacao = 'E';

    navigation.navigate('Resultado', {
      media: media.toFixed(2),
      classificacao
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Quilometragem percorrida (km):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={km}
        onChangeText={setKm}
      />
      <Text style={styles.label}>Litros de gasolina consumidos:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={litros}
        onChangeText={setLitros}
      />
      <Button title="Calcular" onPress={handleCalcular} color='#252994'/>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,                    
      justifyContent: 'center',   
      alignItems: 'center',       
      padding: 20,
      backgroundColor: '#939494'
    },
    label: { 
      marginBottom: 5, 
      fontSize: 20,
      fontWeight: 'bold',
      color: '#00008B'
    },
    input: {
      height: 40,
      borderColor: '000000',
      borderWidth: 1,
      marginBottom: 15,
      paddingHorizontal: 10,
      width: '100%',   
      color: '000000'
    }
  });