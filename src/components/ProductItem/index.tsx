import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

type Product = {
    id: string;
    name: string;
    description: string;
    price: string;
};

type ProductItemProps = {
    product: Product;
};

export const ProductItem: React.FC<ProductItemProps> = ({ product }) => (
    <View style={styles.productItem}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <Text style={styles.productPrice}>{product.price}</Text>
    </View>
);