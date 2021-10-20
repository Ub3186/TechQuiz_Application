import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';

export default function Privacy({ navigation }) {
    return (
        <View style={styles.container}>

            <View >
                <Text style={styles.header} >Privacy-policy</Text>
            </View>
            <View >
            <Text style={styles.cover}>
            For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to Learn & Play Quiz collecting your basic information and connection. The information that I request will be retained on your device and is not collected by me in any way.
            The app does not use third party services that may collect information used to identify you. Hence the data provided by the user is safe and secure and only be used for the means of Tech-quiz functionalities. I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it.
            </Text>
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#36485f',
        color: '#fff',
        padding: 5,
        padding: 40,
        position: 'absolute',
        flexDirection: 'column'

    },
    header: {
        position: 'absolute',
        top: 50,
        left: 90,
        fontSize: 30,
        color: '#fff',
    },
    cover: {
        textAlign:'justify',
        paddingTop: 150,
        lineHeight: 30,
        fontSize:20,
        color:'#fff'
    }
});