import 'react-native-gesture-handler';
import React, { useEffect,useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView,ActivityIndicator,TouchableOpacity, Button, TextInput } from 'react-native';

var example = true
var name = 'bob'
var job = 'MC45'
var plane = 'C7-45'
var location = 'D-4'

function MapScreen ({route, navigation}) {


  const { itemID,itemPass, adminViewer,aircraftID,hangarID} = route.params;

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

  var modo = 'Viewer'

  modo = (adminViewer) ? 'Admin' : 'Viewer'

  var json = {};
  json[0] = [];
  json.user = itemID;
  json.pass = itemPass;
  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
  function reload(){
    fetch('https://7n9cvyktjg.execute-api.us-east-1.amazonaws.com/test/users',requestOptions)
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));

  }


  const requestOptions = {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(json)
}

useEffect(() => {
    fetch('https://7n9cvyktjg.execute-api.us-east-1.amazonaws.com/test/users',requestOptions)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

 //var here = data[0].userFirstName

  //var ritemID = itemID
  // onPress={() => navigation.navigate('Hangar',{itemID,adminViewer})}

  //{itemID}. {data[0].userFirstName}
  // data[0].userFirstName +' '+ data[0].userLastName
  //Hello, user {(adminViewer) ? itemID  :  data[0].userFirstName +' '+ data[0].userLastName } 

  return (
  
<View style={styles.overall}>

<View style={styles.main}>
  <View style={styles.topText}>
  {isLoading ? <ActivityIndicator/> : (
     <Text style={styles.inputText}>
        Hello, user {(adminViewer) ? 
        itemID  : 
        data[0].userFirstName +' '+ data[0].userLastName } 
      </Text>
    )}
  </View>
  <Text style={styles.topText}>
    You are in {modo} Mode
  </Text>
  <Text style={styles.topBold}
  onPress={() => navigation.navigate('All',{itemID,adminViewer,aircraftID,hangarID})}>
    Click Here to View All Aircraft
  </Text>
</View>

<ScrollView style={styles.overall}>

<View style={styles.hangar}> 
  <View style={styles.hangarInfo}>
   <Text style={styles.titleText}>Add New Users</Text>
   <View style={styles.infoButton}>
      <TouchableOpacity style={{}} 
       onPress={ (adminViewer) ? 
        () => navigation.navigate('AddAdmin',{itemID,adminViewer}) : 
        () => alert('You are not an Administrator. You can not new admin users') } >
        <Text style={{color: 'white'}}>
          Add A New Admin User
        </Text>
      </TouchableOpacity>
   </View>
   <View style={styles.infoButton}>
      <TouchableOpacity style={{}} 
        onPress={ (adminViewer) ? 
          () => navigation.navigate('AddUser',{itemID,adminViewer}) : 
          () => alert('You are not an Administrator. You can not new add users') } >
        <Text style={{color: 'white'}}>
          Add A New Viewer User
        </Text>
      </TouchableOpacity>
   </View>
  </View>
 </View>

 <View style={styles.hangar}> 
  <View style={styles.hangarInfo}>
   <Text style={styles.titleText}>Hangar 731 </Text>
   <View style={styles.infoButton}>
      <TouchableOpacity style={{}} 
       onPress={() => navigation.navigate('Hangar',{itemID,adminViewer,aircraftID,hangarID:0})}>
        <Text style={{color: 'white'}}>
          View Hangar Info
        </Text>
      </TouchableOpacity>
   </View>
  </View>
 </View>

 <View style={styles.hangar}> 
  <View style={styles.hangarInfo}>
   <Text style={styles.titleText}>Hangar 746</Text>
   <View style={styles.infoButton}>
      <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Hangar',{itemID,adminViewer,aircraftID,hangarID:1})} >
        <Text style={{color: 'white'}}>
          View Hangar Info
        </Text>
      </TouchableOpacity>
   </View>
   
  </View>
 </View>

 <View style={styles.hangar}> 
  <View style={styles.hangarInfo}>
   <Text style={styles.titleText}>Offices</Text>
   <View style={styles.infoButton}>
      <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Hangar',{itemID,adminViewer,aircraftID,hangarID})} >
        <Text style={{color: 'white'}}>
          View Hangar Info
        </Text>
      </TouchableOpacity>
   </View>
  </View>
 </View>

 <View style={styles.hangar}> 
  <View style={styles.hangarInfo}>
   <Text style={styles.titleText}>Equipment Bay</Text>
   <View style={styles.infoButton}>
      <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Hangar',{itemID,adminViewer,aircraftID,hangarID})} >
        <Text style={{color: 'white'}}>
          View Hangar Info
        </Text>
      </TouchableOpacity>
   </View>
  </View>
 </View>

 <View style={styles.hangar}> 
  <View style={styles.hangarInfo}>
   <Text style={styles.titleText}>Maintenance Bay</Text>
   <View style={styles.infoButton}>
      <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Hangar',{itemID,adminViewer,aircraftID,hangarID})} >
        <Text style={{color: 'white'}}>
          View Hangar Info
        </Text>
      </TouchableOpacity>
   </View>
  </View>
 </View>

 <View style={styles.hangar}> 
  <View style={styles.hangarInfo}>
   <Text style={styles.titleText}>Fire Department</Text>
   <View style={styles.infoButton}>
      <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Hangar',{itemID,adminViewer,aircraftID,hangarID})} >
        <Text style={{color: 'white'}}>
          View Hangar Info
        </Text>
      </TouchableOpacity>
   </View>
  </View>
 </View>


 <View style={styles.runway}>
 <View style={styles.textRun}>
   <Text style={styles.titleText}>Runway</Text>
  </View>
  <View style={styles.grid}>
   <View style={styles.boxRow}>
   <View style={styles.bigBlue}> 
      <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Air',{itemID,adminViewer,aircraftID,hangarID})} >
        <Text style={{color: 'white'}} >S - 1</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.bigBlue}> 
      <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Air',{itemID,adminViewer,aircraftID,hangarID})} >
        <Text style={{color: 'white'}} >S - 2</Text>
      </TouchableOpacity>
    </View>
   </View>
   <View style={styles.boxRow}>
    <View style={styles.bigBlue}>
    <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Air',{itemID,adminViewer,aircraftID,hangarID})} >
        <Text style={{color: 'white'}} >S - 3</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.bigBlue}>
    <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Air',{itemID,adminViewer,aircraftID,hangarID})} >
        <Text style={{color: 'white'}} >S - 4</Text>
    </TouchableOpacity>
    </View>
   </View>
   <View style={styles.boxRow}>
    <View style={styles.bigBlue}>
    <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Air',{itemID,adminViewer,aircraftID,hangarID})} >
        <Text style={{color: 'white'}} >S - 5</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.bigBlue}>
    <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Air',{itemID,adminViewer,aircraftID,hangarID})} >
        <Text style={{color: 'white'}} >S - 6</Text>
    </TouchableOpacity>
    </View>
   </View>
   <View style={styles.boxRow}>
    <View style={styles.bigBlue}>
    <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Air',{itemID,adminViewer,aircraftID,hangarID})} >
        <Text style={{color: 'white'}} >S - 7</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.bigBlue}>
    <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Air',{itemID,adminViewer,aircraftID,hangarID})} >
        <Text style={{color: 'white'}} >S - 8</Text>
    </TouchableOpacity>
    </View>
   </View>
   <View style={styles.boxRow}>
    <View style={styles.bigBlue}> 
    <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Air',{itemID,adminViewer,aircraftID,hangarID})} >
        <Text style={{color: 'white'}} >S - 9</Text>
    </TouchableOpacity></View>
    <View style={styles.bigBlue}>
    <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Air',{itemID,adminViewer,aircraftID,hangarID})} >
        <Text style={{color: 'white'}} >S - 10</Text>
      </TouchableOpacity>
    </View>
   </View>
   <View style={styles.boxRow}>
    <View style={styles.bigBlue}>
    <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Air',{itemID,adminViewer,aircraftID,hangarID})} >
        <Text style={{color: 'white'}} >S - 11</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.bigBlue}>
    <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Air',{itemID,adminViewer,aircraftID,hangarID})} >
        <Text style={{color: 'white'}} >S - 12</Text>
    </TouchableOpacity>
    </View>
   </View>
  </View>
 </View>





</ScrollView>
  
</View>

  )
}

const styles = StyleSheet.create({
  overall: {
    flex: 1,
    backgroundColor:'#0a3161',
    
  },
  main:{
    flex: 0.2, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor:'#b31942',
    borderRadius:30,
    margin:30
  },
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  boxRow: {
    position: 'relative',
    top: 15, 
    bottom: 30,
    flex: 1,
    flexDirection: 'row', 
    justifyContent:"space-evenly"


//{flex: 1, position: 'relative', flex: 1,flexDirection: 'row', justifyContent:"space-evenly"
    
  },

  bold: {
    fontWeight: 'bold'
  },
  textRun: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  grid: {
    flex: 1,
    flexDirection: 'column', 
    justifyContent:"space-evenly"
  },
  image: {
    marginBottom: 40,
  },
  topText: {
    flex:.5, 
    color: '#fff', 
    fontSize: 15, 
    padding: 5,
  
  },
  topBold: {
    flex:.5, 
    color: '#fff', 
    fontSize: 15, 
    padding: 5,
    fontWeight: 'bold'
  
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
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color: 'white'
  },
  titleText: {
    fontSize: 35,
    color: 'white'
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
    marginTop: 30,
    width: 170, 
    height: 50,
    backgroundColor: '#0a3161'
  },
  hangarInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
   backgroundColor: '#b31942', 
   height: 275,
   borderRadius: 40,
   margin: 30
  },
  runway : {
    flex: .5,
    justifyContent: 'center',
    backgroundColor: '#b31942', 
    height: 800,
    borderRadius: 40,
    margin: 30
   },
  bigBlue : {
    justifyContent: 'center',
    alignItems: 'center', 
    borderRadius: 20, 
    width: 70, 
    height: 70, 
    backgroundColor: '#0a3161'

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
    flex: 0.5,
    flexDirection: 'row',
    padding: 10,
    borderTopColor: 'black',
    
  },
  
})


export default MapScreen ;