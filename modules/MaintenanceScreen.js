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

    //const storage = [];

    var i = maintenanceID
   const  SampleFunction=(item)=>{
 
      Alert.alert(item);
   
    }

    function ren(){
      return storage.map((item, index) => <Text key={index}>{item.text}</Text>);

    }
   

    const Item = ({  }) => (
      <View style={styles.item}>
        <Text style={styles.title} >{}</Text>
      </View>
    );

    const renderItem = ({ item }) => (
      <Item title={item}/>
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
    /*
    
         <View style={{flex:1}}>
        {isLoading ? <ActivityIndicator/> : (
         <FlatList
          data={data}
          renderItem={({ item }) => (
            <Item title={item.LAST_FLT}/>
          )}
          keyExtractor={(item, index) => item.key}
          />
         )}
        {isLoading ? <ActivityIndicator/> : (
         <FlatList
          data={data}
          renderItem={({ item }) => (
            <Item title={item.LAST_FLT}/>
          )}
          keyExtractor={(item, index) => item.key}
          />
         )}
        </View>
    
    */ 
  //  console.log('NUMBER: ',i)
    console.log('DATA: ',data)
    console.log('SIZE: ',data.length)
    var len = data.length

    var storage = [];



    for(var j = 0; j < len;j++)
    {
    //  console.log(data[j].LAST_FLT)
    storage.push(data[j])
    storage[j].index = j
     // console.log("STORAGE",storage)
    }
    console.log("STORAGE",storage)
   // console.log(json)
   async function send(i){
    var json = {};
        json[0] = [];
        json.sortie = Sortie.trim();
        json.last_flt = LASTFLIGHT.trim();
        json.team = Maintenance_H.trim();
        json.w = stat.trim();
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
    await fetch('https://7n9cvyktjg.execute-api.us-east-1.amazonaws.com/test/aircraft/update', sendOptions)
    alert("Update Complete")

    erase()
    reload()
    }
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
              {storage[0].aircraftNo}
            </Text>
            )}
      </View>

      <View style={styles.info}>
        <Text style={styles.inputText}>Maintenance Team ID:  </Text>
        <View style={styles.max}>
        {isLoading ? <ActivityIndicator/> : (
                <FlatList
                data={storage}
                keyExtractor={item => item.index.toString()}
                renderItem={({ item }) => (
                  <Text>{item.index+1}: {item.leadMaintainer}</Text>
                )}
              />
            )}
            </View>
        <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer}> 
        </TextInput>
      </View>

      <View style={styles.info}>

        <Text style={styles.inputText}>Location:  </Text>
        <View style={styles.max}>
        {isLoading ? <ActivityIndicator/> : (
         <FlatList
          data={storage}
          keyExtractor={item => item.index.toString()}
          renderItem={({ item }) => (
            <Text>{item.index+1}: {item.LOCATION}</Text>
          )}
        />
            )}
            </View>
        <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer}> 
        </TextInput>
      </View>

      <View style={styles.info}>
        <Text style={styles.inputText}>MICAPS:  </Text>
        <View style={styles.max}>
        {isLoading ? <ActivityIndicator/> : (
        <FlatList
        data={storage}
        keyExtractor={item => item.index.toString()}
        renderItem={({ item }) => (
          <Text>{item.index+1}: {item.MICAPS}</Text>
        )}
      />
            )}
            </View>
        <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer}> 
        </TextInput>
      </View>

      <View style={styles.info}>
        <Text style={styles.inputText}>ETIC:  </Text>
        {isLoading ? <ActivityIndicator/> : (
                  <FlatList
                  data={storage}
                  keyExtractor={item => item.index.toString()}
                  renderItem={({ item }) => (
                    <Text>{item.index+1}: {item.timeOfCompletion}</Text>
                  )}
                />
            )}
        <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer}> 
        </TextInput>
      </View>

      <View style={styles.info}>
        <Text style={styles.inputText}>SORTIE_TYPE:  </Text>
        <View style={styles.max}>
        {isLoading ? <ActivityIndicator/> : (
                  <FlatList
                  
                  data={storage}
                  keyExtractor={item => item.index.toString()}
                  renderItem={({ item }) => (
                    <View>
                    <Text >{item.index+1}: {item.SORTIE_TYPE}</Text>
                    </View>
                  )}
                />
            )}
        </View>
        <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer}> 
        </TextInput>
      </View>


      <View style={styles.info}>
        <Text style={styles.inputText}>Remarks:  </Text>
        <View style={styles.max}>
        {isLoading ? <ActivityIndicator/> : (
         <FlatList
          data={storage}
          keyExtractor={item => item.index.toString()}
          renderItem={({ item }) => (
            <Text>{item.index+1}: {item.Remarks}</Text>
          )}
        />
            )}
            </View>
        <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer}> 
        </TextInput>
      </View>

      <View style={styles.info}>
        <Text style={styles.inputText}>Maintenance Date:  </Text>
        {isLoading ? <ActivityIndicator/> : (
        <FlatList
        data={storage}
        keyExtractor={item => item.index.toString()}
        renderItem={({ item }) => (
          <Text>{item.index+1}: {item.Maintenance_Date}</Text>
        )}
      />
            )}
        <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer}> 
        </TextInput>
      </View>

      <View style={styles.info}>
        <Text style={styles.inputText}>LAST_FLT:  </Text>
 
          {isLoading ? <ActivityIndicator/> : (
          <View style={styles.MainContainer}> 
            
            <FlatList
          data={storage}
          keyExtractor={item => item.index.toString()}
          renderItem={({ item }) => (
            <Text>{item.index+1}: {item.LAST_FLT}</Text>
          )}
        />

           </View>
          )}
        
        <TextInput style={styles.infoField} placeholder={place}
            editable={adminViewer}> 
        </TextInput>
      </View>
      

   

      <View style={styles.infoBlue}>
         <View style={styles.basicRow}>
       
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
    basicRow:{
      flex:1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
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
      color: 'black',
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
     // marginLeft: '30%'
    },
    title: {
      color: 'black'
    },
    item: {
      color: 'black'
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      color: 'black'
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
    max: {
      width: '30%'
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