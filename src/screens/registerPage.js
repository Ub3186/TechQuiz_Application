import React, {useState, useEffect} from "react";
import { render } from "react-dom";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Register({ navigation }) {
  
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const BASE_URL = "https://techquiz-api.herokuapp.com"


  const storeEmail = async (email) => {
  try {
    await AsyncStorage.setItem('@email', email)
  } catch (e) {
    alert('Failed to save the email to the storage', e)
  }
}


const signup = async (username, email, password) => {
  try {
    
    const data = { username, email, password};

fetch(`${BASE_URL}/create`, {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  if(data['detail'] !== undefined) 
  alert(data.detail.error)
  else {
        alert('Welcome ' +data.username + '. Your account has been successfully created, you can login now.')
        storeEmail(data.email)
        navigation.push('Login')        
  }
  
})
.catch((error) => {
  console.error('Error:', error);
})


}
finally{

}
}








useEffect(() => {
}, [username,email, password, password2])
  return (
    <View style={styles.regform}>
      <Text style={styles.header}>Registration</Text>

      <TextInput
        style={styles.textinput}
        placeholder="username" placeholderTextColor='white'
        underlineColorAndroid={"transparent"}
        onChangeText={(username) => setUsername(username)}

      />

      <TextInput
        style={styles.textinput} 
        placeholder="email" placeholderTextColor='white'
        underlineColorAndroid={"transparent"}
                  onChangeText={(email) => setEmail(email)}

      />

      <TextInput
        style={styles.textinput}
        placeholder="password" placeholderTextColor='white'
        underlineColorAndroid={"transparent"}
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}

      />

      <TextInput
        style={styles.textinput}
        placeholder="confirm password" placeholderTextColor='white'
        underlineColorAndroid={"transparent"}
        secureTextEntry={true}
        onChangeText={(password2) => setPassword2(password2)}

      />

      <TouchableOpacity style={styles.button}
        
          
          onPress={async () => {
                          if(!username || !email || !password || !password){
                            alert("fill all details")
                            return 
                          }

                          try {
                            await signup(username, email, password)
                          } catch (error) {
                            //alert(error)
                          }
                          
                        }}
        >
          <Text style={styles.btntext}>
            Sign Up
            </Text>
          
        
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  regform: {
    alignSelf: "stretch",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#36485f",
    paddingLeft: 60,
    paddingRight: 60,
  },
  header: {
    fontSize: 24,
    color: "#fff",
    paddingBottom: 10,
    marginBottom: 40,
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

  button: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#59cbbd",
    marginTop: 30,
  },

  btntext: {
    color: "#fff",
    fontWeight: "bold",
  },
});
