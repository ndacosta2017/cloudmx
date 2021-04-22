import 'react-native-gesture-handler';
import * as React from 'react';
import {  useEffect,useLayoutEffect, useState } from 'react';
import { StyleSheet, TextInput,KeyboardAvoidingView,ActivityIndicator,Text,TouchableOpacity, View } from 'react-native';

function HangarScreen ({route, navigation}) {

    const {itemID, adminViewer,aircraftID,hangarID} = route.params;

    React.useLayoutEffect(() => {
      navigation.setOptions({title: 'Building'},{
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

    const [HangarID, setHangarID] = useState(HangarID);

    function userHangar(HangarID){
      setUsername(HangarID);
  
    }

    var place = ' Update Data'

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    function reload(){
      fetch('https://7n9cvyktjg.execute-api.us-east-1.amazonaws.com/test/hangar',requestOptions)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  
    }

    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' }
  }
  
  useEffect(() => {
      fetch('https://7n9cvyktjg.execute-api.us-east-1.amazonaws.com/test/hangar',requestOptions)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    const [Status, setStatus] = useState('');

    var stat = ''

    const [BuildingName, setBuildingName] = useState('');
    const [BuildingStatus, setBuildingStatus] = useState('');

    function addSerial(num){
      stat = num
    }


    function serial_func(Serial){
      setSerial(Serial);
  
    }

    async function send(i){
       var json = {};
       json[0] = [];
       json.name = data[i].building_Name;
       json.status = Status;
       console.log(json)
    const sendOptions = 
        {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(json)
        }
    await fetch('https://7n9cvyktjg.execute-api.us-east-1.amazonaws.com/test/hangar/update', sendOptions)
    alert("Update Complete")

      reload()
    }
  
    console.log('\ndata: ',data)

    var status = 'hwllo'

    var i = hangarID

    var empty = '  '

    const air = ['hello ','world']

    return (
    
      <View style = {styles.overall} >
  
        <View style={styles.info}>
        <View style={styles.display}>
        <Text style={styles.inputText}>
              Building Identification: 
            </Text>
            <Text style={styles.inputText}>
              {empty}
            </Text>
            {isLoading ? <ActivityIndicator/> : (
            <Text style={styles.inputText}>
              {data[i].building_Name}
              {addSerial(data[i].building_Name)}
            </Text>
            )}
         </View>
        </View>
  
        <View style={styles.info}>
        <View style={styles.display}>
        <Text style={styles.inputText}>
              Building Status: 
            </Text>
            <Text style={styles.inputText}>
              {empty}
            </Text>
            {isLoading ? <ActivityIndicator/> : (
            <Text style={styles.inputText}>
              {data[i].building_status}
            </Text>
            )}
            <Text style={styles.inputText}>
              {empty}
            </Text>
          </View>
        <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer} onChangeText={(Status) => setStatus(Status)}> 
        </TextInput>
        </View>
  
        <View style={styles.info}>
        <View style={styles.display}>
          <Text style={styles.inputText}>Aircraft Serial: </Text>
        </View>
          <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer}> 
          </TextInput>
        </View>
  
  
        <View style={styles.info}>
        <View style={styles.display}>
          <Text style={styles.inputText}>Latest Inspection Date </Text>
        </View>
          <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer}> 
          </TextInput>
        </View>
  
        <View style={styles.info}>
        <View style={styles.display}>
          <Text style={styles.inputText}>Lead Maintainer: </Text>
        </View>
          <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer}> 
          </TextInput>
        </View>

        <View style={styles.info}>
         <View style={styles.basicRow}>
          <Text style={styles.history} onPress={() => 
           navigation.navigate('History',{itemID, adminViewer,aircraftID,hangarID})}>
             Maintenance History
          </Text>
          <Text style={styles.history} onPress={(adminViewer) ? 
            () =>  {send(i)}: 
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
     // backgroundColor: '#0a3161',
      backgroundColor: 'gray',
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
      color: '#000',
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
      color: '#000'
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
      backgroundColor: '#FFF',
      borderColor: '#b31942',
      borderWidth: 5,
    //  backgroundColor: "#b31942",
      borderRadius: 30,
      width: "100%",
      height: 45,
      marginBottom: 9,
      flex: 0.6,
      flexDirection: 'row',
      padding: 10,
      //borderTopColor: 'black',  
    },
    infoBlue: {
      backgroundColor: '#FFF',
      borderColor: 'blue',
      borderWidth: 5,
    //  backgroundColor: "#b31942",
      borderRadius: 30,
      width: "100%",
      height: 45,
      marginBottom: 9,
      flex: 0.6,
      flexDirection: 'row',
      padding: 10,
      //borderTopColor: 'black',  
    },
    
  })

export default HangarScreen;