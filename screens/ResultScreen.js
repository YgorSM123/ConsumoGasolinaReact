import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ResultScreen({ route }) {
    const { media, classificacao } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.result}>Média de consumo: {media} Km/L</Text>
      <Text style={styles.classification}>Classificação: {classificacao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1,
     padding: 20,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#939494'},

  result: { fontSize: 26,
      marginBottom: 10,
      fontWeight: 'bold',
      color: '#00008B'},

  classification: { fontSize: 26,
     fontWeight: 'bold',
     color: '#00008B' }
});