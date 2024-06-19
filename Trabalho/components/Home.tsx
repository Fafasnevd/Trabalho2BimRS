import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Sobre from './Sobre';
import Imagem from "../assets/img1.png";

export default function App() {
    const [page, setPage] = React.useState('home');

    const renderPage = () => {
        if(page === 'home') {
            return(
                <View style={styles.container}>
                    <Text style={styles.title1}>TOCLOG</Text>
                    <Text style={styles.title}>
                        <Image source={Imagem} />
                    </Text>
                    <Text style={styles.title2}>SE LOCALIZE :</Text>
                    <TouchableOpacity style={styles.button} onPress={() => setPage('sobre')}>
                    <Text style={styles.buttonText}>Clique Aqui</Text>
                    </TouchableOpacity>
                </View>
            )
        }else if(page === 'sobre') {
            return <Sobre />;
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
    title1: {
        fontSize: 80,
        fontWeight: 'bold',
        fontFamily: 'karantina',
        color: '#3163E3',
        marginBottom: 20,
    },
    title2: {
        fontSize: 50,
        fontWeight: 'bold',
        fontFamily: 'karantina',
        color: '#3163E3',
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
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
  });
  