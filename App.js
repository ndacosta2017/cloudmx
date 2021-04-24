import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, TextInput,Text,Button, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SiginScreen from './modules/SiginScreen';
import MapScreen from './modules/MapScreen';
import AirCraftScreen from './modules/AirCraftScreen';
import HangarScreen from './modules/HangarScreen';
import MaintenanceHistoryScreen from './modules/MaintenanceScreen';
import AllAircraftScreen from './modules/AllAircrafts'
import AddAircraftScreen from './modules/AddAircraft'
import RemoveAircraftScreen from './modules/RemoveAircraft'
import PassWordScreen from './modules/PassWordRecovery'
import AddUserScreen from './modules/AddUsers'
import AddAdminScreen from './modules/AddAdmin'
import { withSafeAreaInsets } from 'react-native-safe-area-context';


const Stack = createStackNavigator();

function App(navigation) {
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerStyle: {
         // backgroundColor: '#0a3161',
         backgroundColor: '#000',
        },
        headerTitleAlign: 'center', 
        headerTintColor: '#fff',
        headerTitleStyle: {
          //,
        },
      }}
      >

      <Stack.Screen name="Sign-in" component={SiginScreen} />

      <Stack.Screen name="Password" component={PassWordScreen} 
         options={{title: 'Password Recovery'}}/>
      
      <Stack.Screen name="Map" component={MapScreen} 
         options={{title: 'Home'}}/>

      <Stack.Screen name="Add Aircraft" component={AddAircraftScreen} 
         options={{title: 'Add Aircraft'}}/>

      <Stack.Screen name="Remove Aircraft" component={RemoveAircraftScreen} 
         options={{title: 'Remove Aircraft'}}/>

      <Stack.Screen name="AddUser" component={AddUserScreen} 
         options={{title: 'Add User'}}/>
      
      <Stack.Screen name="AddAdmin" component={AddAdminScreen} 
         options={{title: 'Add Admin'}}/>

      <Stack.Screen name="Hangar" component={HangarScreen} 
         options={{title: 'Building'}}/>
      
      <Stack.Screen name="Air" component={AirCraftScreen}  
         options={{title: 'Aircraft'}} />
         
      <Stack.Screen name="All" component={AllAircraftScreen} 
         options={{title: 'All Aircrafts'}}/>

      <Stack.Screen name="History" component={MaintenanceHistoryScreen} 
         options={{title: 'Maintenance History'}}/>
         
      
 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;