import 'react-native-gesture-handler';
import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};

function LoginScreen ({navigation}) {

  const use = 'admin'
  const pass = 'pass'
  const use2 = 'viewer'
  var ex = 35
  var mode = false

  const [Username, setUsername] = useState('Username');

  function userNameFunc(Username){
    setUsername(Username);

  }

  const [Password, setPassword] = useState('Password');

  function passWordFunc(Password){
    setPassword(Password);

  }

  //const [login, setLogin] = useState(false);

  async function check(navigation){
    var url = "https://7n9cvyktjg.execute-api.us-east-1.amazonaws.com/test/users?username="+Username+"&password="+Password
    var url2 = "https://7n9cvyktjg.execute-api.us-east-1.amazonaws.com/test/admin?username="+Username+"&password="+Password
    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' }
    }
    if(await postData(url, requestOptions))
    {
        //the user is viewer
        mode = false
        navigation.navigate('Map',{itemID: Username, adminViewer: mode})
    }
    
    else if(await postData(url2, requestOptions))
    {
        //the user is admin
        mode = true
        navigation.navigate('Map',{itemID: Username, adminViewer: mode})
    }
    else
        alert('Wrong Username and/or Password')     
    
  }
    
  // Example POST method implementation:
 function postData(url, requestOptions) {
 
     var test = fetch(url, requestOptions)
      .then(response => response.json())
      .then(users => {
        if(users.length > 0) 
        {
            return true
        }
        else
        {
            return false
        }
    })
 //console.log(test)
 return test
}
  //const [email, setEmail] = useState("");
  /*

  if (username == Admin){
    mode = true
    return true
  }
  else if (username == Viewer){
    mode = false
    return true
  }
  else {
    return false 
  }

  */
  //const [password, setPass] = useState(""); style={styles.logo}

    return (
      <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/Air_Force_logo.png")} />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="white"
          onChangeText={(Username) => setUsername(Username)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={(Password) => setPassword(Password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button} 
        onPress = {() =>  navigation.navigate('Map',{itemID: Username, adminViewer: mode}) } 
        >Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}
      onPress = { () => check(navigation) } 
      >
        <Text style={styles.inputText} >
          LOGIN
        </Text>
      </TouchableOpacity>
    </View>
                  
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "gray",
      alignItems: "center",
      justifyContent: "center",
    },
  
    inputView: {
      backgroundColor: "#FF0000",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
  
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      color: 'white'
    },
    rightHead:{
      color: '#b31942',
      fontSize: 18,
      paddingRight: 10
    },
  
    forgot_button: {
      height: 30,
      marginBottom: 30,
      color: 'white'
    },
  
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#000080",
    },
    inputText: {
      color: 'white'
    },
    logo: {
      borderColor: "blue",
      borderWidth: 0,
      flex: 0.3,
      width: 200,
      height: 200,
      marginBottom: 10
      //resizeMode: 'contain',
    },
    
  })

export default LoginScreen ;