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
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

function App(navigation) {
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerStyle: {
          backgroundColor: '#0a3161',
        },
        headerTitleAlign: 'center', 
        headerTintColor: '#fff',
        headerTitleStyle: {
          //,
        },
      }}
      >

      <Stack.Screen name="Sign-in" component={SiginScreen} />
      
      <Stack.Screen name="Map" component={MapScreen} />

      <Stack.Screen name="Hangar" component={HangarScreen} />
      
      <Stack.Screen name="Air" component={AirCraftScreen}  
         options={{title: 'Aircraft'}} />

      <Stack.Screen name="History" component={MaintenanceHistoryScreen} 
         options={{title: 'Maintenance History'}}/>
 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;