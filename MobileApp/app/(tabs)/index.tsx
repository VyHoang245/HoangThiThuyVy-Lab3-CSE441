import { ThemedView } from '@/components/ThemedView';
import { Button } from '@react-navigation/elements';
import axios from 'axios';
import { Image } from 'expo-image';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const filePath = 'https://dummyjson.com/products/';

  useEffect(() => {
    axios.get(filePath)
      .then(response => {
        setData(response.data.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const renderItem = ({ item }) => (
    <View style={styles.smallContainer} key={item.id}>
      <View style={styles.image}>
        <Image source={{ uri: item.images[0] }} style={{ width: 100, height: 100, borderRadius: 10 }}></Image>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Title: {item.title}</Text>
        <Text style={styles.text}>Description: {item.description}</Text>
        <Text style={styles.text}>Price: {item.price}</Text>
        <Text style={styles.discount}>Discount: {item.discountPercentage}</Text>
        <Text style={styles.text}>Rating: {item.rating}</Text>
        <Text style={styles.text}>Stock: {item.stock}</Text>
        <Text style={styles.text}>Brand: {item.brand}</Text>
        <Text style={styles.text}>Category: {item.category}</Text>
        <ThemedView style={{ display: 'flex', gap: 5, flexDirection: "row", marginTop: 10, backgroundColor: '#f0f0f0' }}>
          <Button >DETAIL</Button>
          <Button>ADD</Button>
          <Button>DELETE</Button>
        </ThemedView>
      </View>

    </View>
  );
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </SafeAreaProvider>
    // <DisplayList data={data} id="id" primary="title" secondary="description" third="price"
    //   fourth="discountPercentage" fifth="rating" sixth="stock" seventh="brand" eighth="category" nineth="image"></DisplayList>
  );
}

export const styles = StyleSheet.create({
  container: {
    margin: 15,
    flex: 3,
    flexDirection: 'column',
  },
  smallContainer: {
    padding: 10,
    margin: 10,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
  },
  image: {
    padding: 5,
    flex: 1,
  },
  content: {
    flex: 2,
  },
  title: {
    fontWeight: 'bold',
  },
  text: {
    color: 'gray',
  },
  discount: {
    color: 'green',
  }

});
