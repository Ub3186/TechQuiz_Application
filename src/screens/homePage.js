import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Home({navigation}){

    return(
        <View style={styles.container}>

        <View style={styles.box}>
            <View style={styles.inner}>
                <TouchableOpacity onPress={()=>navigation.navigate('QuizLevel', {language: 'python'})}><FontAwesome5 name={'python'} size={100} color="black" />
                    <Text >Python-Quiz</Text></TouchableOpacity>
            </View>
        </View>

        <View style={styles.box}>
            <View style={styles.inner}>
                <TouchableOpacity alignItems='right' style={styles.iconstyle} onPress={()=>navigation.navigate('QuizLevel', {language: 'java'})}><FontAwesome5 name={'java'} size={100} color="black" />
                <Text>Java-Quiz</Text></TouchableOpacity>
            </View>
        </View>
        
        <View style={styles.box}>
            <View style={styles.inner}>
                <TouchableOpacity alignItems='right' style={styles.iconstyle} onPress={()=>navigation.navigate('QuizLevel', {language: 'c'})}><FontAwesome5 name={'cuttlefish'} size={100} color="black" />
                <Text style={{ textAlign: 'center' }}>C-Quiz</Text></TouchableOpacity>
            </View>
        </View>

        <View style={styles.box}>
            <View style={styles.inner}>
                <TouchableOpacity alignItems='right' style={styles.iconstyle} onPress={()=>navigation.navigate('QuizLevel', {language: 'cpp'})}><FontAwesome5 name={'cuttlefish'} size={100} color="black" />
                <Text style={{ textAlign: 'center' }}>C++-Quiz</Text></TouchableOpacity>
            </View>
        </View>

    </View>     
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#36485f',
        padding: 2,
        flexDirection: 'column',
        flexWrap:'wrap',
        
        
    },
    box: {
        width: '80%',
        height: '20%',
        padding: 1,
        marginLeft: 40,
        marginTop: 30,
        opacity: 0.7

    },
    inner: {
        flex: 2,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 25
    }
});
