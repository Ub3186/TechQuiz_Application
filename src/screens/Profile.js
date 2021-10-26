import React, {useEffect, useState} from "react";
import { render } from "react-dom";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from '@react-native-async-storage/async-storage'




export default function Profile({ navigation }) {

  const STORAGE_KEY = '@save_token'
  const [token, setToken] = useState('')

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const BASE_URL = "https://techquiz-api.herokuapp.com"


const readData = async () => {
  try {
    const token = await AsyncStorage.getItem(STORAGE_KEY)

    if (token !== null) {
      setToken(token)
    }

  } catch (e) {
    alert('Failed to fetch the data from storage')
  }
}

useEffect(()=> {
    readData();
},[])

useEffect(() => {
fetch(
      `${BASE_URL}/user/me`,
      {   
          method: 'GET',
          headers: {"Authorization" : `Bearer ${token}`}
      }
    )
      .then((response) => response.json())
      .then((json) => {
        setUsername(json.username)
        setEmail(json.email)
      })
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error('error in friends',error);
      })
      .finally(()=> {});


},[token])

const updateProfile = () => {

  const data = { username, email, password};
      fetch(
      `${BASE_URL}/user/me`,
      {   
          method: 'PATCH',
          headers: {
            'Content-Type': 'Application/json',
            'Authorization' : `Bearer ${token}`
          },
          body: JSON.stringify(data)

      }
    )
      .then((response) => response.json())
      .then((json) => {
        if(!json.detail){
          setUsername(json.username)
          setEmail(json.email)
          return alert('Profile Updated Successfully')
        }
        throw Error(json.detail.error)
      })
      .catch((error) => {
        alert(error);
        console.error('error in friends',error);
      })
      .finally(()=> {});

}

const deleteProfile = () => {
      fetch(
      `${BASE_URL}/user/me`,
      {   
          method: 'DELETE',
          headers: {"Authorization" : `Bearer ${token}`}
      }
    )
      .then((response) => response.json())
      .then((json) => {
        navigation.navigate('Login')
      })
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error('error in friends',error);

      })
      .finally(()=> {});

}
  return (
    <View style={styles.profileform}>
      <ScrollView>
      <View style={styles.prof}>
        <View>
          <FontAwesome5
            name={"user-circle"}
            size={100}
            
          />
        </View>
        <Text style={styles.header}>Profile</Text>
      </View>

      <View style={styles.info}>
        <Text style={{color: 'white'}}>Name</Text>
        <TextInput style={styles.textinput}
        
        underlineColorAndroid={"transparent"} 
        onChangeText={(text) => setUsername(text)}
        value ={username}/>

        <Text style={{color: 'white'}}>E-mail</Text>
        <TextInput
          style={styles.textinput}
          
          underlineColorAndroid={"transparent"}
          onChangeText={(text) => setEmail(text)}
          value ={email}/>

        <Text style={{color: 'white'}}>Password</Text>
        <TextInput
          style={styles.textinput}
          
          underlineColorAndroid={"transparent"}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value ={password}/>
      </View>

      <View style={styles.bottom}>
        
        <TouchableOpacity style={styles.updateButton}
          onPress={()=> updateProfile()}
        >
          <Text style={styles.buttonText}>Update-Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton}
          onPress={()=> deleteProfile()}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  profileform: {
    alignSelf: "stretch",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#36485f",
    paddingLeft: 60,
    paddingRight: 60,
  },
  header: {
    fontSize: 30,
    color: "#fff",
    paddingBottom: 10,
    borderBottomColor: "#199187",
    borderBottomWidth: 1,
    
  },

  textinput: {
    alignSelf: "stretch",
    height: 40,
    marginBottom: 30,
    color: "#fff",
    borderBottomColor: "#f8f8f8",
    borderBottomWidth: 1,
  },

  updateButton: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#39A388",
    marginTop: 30,
    borderRadius: 25,
  },

  deleteButton: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ff4444",
    marginTop: 30,
    borderRadius: 25,
    width: 100,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  bottom: {
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 50,
  },
  info: {
    flex: 2,
    marginTop: 50,
    
  },
  prof: {
    alignItems: "center",
    flexDirection: 'column',
  },
});
