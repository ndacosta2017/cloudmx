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

  var mode = adminViewer;

  modo = (adminViewer) ? 'Admin' : 'Viewer'

  var json = {};
  json[0] = [];
  json.user = itemID;
  json.pass = itemPass;
  
  const [isLoading, setLoading] = useState(true);
  const [isBuildingLoading, setBuildingLoading] = useState(true);
  const [isLocation, setLocationLoading] = useState(true);

  const [data, setData] = useState([]);
  const [BuildingData, setBuildingData] = useState([]);
  const [LocationData, setLocationData] = useState([]);


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
  fetch('https://7n9cvyktjg.execute-api.us-east-1.amazonaws.com/test/location',requestOptions)
    .then((response) => response.json())
    .then((json) => setLocationData(json))
    .catch((error) => console.error(error))
    .finally(() => setLocationLoading(false));
}, []);


useEffect(() => {
    fetch('https://7n9cvyktjg.execute-api.us-east-1.amazonaws.com/test/users',requestOptions)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetch('https://7n9cvyktjg.execute-api.us-east-1.amazonaws.com/test/hangar',requestOptions)
      .then((response) => response.json())
      .then((json) => setBuildingData(json))
      .catch((error) => console.error(error))
      .finally(() => setBuildingLoading(false));
  }, []);

  //console.log('data: ',data)
  //console.log('building data: ',BuildingData)
 //  console.log('location data: ',LocationData)

  var storage = []
  var len = LocationData.length
   
   for(var j = 0; j < len;j++)
   {
   //  console.log(data[j].LAST_FLT)
      storage.push(LocationData[j])
      storage[j].index = j
    // console.log("STORAGE",storage)
   }
 //  console.log('LEN',len)
  // console.log('STORAGE: ',storage)
 
   var loc = []

   for(var f = 0; f < BuildingData.length;f++)
   {
   //  console.log(data[j].LAST_FLT)

     for (var y=0;y < len;y++){

      if (BuildingData[f].building_Name == storage[y].LOCATION){
        loc[f] = storage[y].serial_No
        //console.log("TRUE TRUE TRUE")
      }

     }

     if (loc[f] == null || loc[f]==undefined){
       loc[f] = 'N/A'
     }
    // console.log("STORAGE",storage)
   }
     //console.log("LOC",loc)
 //var here = data[0].userFirttName

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
        itemID : 
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
        <Text style={{color: 'black'}}>
          Add A New Admin User
        </Text>
      </TouchableOpacity>
   </View>
   <View style={styles.infoButton}>
      <TouchableOpacity style={{}} 
        onPress={ (adminViewer) ? 
          () => navigation.navigate('AddUser',{itemID,adminViewer}) : 
          () => alert('You are not an Administrator. You can not new add users') } >
        <Text style={{color: 'black'}}>
          Add A New Viewer User
        </Text>
      </TouchableOpacity>
   </View>
  </View>
 </View>

 <View style={styles.hangar}> 
  <View style={styles.hangarInfo}>
   <Text style={styles.titleText}>Maintain Aircraft</Text>
   <View style={styles.infoButton}>
      <TouchableOpacity style={{}} 
       onPress={ (adminViewer) ? 
        () => navigation.navigate('Add Aircraft',{itemID,adminViewer}) : 
        () => alert('You are not an Administrator. You can not new admin users') } >
        <Text style={{color: 'black'}}>
          Add Aircraft
        </Text>
      </TouchableOpacity>
   </View>
   <View style={styles.infoButton}>
      <TouchableOpacity style={{}} 
        onPress={ (adminViewer) ? 
          () => navigation.navigate('Remove Aircraft',{itemID,adminViewer}) : 
          () => alert('You are not an Administrator. You can not new add users') } >
        <Text style={{color: 'black'}}>
          Delete Aircraft
        </Text>
      </TouchableOpacity>
   </View>
  </View>
 </View>

 <View style={styles.hangarBlue}> 
  <View style={styles.hangarInfo}>
   <Text style={styles.titleText}>Bay 3</Text>
   <View style={styles.infoButton}>
      <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Hangar',{itemID,adminViewer,aircraftID,hangarID:3})} >
        <Text style={styles.boxText}>
          View Building Info
        </Text>
      </TouchableOpacity>
   </View>
  </View>
 </View>


 <View style={styles.hangar}> 
  <View style={styles.hangarInfo}>
   <Text style={styles.titleText}>Hangar 731  </Text>
   <View style={styles.infoButton}>
      <TouchableOpacity style={{}} 
       onPress={() => navigation.navigate('Hangar',{itemID,adminViewer,aircraftID,hangarID:0})}>
        <Text  style={styles.boxText}>
          View Hangar Info
        </Text>
      </TouchableOpacity>
   </View>
   <View style={styles.infoButton}>
      <TouchableOpacity style={{}} >
      <View style={styles.topText}>
       {isLocation ? <ActivityIndicator/> : (
        <Text style={styles.boxText}>
          Aircraft #: {loc[0]} 
        </Text>
        )}
      </View>
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
        <Text  style={styles.boxText}>
          View Hangar Info
        </Text>
      </TouchableOpacity>
   </View>
   <View style={styles.infoButton}>
      <TouchableOpacity style={{}} >
      <View style={styles.topText}>
      {isLocation ? <ActivityIndicator/> : (
        <Text style={styles.boxText}>
          Aircraft #: {loc[1]} 
        </Text>
        )}
      </View>
      </TouchableOpacity>
   </View>
  </View>
 </View>



 <View style={styles.hangar}> 
  <View style={styles.hangarInfo}>
   <Text style={styles.titleText}>CTK</Text>
   <View style={styles.infoButton}>
      <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Hangar',{itemID,adminViewer,aircraftID,hangarID:3})} >
        <Text style={styles.boxText}>
          View Building Info
          
        </Text>
      </TouchableOpacity>
   </View>
   <View style={styles.infoButton}>
      <TouchableOpacity style={{}} >
      <View style={styles.topText}>
      {isLocation ? <ActivityIndicator/> : (
        <Text style={styles.boxText}>
          Aircraft #: {loc[3]} 
        </Text>
        )}
      </View>
      </TouchableOpacity>
   </View>
  </View>
 </View>

 <View style={styles.hangarBlue}> 
  <View style={styles.hangarInfo}>
   <Text style={styles.titleText}>AGE</Text>
   <View style={styles.infoButton}>
      <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Hangar',{itemID,adminViewer,aircraftID,hangarID:3})} >
        <Text style={styles.boxText}>
          View Building Info
        </Text>
      </TouchableOpacity>
   </View>
   <View style={styles.infoButton}>
      <TouchableOpacity style={{}} >
      <View style={styles.topText}>
      {isLocation ? <ActivityIndicator/> : (
        <Text style={styles.boxText}>
          Aircraft #: {loc[3]} 
        </Text>
        )}
      </View>
      </TouchableOpacity>
   </View>
  </View>
 </View>
 

 <View style={styles.hangar}> 
  <View style={styles.hangarInfo}>
   <Text style={styles.titleText}>Maintenance Bay</Text>
   <View style={styles.infoButton}>
      <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Hangar',{itemID,adminViewer,aircraftID,hangarID:4})} >
        <Text style={styles.boxText}>
          View Building Info
        </Text>
      </TouchableOpacity>
   </View>
   <View style={styles.infoButton}>
      <TouchableOpacity style={{}} >
      <View style={styles.topText}>
      {isLocation ? <ActivityIndicator/> : (
        <Text style={styles.boxText}>
          Aircraft #: {loc[4]} 
        </Text>
        )}
      </View>
      </TouchableOpacity>
   </View>
  </View>
 </View>



 <View style={styles.runway}>
 <View style={styles.textRun}>
   <Text style={styles.titleText}>Ramp</Text>
  </View>
  <View style={styles.grid}>
   <View style={styles.boxRow}>

   <View style={styles.bigBlue}> 
      <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Hangar',{itemID,adminViewer,aircraftID,hangarID:6})} >
        <Text style={styles.inputText} >S - 1</Text>
         <View >
          {isLocation ? <ActivityIndicator/> : (
           <Text style={styles.inputText}>
             {loc[6]} 
           </Text>
           )}
         </View>
      </TouchableOpacity>
    </View>

    <View style={styles.bigBlue}> 
      <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Hangar',{itemID,adminViewer,aircraftID,hangarID:10})} >
        <Text style={styles.inputText} >S - 2</Text>
        <View >
          {isLocation ? <ActivityIndicator/> : (
           <Text style={styles.inputText}>
             {loc[10]} 
           </Text>
           )}
         </View>
      </TouchableOpacity>
    </View>
   </View>

   <View style={styles.boxRow}>
    <View style={styles.bigBlue}>
    <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Hangar',{itemID,adminViewer,aircraftID,hangarID:11})} >
        <Text style={styles.inputText} >S - 3</Text>
        <View >
          {isLocation ? <ActivityIndicator/> : (
           <Text style={styles.inputText}>
             {loc[11]} 
           </Text>
           )}
         </View>
    </TouchableOpacity>
    </View>

    <View style={styles.bigBlue}>
    <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Hangar',{itemID,adminViewer,aircraftID,hangarID:12})} >
        <Text style={styles.inputText} >S - 4</Text>
        <View >
          {isLocation ? <ActivityIndicator/> : (
           <Text style={styles.inputText}>
             {loc[12]} 
           </Text>
           )}
         </View>
    </TouchableOpacity>
    </View>
   </View>
   <View style={styles.boxRow}>
    <View style={styles.bigBlue}>
    <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Hangar',{itemID,adminViewer,aircraftID,hangarID:13})} >
        <Text style={styles.inputText} >S - 5</Text>
        <View >
          {isLocation ? <ActivityIndicator/> : (
           <Text style={styles.inputText}>
             {loc[13]} 
           </Text>
           )}
         </View>
    </TouchableOpacity>
    </View>
    <View style={styles.bigBlue}>
    <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Hangar',{itemID,adminViewer,aircraftID,hangarID:14})} >
        <Text style={styles.inputText} >S - 6</Text>
        <View >
          {isLocation ? <ActivityIndicator/> : (
           <Text style={styles.inputText}>
             {loc[14]} 
           </Text>
           )}
         </View>
    </TouchableOpacity>
    </View>
   </View>
   <View style={styles.boxRow}>
    <View style={styles.bigBlue}>
    <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Hangar',{itemID,adminViewer,aircraftID,hangarID:15})} >
        <Text style={styles.inputText} >S - 7</Text>
        <View >
          {isLocation ? <ActivityIndicator/> : (
           <Text style={styles.inputText}>
             {loc[15]} 
           </Text>
           )}
         </View>
    </TouchableOpacity>
    </View>
    <View style={styles.bigBlue}>
    <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Hangar',{itemID,adminViewer,aircraftID,hangarID:16})} >
        <Text style={styles.inputText} >S - 8</Text>
        <View >
          {isLocation ? <ActivityIndicator/> : (
           <Text style={styles.inputText}>
             {loc[16]} 
           </Text>
           )}
         </View>
    </TouchableOpacity>
    </View>
   </View>
   <View style={styles.boxRow}>
    <View style={styles.bigBlue}> 
    <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Hangar',{itemID,adminViewer,aircraftID,hangarID:17})} >
        <Text style={styles.inputText} >S - 9</Text>
        <View >
          {isLocation ? <ActivityIndicator/> : (
           <Text style={styles.inputText}>
             {loc[17]} 
           </Text>
           )}
         </View>
    </TouchableOpacity></View>
    <View style={styles.bigBlue}>
    <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Hangar',{itemID,adminViewer,aircraftID,hangarID:7})} >
        <Text style={styles.inputText} >S - 10</Text>
        <View >
          {isLocation ? <ActivityIndicator/> : (
           <Text style={styles.inputText}>
             {loc[7]} 
           </Text>
           )}
         </View>
      </TouchableOpacity>
    </View>
   </View>
   <View style={styles.boxRow}>
    <View style={styles.bigBlue}>
    <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Hangar',{itemID,adminViewer,aircraftID,hangarID:8})} >
        <Text style={styles.inputText} >S - 11</Text>
        <View >
          {isLocation ? <ActivityIndicator/> : (
           <Text style={styles.inputText}>
             {loc[8]} 
           </Text>
           )}
         </View>
    </TouchableOpacity>
    </View>
    <View style={styles.bigBlue}>
    <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Hangar',{itemID,adminViewer,aircraftID,hangarID:9})}>
        <Text style={styles.inputText} >S - 12</Text>
        <View >
          {isLocation ? <ActivityIndicator/> : (
           <Text style={styles.inputText}>
             {loc[9]} 
           </Text>
           )}
         </View>
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
    backgroundColor:'gray',
    
  },
  main:{
    flex: 0.2, 
    justifyContent: 'center', 
    alignItems: 'center', 
   // backgroundColor:'#b31942',
    borderWidth: 5,
    borderColor: '#000080',
    backgroundColor: '#FFF',
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
    color: '#000', 
    //fontSize: 15, 
    padding: 5,
  //  width: '90%'
  
  },
  topBold: {
    flex:.5, 
    color: '#000', 
   // fontSize: 15, 
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
  boxText: {
 //   width: '50%',
    color: '#000'
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
    color: '#000'
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
    borderWidth: 1,
    color: '#000',
    backgroundColor: '#FFF'
  //  backgroundColor: '#0a3161'
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
    color: 'black',
    alignSelf:'center'
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
  // backgroundColor: '#b31942', 
   backgroundColor: '#FFF', 
   borderColor: '#000080' ,
   borderWidth: 5,
   height: 275,
   borderRadius: 40,
   margin: 30
  },
  hangarBlue : {
    flex: .5,
    justifyContent: 'center',
   // backgroundColor: '#b31942', 
    backgroundColor: '#FFF', 
    borderColor: '#000080',
    borderWidth: 5,
    height: 275,
    borderRadius: 40,
    margin: 30
   },
  runway : {
    flex: .5,
    justifyContent: 'center',
    borderColor: '#000080',
    borderWidth: 5,
   // backgroundColor: '#b31942', 
    backgroundColor: '#FFF',
    height: 800,
    borderRadius: 40,
    margin: 30
   },
  bigBlue : {
    justifyContent: 'center',
    alignItems: 'center', 
    borderRadius: 20, 
    borderColor: '#000',
    borderWidth: 1,
    width: 70, 
    height: 70,
    backgroundColor: '#FFF', 
   // backgroundColor: '#0a3161'
    

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