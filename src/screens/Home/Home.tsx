import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { BottomNavigation } from '@/src/components/BottomNavigation';
import { ProductItem } from '@/src/components/ProductItem';

import { styles } from './style';

type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
};

const products: Product[] = [
  { id: '1', name: 'Carme de coelho', description: 'Carme de coelho de brandido', price: 'R$ 30,00' },
  { id: '2', name: 'Carme de coelho', description: 'Carme de coelho de brandido', price: 'R$ 30,00' },
  { id: '3', name: 'Carme de coelho', description: 'Carme de coelho de brandido', price: 'R$ 30,00' },
  { id: '4', name: 'Carme de coelho', description: 'Carme de coelho de brandido', price: 'R$ 30,00' },
];

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Storage.io</Text>
      <Text style={styles.subtitle}>Pesquisa produtos por nome ou categoria</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem product={item} />}
      />

      <BottomNavigation />
    </View>
  );
};

