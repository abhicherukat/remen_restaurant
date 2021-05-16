import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import * as Colors from '../Utils/Colors';



import UserHomeScreen from '../Screens/Users/User';
import NoodlesDetailsScreen from '../Screens/Users/NoodlesDetailsPage';




const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      
        <Stack.Screen name="Home" component={UserHomeScreen} />
    
              <Stack.Screen
          name="NoodlesDetails"
          component={NoodlesDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
