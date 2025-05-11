import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

const Product_Search = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');

    const searchProduct = () => {
        let filePath = 'https://dummyjson.com/products';
        if (value !== '') {
            filePath = 'https://dummyjson.com/products/search?q=' + value;
        }

        fetch(filePath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((d) => {
                setData(d.products);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    const renderItem = ({ item }) => (
        <Card style={styles.card}>
            <Card.Cover source={{ uri: item.thumbnail }} />
            <Card.Content>
                <Text style={styles.title}>Title: {item.title}</Text>
                <Text>Description: {item.description}</Text>
                <Text>Price: ${item.price}</Text>
                <Text>Discount: {item.discountPercentage}%</Text>
                <Text>Rating: {item.rating} stars</Text>
                <Text>Stock: {item.stock} units</Text>
                <Text>Brand: {item.brand}</Text>
                <Text>Category: {item.category}</Text>
            </Card.Content>
        </Card>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Search Products</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter product name"
                value={value}
                onChangeText={setValue}
            />
            <TouchableOpacity style={styles.button} onPress={searchProduct}>
                <Text style={styles.buttonText}>SEARCH</Text>
            </TouchableOpacity>

            <Text style={styles.detailHeader}>Product Detail</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default Product_Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    header: {
        fontSize: 20,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#2196F3',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    detailHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    card: {
        marginBottom: 15,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});
