import 'react-native-gesture-handler';
//import * as React from 'react';
import React, { useEffect,useLayoutEffect, useState } from 'react';
import { StyleSheet,TextInput,ActivityIndicator, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

function AirCraftScreen ({route, navigation}) {

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
    var place = ' Update Data'

    function reload(){
      fetch('https://7n9cvyktjg.execute-api.us-east-1.amazonaws.com/test/aircraft',requestOptions)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  
    }

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' }
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



    function addSerial(num){
      stat = num
    }

    function send(i){
      if (Status.length > 0){
        //update this field of data[i]
        //data[i].Aircraft_status = Status
       // console.log('STAT:',stat)
        fetch('https://7n9cvyktjg.execute-api.us-east-1.amazonaws.com/test/aircraft/update?status='+Status+'&w='+stat, requestOptions)
        .then(response => response.json())
        .then(users => console.log(users))
      }
      if (Location.length > 0){
        //update this field of data[i]
        //data[i].Aircraft_status = Status
       // console.log('STAT:',stat)
        fetch('https://7n9cvyktjg.execute-api.us-east-1.amazonaws.com/test/aircraft/update?location='+Location+'&w='+stat, requestOptions)
        .then(response => response.json())
        .then(users => console.log(users))
      }
      if (Remarks.length > 0){
        //update this field of data[i]
        //data[i].Aircraft_status = Status
       // console.log('STAT:',stat)
        fetch('https://7n9cvyktjg.execute-api.us-east-1.amazonaws.com/test/aircraft/update?remark='+Remarks+'&w='+stat, requestOptions)
        .then(response => response.json())
        .then(users => console.log(users))
      }
      if (Sortie.length > 0){
        //update this field of data[i]
        //data[i].Aircraft_status = Status
       // console.log('STAT:',stat)
        fetch('https://7n9cvyktjg.execute-api.us-east-1.amazonaws.com/test/aircraft/update?sortie='+Sortie+'&w='+stat, requestOptions)
        .then(response => response.json())
        .then(users => console.log(users))
      }
      if (Maintenance_H.length > 0){
        //update this field of data[i]
        //data[i].Aircraft_status = Status
       // console.log('STAT:',stat)
        fetch('https://7n9cvyktjg.execute-api.us-east-1.amazonaws.com/test/aircraft/update?team='+Maintenance_H+'&w='+stat, requestOptions)
        .then(response => response.json())
        .then(users => console.log(users))
      }
      if (Micaps_H.length > 0){
        //update this field of data[i]
        //data[i].Aircraft_status = Status
       // console.log('STAT:',stat)
        fetch('https://7n9cvyktjg.execute-api.us-east-1.amazonaws.com/test/aircraft/update?micaps='+Micaps_H+'&w='+stat, requestOptions)
        .then(response => response.json())
        .then(users => console.log(users))
      }
      if (LASTFLIGHT.length > 0){
        //update this field of data[i]
        //data[i].Aircraft_status = Status
       // console.log('STAT:',stat)
        fetch('https://7n9cvyktjg.execute-api.us-east-1.amazonaws.com/test/aircraft/update?last_flt='+LASTFLIGHT+'&w='+stat, requestOptions)
        .then(response => response.json())
        .then(users => console.log(users))
      }
      if (ETIC_H.length > 0){
        //update this field of data[i]
        //data[i].Aircraft_status = Status
       // console.log('STAT:',stat)
        fetch('https://7n9cvyktjg.execute-api.us-east-1.amazonaws.com/test/aircraft/update?etic='+ETIC_H+'&w='+stat, requestOptions)
        .then(response => response.json())
        .then(users => console.log(users))
      }
     
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

    return (
    
    <View style = {styles.main}>
      
      <View style={styles.info}>
          <View style={styles.display}>
            <Text style={styles.inputText}>
              Aircraft Serial: 
            </Text>
            <Text style={styles.inputText}>
              {empty}
            </Text>
            {isLoading ? <ActivityIndicator/> : (
            <Text style={styles.inputText}>
              {data[i].serial_No}
              {addSerial(data[i].serial_No)}
            </Text>
            )}
          </View>
        </View>


        <View style={styles.info}>
          <View style={styles.display}>
            <Text style={styles.inputText}>
              Aircraft Status: 
            </Text>
            <Text style={styles.inputText}>
              {empty}
            </Text>
            {isLoading ? <ActivityIndicator/> : (
            <Text style={styles.inputText}>
              {data[i].Aircraft_status}
            </Text>
            )}
          </View>
          <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer} onChangeText={(Status) => setStatus(Status)}> 
          </TextInput>
        </View>


  
        <View style={styles.info}>
        <View style={styles.display}>
            <Text style={styles.inputText}>
              Aircraft Location: 
            </Text>
            <Text style={styles.inputText}>
              {empty}
            </Text>
            {isLoading ? <ActivityIndicator/> : (
            <Text style={styles.inputText}>
              {data[i].LOCATION}
            </Text>
            )}
          </View>
          <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer} onChangeText={(Location) => setLocation(Location)}> 
          </TextInput>
        </View>
  
        <View style={styles.info}>
        <View style={styles.display}>
            <Text style={styles.inputText}>
              Remarks: 
            </Text>
            <Text style={styles.inputText}>
              {empty}
            </Text>
            {isLoading ? <ActivityIndicator/> : (
            <Text style={styles.inputText}>
              {data[i].Remarks}
            </Text>
            )}
          </View>
          <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer} onChangeText={(Remarks) => setRemarks(Remarks)}> 
          </TextInput>
        </View>
  
        <View style={styles.info}>
        <View style={styles.display}>
            <Text style={styles.inputText}>
              SORTIE_TYPE: 
            </Text>
            <Text style={styles.inputText}>
              {empty}
            </Text>
            {isLoading ? <ActivityIndicator/> : (
            <Text style={styles.inputText}>
              {data[i].SORTIE_TYPE}
            </Text>
            )}
          </View>
          <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer} onChangeText={(Sortie) => setSortie(Sortie)}> 
          </TextInput>
        </View>
 
        <View style={styles.info}>
        <View style={styles.display}>
            <Text style={styles.inputText}>
              Maintenance Team: 
            </Text>
            <Text style={styles.inputText}>
              {empty}
            </Text>
            {isLoading ? <ActivityIndicator/> : (
            <Text style={styles.inputText}>
              {data[i].Maintenance_Team}
            </Text>
            )}
          </View>
          <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer} onChangeText={(Maintenance_H) => setMaintenance(Maintenance_H)}> 
          </TextInput>
        </View>
  
        <View style={styles.info}>
        <View style={styles.display}>
            <Text style={styles.inputText}>
              MICAPS: 
            </Text>
            <Text style={styles.inputText}>
              {empty}
            </Text>
            {isLoading ? <ActivityIndicator/> : (
            <Text style={styles.inputText}>
              {data[i].MICAPS}
            </Text>
            )}
          </View>
          <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer} onChangeText={(Micaps_H) => setMICAPS(Micaps_H)}> 
          </TextInput>
        </View>
  
        <View style={styles.info}>
        <View style={styles.display}>
            <Text style={styles.inputText}>
              Last Flight: 
            </Text>
            <Text style={styles.inputText}>
              {empty}
            </Text>
            {isLoading ? <ActivityIndicator/> : (
            <Text style={styles.inputText}>
              {data[i].LAST_FLT}
            </Text>
            )}
          </View>
          <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer} onChangeText={(LASTFLIGHT) => setLastFlight(LASTFLIGHT)}> 
          </TextInput>
        </View>
  
        <View style={styles.info}>
        <View style={styles.display}>
            <Text style={styles.inputText}>
              ETIC: 
            </Text>
            <Text style={styles.inputText}>
              {empty}
            </Text>
            {isLoading ? <ActivityIndicator/> : (
            <Text style={styles.inputText}>
              {data[i].ETIC}
            </Text>
            )}
          </View>
          <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer} onChangeText={(ETIC_H) => setETIC(ETIC_H)}> 
          </TextInput>
        </View>

        <View style={styles.info}>
         <View style={styles.basicRow}>
          <Text style={styles.history} onPress={() => 
           navigation.navigate('History',{itemID, adminViewer,aircraftID,hangarID})}>
             Maintenance History
          </Text>
          <Text style={styles.history} onPress={ (adminViewer) ? 
            () => {send(i)} : 
            () => alert('You are not an Administrator. You can not edit data') }>
             Update
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
      backgroundColor: '#0a3161' ,
      padding: 10
    },
    basicRow:{
      flex:1,
      flexDirection: 'row'
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
      color: 'white',
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


export default AirCraftScreen;