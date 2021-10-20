import React from 'react';
import { } from 'react-native';
import { View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Setting({navigation}){

    return(
        <View style={styles.container}>
            <View style={styles.sett}>
                <FontAwesome5 name={'cog'} size={80} color="lightblue" style={{ position:'relative', top: 65}} />
            </View>
            
            <View style={styles.contain}>
                <TouchableOpacity style={styles.Button}>
                    <View >
                        <Text onPress={() => navigation.navigate("Privacy")} style={styles.btntext}>Privacy policy</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={styles.Button}>
                    <View >
                        <Text onPress={() => navigation.navigate("About")} style={styles.btntext}>About</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={styles.Button}>
                    <View >
                        <Text onPress={() => navigation.navigate("contactUs")} style={styles.btntext}>Contact Us</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles=StyleSheet.create({
    container: {
        backgroundColor: '#36485f',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    Button: {
        alignItems:'center',
        padding:20,
        backgroundColor:'#fff',
        marginTop:5,
        width:300,
    },
    sett: {
        flexDirection: 'row',
        flex:1
    },
    btntext:{
        color:'black',
        fontSize: 16
    },
    contain:{
        flex:3,
    }
      
});