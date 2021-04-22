import 'react-native-gesture-handler';
import React, { useEffect,useLayoutEffect, useState } from 'react';
import { StyleSheet, Text,TextInput,ActivityIndicator, View,Button,TouchableOpacity, FlatList } from 'react-native';

function MaintenanceHistoryScreen ({route, navigation}) {

  const {itemID, adminViewer,aircraftID,hangarID,maintenanceID} = route.params;

//       onPress={() =>  navigation.navigate('Map',{itemID, adminViewer})}


  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
      <TouchableOpacity style={{}} 
        onPress = {() =>  navigation.navigate('Sign-in') } >
        <Text style={styles.rightHead} >
          Log Out
        </Text>
      </TouchableOpacity>
      ),
    });
  }, [navigation]);

    const DATA = [
      {
        id: '0',
        title: '06-12-2020',
      },
      {
        id: '1',
        title: '05-11-2020',
      },
      {
        id: '2',
        title: '04-10-2020',
      },
      {
        id: '3',
        title: '05-09-2020',
      },
      {
        id: '4',
        title: '04-08-2020',
      },
      {
        id: '5',
        title: '03-07-2020',
      },
      {
        id: '6',
        title: '02-06-2020',
      },
      
    ];

    var i = maintenanceID


    const Item = ({ title }) => (
      <View style={styles.item}>
        <Text style={styles.title} onPress={() => navigation.navigate('Air',{itemID, adminViewer,aircraftID,hangarID})}>{title}</Text>
      </View>
    );

    const renderItem = ({ item }) => (
      <Item title={item.title}/>
    );

    const requestOptions = 
    {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' }
    }


    const [Date, setDate] = useState('');
    const [Team, setTeam] = useState('');

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    
    function reload(){
      fetch('https://7n9cvyktjg.execute-api.us-east-1.amazonaws.com/test/maintenance_history',requestOptions)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  
    }


  
  
  useEffect(() => {
      fetch('https://7n9cvyktjg.execute-api.us-east-1.amazonaws.com/test/maintenance-history',sendOptions)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    var json = {};
    json[0] = [];
    json.serial = i
    const sendOptions = 
        {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(json)
        }
    fetch('https://7n9cvyktjg.execute-api.us-east-1.amazonaws.com/test//maintenance-history', sendOptions)

    //const Serial = data[i].serial_No
  //  console.log('NUMBER: ',i)
    console.log('DATA: ',data)
   // console.log(json)

    var stat = ''

    const [Serial, setSerial] = useState('');
    var i = aircraftID;

    const air = ['hello ','world']
    const place = 'Update Data'

    return (
    
    <View style = {styles.back}>
        
      <View style={styles.info}>
        <Text style={styles.inputText}>Aircraft Serial:  </Text>
        {isLoading ? <ActivityIndicator/> : (
            <Text style={styles.inputText}>
              {data[0].aircraftNo}
            </Text>
            )}
      </View>

      <View style={styles.info}>
        <Text style={styles.inputText}>Maintenance Team ID:  </Text>
        {isLoading ? <ActivityIndicator/> : (
            <Text style={styles.inputText}>
              {data[0].Maintenance_Team_ID}
            </Text>
            )}
        <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer}> 
        </TextInput>
      </View>

      <View style={styles.info}>
        <Text style={styles.inputText}>Location:  </Text>
        {isLoading ? <ActivityIndicator/> : (
            <Text style={styles.inputText}>
              {data[0].LOCATION}
            </Text>
            )}
        <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer}> 
        </TextInput>
      </View>

      <View style={styles.info}>
        <Text style={styles.inputText}>MICAPS:  </Text>
        {isLoading ? <ActivityIndicator/> : (
            <Text style={styles.inputText}>
              {data[0].MICAPS}
            </Text>
            )}
        <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer}> 
        </TextInput>
      </View>

      <View style={styles.info}>
        <Text style={styles.inputText}>ETIC:  </Text>
        {isLoading ? <ActivityIndicator/> : (
            <Text style={styles.inputText}>
              {data[0].timeOfCompletion}
            </Text>
            )}
        <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer}> 
        </TextInput>
      </View>

      <View style={styles.info}>
        <Text style={styles.inputText}>Maintenance Date:  </Text>
        {isLoading ? <ActivityIndicator/> : (
            <Text style={styles.inputText}>
              {data[0].Maintenance_Date}
            </Text>
            )}
        <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer}> 
        </TextInput>
      </View>

      <View style={styles.info}>
        <Text style={styles.inputText}>LAST_FLT:  </Text>
        {isLoading ? <ActivityIndicator/> : (
            <Text style={styles.inputText}>
              {data[0].LAST_FLT}
            </Text>
            )}
        <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer}> 
        </TextInput>
      </View>
      

      <View style={styles.info}>
        <Text style={styles.inputText}>Dates:</Text>
        <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer}> 
        </TextInput>
        <View style={{flex:1}}>
         <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
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
      fontSize: 20
    },
    input : {
      width: 200,
      borderColor: 'grey',
      borderBottomColor: 'black'
    },
    info: {
      
    //  backgroundColor: "#b31942",
      backgroundColor: '#FFF',
      borderWidth: 5,
      borderColor: '#000080',
      borderRadius: 30,
      width: "100%",
      height: 45,
      marginBottom: 9,
      flex: 0.6,
      flexDirection: 'row',
      padding: 10,
     // justifyContent: 'center',
      alignItems: 'center',
    //  borderTopColor: 'black',
    },
    infoBlue: {
      
      //  backgroundColor: "#b31942",
        backgroundColor: '#FFF',
        borderWidth: 5,
        borderColor: '#000080',
        borderRadius: 30,
        width: "100%",
        height: 45,
        marginBottom: 9,
        flex: 0.6,
        flexDirection: 'row',
        padding: 10,
      //  borderTopColor: 'black',
      },
    
  })

export default MaintenanceHistoryScreen;