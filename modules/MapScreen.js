import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, ScrollView,TouchableOpacity, Button, TextInput } from 'react-native';

var example = true
var name = 'bob'
var job = 'MC45'
var plane = 'C7-45'
var location = 'D-4'

function MapScreen ({route, navigation}) {



  const { itemID, adminViewer,aircraftID,hangarID} = route.params;

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

  //var ritemID = itemID
  // onPress={() => navigation.navigate('Hangar',{itemID,adminViewer})}

  return (
  
<View style={styles.overall}>

<View style={styles.main}>
  <Text style={styles.topText}>
    Hello, User {itemID}.
  </Text>
  <Text style={styles.topText}>
    You are in {modo} Mode
  </Text>
  <Text style={styles.topBold}
  onPress={() => navigation.navigate('All',{itemID,adminViewer,aircraftID,hangarID})}>
    Click Here to View All Aircraft
  </Text>
</View>

<ScrollView style={{flex: 1,}}>

 <View style={styles.hangar}> 
  <View style={styles.hangarInfo}>
   <Text style={styles.titleText}>Hangar 731 {JSON.stringify(aircraftID)}</Text>
   <View style={styles.infoButton}>
      <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Hangar',{itemID:0,adminViewer,aircraftID,hangarID})} >
        <Text style={{color: 'white'}}>
          View Hangar Info
        </Text>
      </TouchableOpacity>
   </View>
   <View style={styles.infoButton}>
      <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('All',{itemID,adminViewer,aircraftID,hangarID})} >
        <Text style={{color: 'white'}}>
          View All Aircraft
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
        onPress={() => navigation.navigate('Hangar',{itemID:0,adminViewer,aircraftID,hangarID})} >
        <Text style={{color: 'white'}}>
          View Hangar Info
        </Text>
      </TouchableOpacity>
   </View>
   <View style={styles.infoButton}>
      <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('All',{itemID,adminViewer,aircraftID,hangarID})} >
        <Text style={{color: 'white'}}>
          View All Aircraft
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
    backgroundColor:'#0a3161'
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
    fontSize: 40,
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
    backgroundColor: 'blue'
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
    backgroundColor: '#D2AF39', 
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
    backgroundColor: example ? 'blue' : 'black'

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