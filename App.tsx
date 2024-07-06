
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import PredictScreen from './screens/PredictScreen';
import SuggestionScreen from './screens/SuggestionScreen';
import MeasureScreen from './screens/MeasureScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
   <NavigationContainer>
     <Stack.Navigator>
     <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Welcome'}}/>
     <Stack.Screen name = "Predict" component={PredictScreen} options={{title: 'Welcome'}}/>
     <Stack.Screen name = "Suggestion" component={SuggestionScreen} options={{title : 'Welcome'}}/>
     <Stack.Screen name = 'Measure' component={MeasureScreen} options={{title: 'Welcome to Measure Screen'}}/>
     <Stack.Screen name = 'About' component={AboutScreen} options={{title: 'Welcome'}}/>
     </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App

