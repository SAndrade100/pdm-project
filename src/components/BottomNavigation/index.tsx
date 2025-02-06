import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './style';

export const BottomNavigation: React.FC = () => (
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
);