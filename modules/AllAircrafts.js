import 'react-native-gesture-handler';
import React, { useEffect,useLayoutEffect, useState } from 'react';
import { StyleSheet, Text,TextInput,ActivityIndicator, View,Button,TouchableOpacity, FlatList } from 'react-native';
import {Picker} from '@react-native-picker/picker';


function AllAircraftScreen ({route, navigation}) {


    const {itemID, adminViewer,aircraftID,hangarID} = route.params;
    //const adminViewer = true;
    
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


      const [isLoading, setLoading] = useState(true);
      const [data, setData] = useState([]);
      var storage = []
      
      function reload(){
        fetch('https://7n9cvyktjg.execute-api.us-east-1.amazonaws.com/test/aircraft',requestOptions)
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
        fetch('https://7n9cvyktjg.execute-api.us-east-1.amazonaws.com/test/aircraft',requestOptions)
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);
  
      var len = data.length
      for(var j = 0; j < len;j++)
      {
      //  console.log(data[j].LAST_FLT)
        storage.push(data[j])
        storage[j].index = j
       // console.log("STORAGE",storage)
      }
      //const Serial = data[i].serial_No
      console.log('STORAGE: ',storage)
      console.log('DATA:',data)
      console.log('SIZE: ',len)
  
      var stat = ''
    
        const DATA = [
          {
            id: '0',
            title: 'Aircraft1',
          },
          {
            id: '1',
            title: 'Aircraft2',
          },
          /*
          {
            id: '2',
            title: 'Aircraft3',
          },
          {
            id: '3',
            title: 'Aircraft4',
          },
          {
            id: '4',
            title: 'Aircraft5',
          },
          {
            id: '5',
            title: 'Aircraft6',
          },
          {
            id: '6',
            title: 'Aircraft7',
          },*/
          
        ];

        var stat = ''
        var i = 0

        const [Serial, setSerial] = useState('');
        const [Status, setStatus] = useState('');
        const [Location, setLocation] = useState('');
        const [Remarks, setRemarks] = useState('');
        const [Sortie, setSortie] = useState('');
        const [Maintenance_H, setMaintenance] = useState('');
        const [Micaps_H, setMICAPS] = useState('');
        const [LASTFLIGHT, setLastFlight] = useState('');
        const [ETIC_H, setETIC] = useState('');
    
    
        const Item = ({ title }) => (
          <View style={styles.item}>
            {isLoading ? <ActivityIndicator/> : (
            <Text style={styles.inputText} onPress={() => 
              navigation.navigate('Air',{itemID, adminViewer,aircraftID: title,hangarID})}>
                Aircraft {title} :   {data[title].serial_No}
            </Text>
            )}
          </View>
        );
    
        const renderItem = ({ item }) => (
          <Item title={item.id}/>
        );
    
        const air = ['hello ','world']
        const place = 'enter data...'

        var empty = ' '


    
        return (
        
        <View style = {styles.back}>


          <View style={styles.info}>
            <Text style={styles.inputText}>Aircraft Serial #:</Text>
           
            <View style={{flex:1, justifyContent:'center',marginLeft:50}}>
            <FlatList
              data={storage}
             keyExtractor={item => item.serial_No}
              renderItem={({ item }) => (
              <Text style={styles.inputText} onPress={() => 
                navigation.navigate('Air',{itemID, adminViewer,aircraftID:item.index,hangarID})}>
                Aircraft {item.index+1}: {item.serial_No}
              </Text>
             )}
             />
            </View>
          </View>
    
   
        </View>
    
        )
      }
    
      const styles = StyleSheet.create({
        back:{flex: 1, 
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
         // backgroundColor: '#0a3161',
          backgroundColor: 'gray',
          padding: 10
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
        rightHead:{
          color: '#fff',
          fontSize: 20,
          paddingRight: 10,
          fontWeight:'bold'
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
        display:{
          flexDirection: 'row',
          alignItems: "center",
          justifyContent: "center",
        },
      
        loginBtn: {
         // width: "80%",
          borderRadius: 25,
        //  height: 50,
          alignItems: "center",
          justifyContent: "center",
         // marginTop: 40,
          backgroundColor: "#000080",
        },
        inputText: {
          color: 'black'
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
        info: {
          backgroundColor: '#FFF',
          borderColor: '#000080',
          borderWidth: 5,
         // backgroundColor: "#b31942",
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
    

export default AllAircraftScreen;