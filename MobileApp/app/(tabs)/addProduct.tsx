import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AddProductScreen() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState('');
    const [rating, setRating] = useState('');
    const [stock, setStock] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [images, setImages] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await axios.post('https://dummyjson.com/products/add', {
                title,
                description,
                price: parseFloat(price),
                discountPercentage: parseFloat(discountPercentage),
                rating: parseFloat(rating),
                stock: parseInt(stock),
                brand,
                category,
                images: images
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log(response.data);
            Alert.alert('Add successful');
        } catch (error) {
            console.error('Add failed:', error);
            Alert.alert('Add failed');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.heading}>Add a Product</Text>

            <Input label="Title" value={title} onChangeText={setTitle} />
            <Input label="Description" value={description} onChangeText={setDescription} />
            <Input label="Price" value={price} onChangeText={setPrice} keyboardType="numeric" />
            <Input label="Discount Percentage" value={discountPercentage} onChangeText={setDiscountPercentage} keyboardType="numeric" />
            <Input label="Rating" value={rating} onChangeText={setRating} keyboardType="numeric" />
            <Input label="Stock" value={stock} onChangeText={setStock} keyboardType="numeric" />
            <Input label="Brand" value={brand} onChangeText={setBrand} />
            <Input label="Category" value={category} onChangeText={setCategory} />
            <Input label="Images" value={images} onChangeText={setImages} placeholder="Enter image URLs, comma-separated" />

            <Button title="SUBMIT" onPress={handleSubmit} color="#007bff" />
        </ScrollView>
    );
}

function Input({ label, ...props }) {
    return (
        <View style={styles.inputGroup}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} {...props} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 50,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007bff',
        marginBottom: 20,
    },
    inputGroup: {
        marginBottom: 15,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
    },
});
