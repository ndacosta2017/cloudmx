import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, ScrollView,TouchableOpacity, Button, TextInput } from 'react-native';

var example = true
var name = 'bob'
var job = 'MC45'
var plane = 'C7-45'
var location = 'D-4'

function MapScreen ({route, navigation}) {



  const { itemID, adminViewer} = route.params;

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
  
<View style={{flex: 1,backgroundColor:'#0a3161'}}>
<View style={{flex: 0.2, justifyContent: 'center', alignItems: 'center', backgroundColor:'#b31942',borderRadius:30,margin:30 }}>
  <Text style={styles.topText}>
      Hello, User {itemID}
  </Text>
  <Text style={styles.topText}>
      You are in {modo} Mode
  </Text> 
<Text style={{flex:.5, fontSize: 20, paddingTop: 1}}>
</Text>
</View>

<ScrollView style={{flex: 1,}}>
 <View style={styles.hangar}>
   
  <View style={styles.hangarInfo}>

   <Text style={styles.titleText}>Hangar 745</Text>
   <View style={styles.infoButton}>
      <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Hangar',{itemID,adminViewer})} >
        <Text style={{color: 'white'}}>
          View Hangar Info
        </Text>
      </TouchableOpacity>
   </View>
  </View>


   <View style={styles.grid}>
   <View style={styles.boxRow}>
   <View style={styles.bigBlue}>
      <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Air',{itemID,adminViewer})} >
        <Text style={{color: 'white'}} >A-1</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.bigBlue}>
      <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('All',{itemID,adminViewer})} >
        <Text style={{color: 'white'}} >A-2</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.bigBlue}></View>
   </View>
   <View style={styles.boxRow}>
    <View style={styles.bigBlue}></View>
    <View style={styles.bigBlue}></View>
    <View style={styles.bigBlue}></View>
   </View>
   <View style={styles.boxRow}>
    <View style={styles.bigBlue}></View>
    <View style={styles.bigBlue}></View>
    <View style={styles.bigBlue}></View>
   </View>
   <View style={styles.boxRow}>
    <View style={styles.bigBlue}></View>
    <View style={styles.bigBlue}></View>
    <View style={styles.bigBlue}></View>
   </View>
  </View>
 </View>

 <View style={styles.runway}>
 <View style={styles.textRun}>
   <Text style={styles.titleText}>Runway</Text></View>
  <View style={styles.grid}>
   <View style={styles.boxRow}>
   <View style={styles.bigBlue}> 
      <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Air',{itemID,adminViewer})} >
        <Text style={{color: 'white'}} >M-1</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.bigBlue}> 
      <TouchableOpacity style={{}} 
        onPress={() => navigation.navigate('Air',{itemID,adminViewer})} >
        <Text style={{color: 'white'}} >M-2</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.bigBlue}></View>
   </View>
   <View style={styles.boxRow}>
    <View style={styles.bigBlue}></View>
    <View style={styles.bigBlue}></View>
    <View style={styles.bigBlue}></View>
   </View>
   <View style={styles.boxRow}>
    <View style={styles.bigBlue}></View>
    <View style={styles.bigBlue}></View>
    <View style={styles.bigBlue}></View>
   </View>
  </View>
 </View>
</ScrollView>
  
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
  boxRow: {
    position: 'relative',
    top: 30, 
    bottom: 30,
    flex: 1,
    flexDirection: 'row', 
    justifyContent:"space-evenly"


//{flex: 1, position: 'relative', flex: 1,flexDirection: 'row', justifyContent:"space-evenly"

  },
  textRun: {
    justifyContent: 'center',
    alignItems: 'center',
    padding:20  
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
    fontSize: 20, 
    paddingTop: 10,
    paddingBottom: 5
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
    fontSize: 30,
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
   height: 800,
   borderRadius: 40,
   margin: 30
  },
  runway : {
    flex: .5,
    justifyContent: 'center',
    backgroundColor: 'green', 
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
    backgroundColor: example ? 'blue' : 'black'

  },
  input : {
    width: 200,
    borderColor: 'grey',
    borderBottomColor: 'black'
  },
  rightHead:{
    color: '#b31942',
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