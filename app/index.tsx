//import { Text, View } from "react-native";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { styles } from './styles/homeStyles';

const products = [
  { id: '1', name: 'Carme de coelho', description: 'Carme de coelho de brandido', price: 'R$ 30,00' },
  { id: '2', name: 'Carme de coelho', description: 'Carme de coelho de brandido', price: 'R$ 30,00' },
  { id: '3', name: 'Carme de coelho', description: 'Carme de coelho de brandido', price: 'R$ 30,00' },
  { id: '4', name: 'Carme de coelho', description: 'Carme de coelho de brandido', price: 'R$ 30,00' },
];

export default function Index() {
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