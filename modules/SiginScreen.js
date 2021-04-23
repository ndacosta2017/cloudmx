import 'react-native-gesture-handler';
import * as React from 'react';
import { useState, useEffect,useLayoutEffect, } from 'react';
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
  var hangID = 0
  var airID = 1

  const [Username, setUsername] = useState('Username');

  function userNameFunc(Username){
    setUsername(Username);

  }

  const [Password, setPassword] = useState('Password');

  function passWordFunc(Password){
    setPassword(Password);

  }

  const [lockOut,setLockOut] = useState(true)

  const [wrongCredentials,setWrongCredentials] = useState(5)

  useEffect(() => {
    setUsername('')
    setPassword('')

  }, []);

  const empty = () => {
    setUsername('')
    setPassword('')
  }

  //const [login, setLogin] = useState(false);

  async function check(navigation){
    var data = {};
    data[0] = [];
    data.user = Username;
    data.pass = Password;
    if ((wrongCredentials == 0) || (lockOut == false)){
      setLockOut(false)
      alert('You have been locked out of the app for repeated failed login attempts. Please alert an admin for assistance or click the link above if you have forgotten your password.')
    }

    if (wrongCredentials > 0){
    var url = "https://7n9cvyktjg.execute-api.us-east-1.amazonaws.com/test/users"
    var url2 = "https://7n9cvyktjg.execute-api.us-east-1.amazonaws.com/test/admin"
    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }
    if(await postData(url, requestOptions))
    {
        //the user is viewer
        setWrongCredentials(5)
        setUsername('')
        setPassword('')
        mode = false
        navigation.navigate('Map',{itemID: Username,itemPass:Password, adminViewer: mode,aicraftID: airID,hangarID: hangID})
    }
    
    else if(await postData(url2, requestOptions))
    {
        //the user is admin
        setWrongCredentials(5)
        setUsername('')
        setPassword('')
        mode = true
        navigation.navigate('Map',{itemID: Username,itemPass:Password, adminViewer: mode,aircraftID: airID,hangarID: hangID})
    }
    else{
      setWrongCredentials(wrongCredentials - 1)
      if (wrongCredentials > 1){
        alert('Wrong Username and/or Password. You have '+wrongCredentials+' more tries.')
      }
      if (wrongCredentials ==1){
        alert('Wrong Username and/or Password. You have '+wrongCredentials+' more try.')
      }
     }
             //
    }

  }
    
  // Example POST method implementation:
 function postData(url, requestOptions) {
 
     var test = fetch(url, requestOptions)
      .then(response => response.json())
      .then(users => {
       // console.log(users)
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



        <TouchableOpacity>
        <Text style={styles.forgot_button} 
        onPress = {() =>  navigation.navigate('Password') } >
          Forgot Password?
        </Text>
      </TouchableOpacity>




  */
  //const [password, setPass] = useState(""); style={styles.logo}

    return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/Air_Force_logo.png")} />
      
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          value={Username}
          style={styles.TextInput}
          editable={lockOut}
          placeholder="Username"
          placeholderTextColor="white"
          onChangeText={(Username) => setUsername(Username)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          value={Password}
          style={styles.TextInput}
          editable={lockOut}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={(Password) => setPassword(Password)}
        />
      </View>



      <TouchableOpacity style={styles.loginBtn}
      onPress = { () => check(navigation) } >
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
      alignSelf:'center',
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      color: 'white'
    },
    rightHead:{
      color: '#fff',
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
      marginBottom: 20
      //resizeMode: 'contain',
    },
    
  })

export default LoginScreen ;