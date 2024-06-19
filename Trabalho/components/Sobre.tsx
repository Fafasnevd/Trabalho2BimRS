import React from 'react';
import {Text,Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import Home from './Home';
import Imagem from "../assets/img1.png";
import Imagem2 from "../assets/img2.png";

export default function App() {
    const [page, setPage] = React.useState('sobre');

    const renderPage = () => {
        if (page === 'sobre') {
            return(
                <View style={styles.container}>
                    <Text style={styles.title}>
                        <Image source={Imagem} style={styles.Imagem} />
                    </Text>
                    <Text style={styles.title}>VOCÊ ESTA LOCALIZADO AQUI:</Text>

                    <Text style={styles.title}>
                        <Image source={Imagem2} style={styles.Imagem2} />
                    </Text>

                    <Text style={styles.title}>LONGITUDE: XXXXX</Text>

                    <Text style={styles.title}> LATITUDE: XXXXX</Text>

                    <TouchableOpacity style={styles.button} onPress={() => setPage('home')}>
                        <Text style={styles.buttonText}>Clique aqui</Text>
                    </TouchableOpacity>
                </View>
            );
        }else if (page === 'home') {
            return <Home />;
        }
    };

    return <View style={styles.container}>{renderPage()}</View>;
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        fontFamily: 'karantina',
        color: '#3163E3',
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    Imagem: {
        width: 100,
        height: 100,
    },
    Imagem2: {
        width: 300,
        height: 300,
    }
  });