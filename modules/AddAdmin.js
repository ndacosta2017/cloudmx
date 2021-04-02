import 'react-native-gesture-handler';
import * as React from 'react';
import {  useEffect,useLayoutEffect, useState } from 'react';
import { StyleSheet, TextInput,ActivityIndicator,Text,TouchableOpacity, View } from 'react-native';

function AddAdminScreen ({route, navigation}) {

    const {itemID, adminViewer} = route.params;

    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
        <TouchableOpacity style={{}} 
          onPress = {() =>  navigation.navigate('Sign-in') } >
          <Text style={styles.rightHead}>
            Log Out
          </Text>
        </TouchableOpacity>
        ),
      });
    }, [navigation]);

  var place = ' Update Data'
  const [Username, setUsername] = useState('Username');
  var check = '';
  function userNameFunc(Username){
    setUsername(Username);

  }

  const [Password, setPassword] = useState('Password');

  function passWordFunc(Password){
    setPassword(Password);

  }
  

 
    function send(){
      if (Username.length > 0 && Password.length > 0){
        //update this field of data[i]
        console.log('User:', Username)
        var json = {};
        json[0] = [];
        json.user = Username;
        json.pass = Password;
        var url = "https://7n9cvyktjg.execute-api.us-east-1.amazonaws.com/test/admin/create"
        const requestOptions = 
        {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(json)
        }
        fetch(url, requestOptions)
        console.log('Pass:', Password)
      }
    }
  
   // console.log('\ndata: ',data)

    var status = 'hwllo'

    //var i = hangarID

    var empty = ' '

    const air = ['hello ','world']

    return (
    
      <View style = {styles.overall}>
  
        <View style={styles.info}>
        <View style={styles.display}>
        <Text style={styles.inputText}>
              Add Admin Name: 
            </Text>
            <Text style={styles.inputText}>
              {empty}
            </Text>
          </View>
        <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer} onChangeText={(Username) => setUsername(Username)}> 
        </TextInput>
        </View>
  
        <View style={styles.info}>
        <View style={styles.display}>
          <Text style={styles.inputText}>Add Temporary Admin Password: </Text>
        </View>
          <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer} onChangeText={(Password) => setPassword(Password)}> 
          </TextInput>
        </View>

        <View style={styles.info}>
         <View style={styles.basicRow}>
          <Text style={styles.history} onPress={(adminViewer) ? 
            () => send() : 
            () => alert('You are not an Administrator. You can not update data') }>
             Update
          </Text>
          </View>
        </View>
  
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
    basicRow:{
      flex:1,
      flexDirection: 'row'
    },
    image: {
      marginBottom: 40,
    },
    overall:{
      flex: 1, 
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      backgroundColor: '#0a3161',
      padding: 10
    },
  
    inputView: {
      backgroundColor: "#FF0000",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },

    history:{
      color: 'white',
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      marginLeft: '15%'

    },
  
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      color: 'white'
    },
    titleText: {
      fontSize: 60,
    },
  
    forgot_button: {
      height: 30,
      marginBottom: 30,
      color: 'white'
    },
    infoButton:{
      justifyContent: 'center', 
      alignItems: 'center',
      borderRadius: 20, 
      width: 170, 
      height: 70,
      backgroundColor: 'blue'
    },
    hangarInfo: {
      justifyContent: 'center',
      alignItems: 'center',
      padding:20,
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
    usePass: {
     padding:10,
     flexDirection: 'row'
    },
    hangar : {
     flex: .5,
     justifyContent: 'center',
     backgroundColor: 'red', 
     height: 600,
     borderRadius: 40,
     margin: 30

    },
    bigBlue : {
      justifyContent: 'center',
      alignItems: 'center', 
      borderRadius: 20, 
      width: 70, 
      height: 70, 
      backgroundColor: 'blue' 

    },
    infoField:{
      flex: 0.8,
      fontSize: 30
    },
    display:{
      flexDirection: 'row',
      alignItems: "center",
      justifyContent: "center",
    },
    input : {
      width: 200,
      borderColor: 'grey',
      borderBottomColor: 'black'
    },
    rightHead:{
      color: '#fff',
      fontSize: 20,
      paddingRight: 10,
      fontWeight: 'bold'
    },
    info: {
      
      backgroundColor: "#b31942",
      borderRadius: 30,
      width: "100%",
      height: 45,
      marginBottom: 9,
      flex: 0.6,
      flexDirection: 'row',
      padding: 10,
      borderTopColor: 'black',
      
    },
    
  })

export default AddAdminScreen;