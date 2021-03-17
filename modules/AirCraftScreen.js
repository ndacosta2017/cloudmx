import 'react-native-gesture-handler';
//import * as React from 'react';
import React, { useEffect,useLayoutEffect, useState } from 'react';
import { StyleSheet,TextInput,ActivityIndicator, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

function AirCraftScreen ({route, navigation}) {

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


    const Item = ({ title }) => (
      <View style={styles.item}>
        <Text style={styles.inputText}>{title}</Text>
      </View>
    );

    const renderItem = ({ item }) => (
      <Item title={item.title} />
    );

    //var adminViewer = true
    var place = ' Override Data'

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

    const [Serial, setSerial] = useState('');

    function serial_func(Serial){
      setSerial(Serial);
  
    }
  
    //console.log('\n\nTESTING: ',data)

    var status = 'hwllo'

    var i = 0

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

myfunc().then(response => console.log(response[0].serial_No));

console.log('TESTING!!!')

*/

//var test = myfunc() 
//console.log(test)

    return (
    
      <View style = {{flex: 1, 
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#0a3161' ,
        padding: 10}}>
      
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
            </Text>
            )}
          </View>
          <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer} onChangeText={(Serial) => setSerial(Serial)}>  
          </TextInput>
        </View>


        <View style={styles.info}>
          <View style={styles.display}>
            <Text style={styles.inputText}>
              Aircraft Status: {itemID}
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
            editable={adminViewer}> 
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
            <Text style={styles.inputText}>
            </Text>
          </View>
          <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer}> 
          </TextInput>
        </View>
  
        <View style={styles.info}>
          <Text style={styles.inputText}>Maintenance Issues: {
            <FlatList
            horizontal= {true}
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text style={styles.inputText}>{item.Remarks}</Text>
            )}
            />
          } </Text>
          <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer}> 
          </TextInput>
        </View>
  
        <View style={styles.info}>
          <Text style={styles.inputText}>Lead Maintainer: {
            <FlatList
            horizontal= {true}
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text style={styles.inputText}>{item.Maintenance_Team}</Text> 
            )}
            />
          } </Text>
          <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer}> 
          </TextInput>
        </View>
  
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
  
        <View style={styles.info}>
          <Text style={styles.inputText}>Ordered Parts:{
             <FlatList
             horizontal= {true}
             data={data}
             keyExtractor={({ id }, index) => id}
             renderItem={({ item }) => (
               <Text style={styles.inputText}>{item.MICAPS}</Text>
             )}
             />

          }  </Text>
          <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer}> 
          </TextInput>
        </View>
  
        <View style={styles.info}>
          <Text style={styles.inputText}>Flying Schedule: {
            <FlatList
            horizontal= {true}
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text style={styles.inputText}>{item.LAST_FLT}</Text>
            )}
            />
          } </Text>
          <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer}> 
          </TextInput>
        </View>
  
        <View style={styles.info}>
          <Text style={styles.inputText}>Maintenance Period: {
            <FlatList
            horizontal= {true}
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text style={styles.inputText}>{item.SORTIE_TYPE}</Text>
            )}
            />
          } </Text>
          <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer}> 
          </TextInput>
        </View>

        <View style={styles.info}>
         <View style={{flex:1, flexDirection: 'row'}}>
          <Text style={styles.history} onPress={() => 
           navigation.navigate('History',{itemID, adminViewer})}>
             Maintenance History
          </Text>
          <Text style={styles.history} onPress={ (adminViewer) ? 
            () => console.log(Serial) : 
            () => alert('You are not an Administrator. You can not edit data') }>
             Overide
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
      color: '#b31942',
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