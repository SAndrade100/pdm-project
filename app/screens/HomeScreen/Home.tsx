import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const products = [
  { id: '1', name: 'Carme de coelho', description: 'Carme de coelho de brandido', price: 'R$ 30,00' },
  { id: '2', name: 'Carme de coelho', description: 'Carme de coelho de brandido', price: 'R$ 30,00' },
  { id: '3', name: 'Carme de coelho', description: 'Carme de coelho de brandido', price: 'R$ 30,00' },
  { id: '4', name: 'Carme de coelho', description: 'Carme de coelho de brandido', price: 'R$ 30,00' },
];

const HomeScreen = ({  }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Storage.io</Text>
      <Text style={styles.subtitle}>Pesquisa produtos por nome ou categoria</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </View>
        )}
      />

      <View style={styles.navigation}>
        <TouchableOpacity style={styles.navButton}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text>Ventas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text>Clientes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
  },
  productItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
  },
  productPrice: {
    fontSize: 16,
    color: '#333',
    marginTop: 4,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  navButton: {
    padding: 10,
  },
});

export default HomeScreen;