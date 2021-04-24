import 'react-native-gesture-handler';
//import * as React from 'react';
import React, { useEffect,useLayoutEffect, useState } from 'react';
import { StyleSheet,TextInput,ActivityIndicator, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import {Picker} from '@react-native-picker/picker';


function AddAircraftScreen ({route, navigation}) {

    const {itemID, adminViewer,aircraftID,hangarID} = route.params;

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


    const DATA = [
      {
        id: '0',
        title: 'Eren Yeager',
      },
      {
        id: '1',
        title: 'Mikasa Ackermann',
      },
      {
        id: '2',
        title: 'Armin Arlert',
      },
      {
        id: '3',
        title: 'Levi Ackermann',
      },
      {
        id: '4',
        title: 'Sasha Blouse',
      },
      {
        id: '5',
        title: 'Connie Springer',
      },
      {
        id: '6',
        title: 'Jean Kirstein',
      },
      
    ];

    var i = aircraftID

    const Item = ({ title }) => (
      <View style={styles.item}>
        <Text style={styles.inputText}>{title}</Text>
      </View>
    );

    const renderItem = ({ item }) => (
      <Item title={item.title} />
    );

    //var adminViewer = true
    var place = ' Add Data'

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    
    function reload(){
      fetch('https://7n9cvyktjg.execute-api.us-east-1.amazonaws.com/test/aircraft',requestOptions)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  
    }


  
  
  useEffect(() => {
      fetch('https://7n9cvyktjg.execute-api.us-east-1.amazonaws.com/test/aircraft',requestOptions)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    //const Serial = data[i].serial_No
    //console.log(data)

    var stat = ''

    const [Serial, setSerial] = useState('');
    const [Status, setStatus] = useState('');
    const [Location, setLocation] = useState('');
    const [Remarks, setRemarks] = useState('');
    const [Sortie, setSortie] = useState('');
    const [Maintenance_H, setMaintenance] = useState('');
    const [Micaps_H, setMICAPS] = useState('');
    const [LASTFLIGHT, setLastFlight] = useState('');
    const [ETIC_H, setETIC] = useState('');

    const erase =()=> {
      setSerial('')
      setStatus('')
      setLocation('')
      setRemarks('')
      setSortie('')
      setMaintenance('')
      setMICAPS('')
      setLastFlight('')
      setETIC('')
    }

    const requestOptions = 
        {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' }
        }

    
    function addSerial(num){
      stat = num
    }

    async function send(i){
    var json = {};
        json[0] = [];
        json.sortie = Sortie.trim();
        json.last_flt = LASTFLIGHT.trim();
        json.team = Maintenance_H.trim();
        json.w = Serial.trim();
        json.status = Status.trim();
        json.etic = ETIC_H.trim();
        json.location = Location.trim();
        json.micaps = Micaps_H.trim();
        json.remark = Remarks.trim();
    const sendOptions = 
        {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(json)
        }
    await fetch('https://7n9cvyktjg.execute-api.us-east-1.amazonaws.com/test/aircraft/add', sendOptions)
    alert("Addition Complete")

    erase()
    reload()
    }
  
    //console.log('\n\nTESTING: ',data)

    var status = 'hwllo'

    
    
    var empty = ' '

    const air = ['hello ','world']
/*
    function myfunc(){

      var url = "https://7n9cvyktjg.execute-api.us-east-1.amazonaws.com/test/aircraft"
  
       const requestOptions = {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' }
      }
  
      console.log(url)
      return fetch(url,requestOptions)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        return responseData;
      })
      .catch(error => console.warn(error));
    }
  myfunc().then(response => console.log(response[0].Aircraft_status));

var test = ''

        <View style={styles.info}>
          <Text style={styles.inputText}>Other Maintainer:</Text>
          <Text style={styles.inputText}>{} </Text>
          <View style={styles.inputText}>
           <FlatList
            style={styles.inputText}
            data={DATA}
            renderItem={renderItem }
            keyExtractor={item => item.id}
            />
          </View>
        </View>

myfunc().then(response => console.log(response[0].serial_No));

console.log('TESTING!!!')

*/

//var test = myfunc() 
//console.log(test)
const [selectedLanguage, setSelectedLanguage] = useState();

    return (
    
    <View style = {styles.main}>
      
      <View style={styles.infoBlue}>
          <View style={styles.display}>
            <Text style={styles.inputText}>
              *Aircraft Serial: 
            </Text>
            {isLoading ? <ActivityIndicator/> : (
            <Text style={styles.inputText}>
            </Text>
            )}
          </View>
          <TextInput style={styles.infoField} placeholder={place} value={Serial}
            editable={adminViewer} onChangeText={(Serial) => setSerial(Serial)}> 
          </TextInput>
        </View>

      
        <View style={styles.infoBlue}>
          <View style={styles.display}>
            <Text style={styles.inputText}>
              *Aircraft Status: 
            </Text>
          
            {isLoading ? <ActivityIndicator/> : (
            <Text style={styles.inputText}>
            </Text>
            )}
          </View>
          <TextInput style={styles.infoField} placeholder={place} value={Status}
            editable={adminViewer} onChangeText={(Status) => setStatus(Status)}> 
          </TextInput>
        </View>


  
        <View style={styles.infoBlue}>
        <View style={styles.display}>
            <Text style={styles.inputText}>
              Aircraft Location: 
            </Text>
            <Text style={styles.inputText}>
              {empty}
            </Text>
            {isLoading ? <ActivityIndicator/> : (
            <Text style={styles.inputText}>
            </Text>
            )}
          </View>
          <TextInput style={styles.infoField} placeholder={place} value={Location}
            editable={adminViewer} onChangeText={(Location) => setLocation(Location)}> 
          </TextInput>
        </View>

        <View style={styles.infoBlue}>
        <View style={styles.display}>
            <Text style={styles.inputText}>
              Last Flight: 
            </Text>
            <Text style={styles.inputText}>
              {empty}
            </Text>
            {isLoading ? <ActivityIndicator/> : (
            <Text style={styles.inputText}>
            </Text>
            )}
          </View>
          <TextInput style={styles.infoField} placeholder={place} value={LASTFLIGHT}
            editable={adminViewer} onChangeText={(LASTFLIGHT) => setLastFlight(LASTFLIGHT)}> 
          </TextInput>
        </View>
  
        <View style={styles.infoBlue}>
        <View style={styles.display}>
            <Text style={styles.inputText}>
              Maintenance Lead: 
            </Text>
            <Text style={styles.inputText}>
              {empty}
            </Text>
            {isLoading ? <ActivityIndicator/> : (
            <Text style={styles.inputText}>
            </Text>
            )}
          </View>
          <TextInput style={styles.infoField} placeholder={place} value={Maintenance_H}
            editable={adminViewer} onChangeText={(Maintenance_H) => setMaintenance(Maintenance_H)}> 
          </TextInput>
        </View>
  
        <View style={styles.infoBlue}>
        <View style={styles.display}>
            <Text style={styles.inputText}>
              Remarks: 
            </Text>
            <Text style={styles.inputText}>
              {empty}
            </Text>
            {isLoading ? <ActivityIndicator/> : (
            <Text style={styles.inputText}>
            </Text>
            )}
          </View>
          <TextInput style={styles.infoField} placeholder={place} value={Remarks}
            editable={adminViewer} onChangeText={(Remarks) => setRemarks(Remarks)}> 
          </TextInput>
        </View>

        <View style={styles.infoBlue}>
        <View style={styles.display}>
            <Text style={styles.inputText}>
              MICAPS: 
            </Text>
            <Text style={styles.inputText}>
              {empty}
            </Text>
            {isLoading ? <ActivityIndicator/> : (
            <Text style={styles.inputText}>
            </Text>
            )}
          </View>
          <TextInput style={styles.infoField} placeholder={place} value={Micaps_H}
            editable={adminViewer} onChangeText={(Micaps_H) => setMICAPS(Micaps_H)}> 
          </TextInput>
        </View>

        <View style={styles.infoBlue}>
        <View style={styles.display}>
            <Text style={styles.inputText}>
              ETIC: 
            </Text>
            <Text style={styles.inputText}>
              {empty}
            </Text>
            {isLoading ? <ActivityIndicator/> : (
            <Text style={styles.inputText}>
            </Text>
            )}
          </View>
          <TextInput style={styles.infoField} placeholder={place} value={ETIC_H}
            editable={adminViewer} onChangeText={(ETIC_H) => setETIC(ETIC_H)}> 
          </TextInput>
        </View>

  
        <View style={styles.infoBlue}>
        <View style={styles.display}>
            <Text style={styles.inputText}>
              Sortie Type: 
            </Text>
            <Text style={styles.inputText}>
              {empty}
            </Text>
            {isLoading ? <ActivityIndicator/> : (
            <Text style={styles.inputText}>
            </Text>
            )}
          </View>
          <TextInput style={styles.infoField} placeholder={place} value={Sortie}
            editable={adminViewer} onChangeText={(Sortie) => setSortie(Sortie)}> 
          </TextInput>
        </View>
 
  

        <View style={styles.infoBlue}>
         <View style={styles.basicRow}>
         
          <Text style={styles.history} onPress={ (adminViewer) ? 
            () => {send(i)} : 
            () => alert('You are not an Administrator. You can not edit data') }>
             Add
          </Text>
          </View>
        </View>

  
  
      </View>
  
    )
  }

  const styles = StyleSheet.create({
    main: {
      flex: 1, 
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
     // backgroundColor: '#0a3161' ,
      backgroundColor: 'grey',
      padding: 10
    },
    basicRow:{
      flex:1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      flex: 1,
      backgroundColor: "gray",
      alignItems: "center",
      justifyContent: "center",
    },
  
    image: {
      marginBottom: 40,
    },
    display:{
      flexDirection: 'row',
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

    history:{
      color: '#000',
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
     // marginLeft: '15%'
    },
  
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      color: 'white'
    },
    rightHead:{
      color: '#fff',
      fontSize: 20,
      paddingRight: 10,
      fontWeight:'bold'
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
      color: '#000',
      fontSize: 15,
      flexDirection: 'row',
    },
    inputResult: {
      color: 'white',
      fontSize: 15,
      marginTop: 9,
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
      flex: 0.9,
      fontSize: 20
    },
    input : {
      width: 200,
      borderColor: 'grey',
      borderBottomColor: 'black'
    },
    info: {
      
     // backgroundColor: "#b31942",
      borderColor: '#000080',
      borderWidth: 5,
      backgroundColor: '#FFF',
      borderRadius: 30,
      width: "100%",
      height: 45,
      marginBottom: 9,
      flex: 0.6,
      flexDirection: 'row',
      padding: 10,
     // borderTopColor: 'black', 
    },
    infoBlue: {
      
      // backgroundColor: "#b31942",
       borderColor: '#000080',
       borderWidth: 5,
       backgroundColor: '#FFF',
       borderRadius: 30,
       width: "100%",
       height: 45,
       marginBottom: 9,
       flex: 0.6,
       flexDirection: 'row',
       padding: 10,
      // borderTopColor: 'black', 
     },
    
  })


export default AddAircraftScreen;