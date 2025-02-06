import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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