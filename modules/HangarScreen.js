import 'react-native-gesture-handler';
import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, TextInput,Text,TouchableOpacity, View } from 'react-native';

function HangarScreen ({route, navigation}) {

    const {itemID, adminViewer} = route.params;

    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity style={{}} 
          onPress = {() =>  navigation.navigate('Sign-in') } >
          <Text style={styles.rightHead} 
          >Log Out</Text>
        </TouchableOpacity>
        ),
      });
    }, [navigation]);

    const [HangarID, setHangarID] = useState(HangarID);

    function userHangar(HangarID){
      setUsername(HangarID);
  
    }

  //var adminViewer = true
  var place = 'true'

    return (
    
      <View style = {styles.overall}>
  
        <View style={styles.info}>
        <Text style={styles.inputText} >Hangar Identification: {}</Text>
        <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer}> 
        </TextInput>
        </View>
  
        <View style={styles.info}>
          <Text style={styles.inputText}>If Usable: </Text>
          <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer}> 
          </TextInput>
        </View>
  
        <View style={styles.info}>
          <Text style={styles.inputText}>Number of Aircraft: </Text>
          <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer}> 
          </TextInput>
        </View>
  
        <View style={styles.info}>
          <Text style={styles.inputText}>Aircraft under Maintenance: </Text>
          <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer}> 
          </TextInput>
        </View>
  
        <View style={styles.info}>
          <Text style={styles.inputText}>Latest Inspection Date </Text>
          <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer}> 
          </TextInput>
        </View>
  
        <View style={styles.info}>
          <Text style={styles.inputText}>Lead Maintainer: </Text>
          <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer}> 
          </TextInput>
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
      marginLeft: '30%'
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
    input : {
      width: 200,
      borderColor: 'grey',
      borderBottomColor: 'black'
    },
    rightHead:{
      color: '#b31942',
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

export default HangarScreen;