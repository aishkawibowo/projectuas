import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Alert, Image } from 'react-native';
import axios from 'axios';
import logo from './assets/images/logo.png';
import image1 from './assets/images/website-perusahaan-company-profile-web-javawebmedia1.jpg';
import image2 from './assets/images/instagram-kursus-statistik-javawebmedia.png';
import image3 from './assets/images/web-development-javawebmedia11.png';
import image4 from './assets/images/logo-persegi-panjang.png';
import image5 from './assets/images/Kursus_Desain_Grafis.jpg';
import image6 from './assets/images/web-application-pendaftaran-online-javawebmedia.jpg';
import image7 from './assets/images/web-development-javawebmedia1.png';

const images = {
  'website-perusahaan-company-profile-web-javawebmedia1.jpg': image1,
  'instagram-kursus-statistik-javawebmedia.png': image2,
  'web-development-javawebmedia11.png': image3,
  'logo-persegi-panjang.png': image4,
  'Kursus_Desain_Grafis.jpg': image5,
  'web-application-pendaftaran-online-javawebmedia.jpg': image6,
  'web-development-javawebmedia1.png': image7,
};

// Interface untuk tipe data item
interface Item {
  id_berita: number;
  judul_berita: string;
  jenis_berita: string;
  ringkasan: string;
  keywords: string | string[];
  gambar: string;
}

const App = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get<Item[]>('http://192.168.1.8:5000');
      console.log('Data fetched from server:', response.data); // Log data untuk debugging
      setItems(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert('Error', 'Gagal mengambil data dari server.');
      console.error('Error fetching items', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={images[item.gambar]} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.itemTitle}>{item.judul_berita}</Text>
        <Text style={styles.category}><Text style={styles.boldText}>Category:</Text> {item.jenis_berita}</Text>
        <Text style={styles.summary}><Text style={styles.boldText}>Summary:</Text> {item.ringkasan}</Text>
        <Text style={styles.keywords}><Text style={styles.boldText}>Keywords:</Text> {item.keywords}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.headerTitle}>Berita Terkini di Indonesia</Text>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={item => item.id_berita.toString()}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 40,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  list: {
    paddingBottom: 20,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3, // For Android
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  category: {
    fontSize: 14,
    color: '#777',
    marginBottom: 3,
  },
  summary: {
    fontSize: 14,
    color: '#555',
    marginBottom: 3,
  },
  keywords: {
    fontSize: 14,
    color: '#999',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#333',
  },
});

export default App;
