import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { Linking } from 'react-native';

export default function contactUs({ navigation }) {
    return (
        <View style={styles.container}>

            <View >
                <Text style={styles.header} >Contact-Us</Text>
            </View>
            <View >
                <Text style={styles.cover}>Hello User, Feel free to Contact us for help, consultation or any other quiz related query.
                </Text>
                <TouchableOpacity onPress={() => Linking.openURL('mailto:techquizapp03@gmail.com')}>
                    <Text style={styles.button}>techquizapp03@gmail.com</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#36485f',
        padding: 40,
        position: 'absolute',
        flexDirection: 'column'

    },
    header: {
        position: 'absolute',
        top: 50,
        left: 100,
        fontSize: 30,
        color: "white"
    },
    cover: {
        textAlign: 'center',
        paddingTop: 150,
        paddingBottom: 20,
        fontSize: 20,
        lineHeight: 35,
        color: 'white'
    },
    button: {
        textTransform: "lowercase",
        color: "skyblue",
        backgroundColor: "black",
        padding: 20,
        fontSize: 20,
        textAlign: "center"
    }
});