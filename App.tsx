import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
// import {NavigationContainer} from "@react-navigation/native"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const App = () => {
  return (
    <View style ={styles.container}>
      <View>
      <Text style = {styles.header}>Cardiac Health App</Text>
      </View>
      <NavigationContainer>
      <View style = {styles.cardContainer}>
        <TouchableOpacity style = {styles.card}>
          <Text style = {styles.texts}>Want to Predict ?</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.card}>
          <Text style = {styles.texts}>Want to Chat ?</Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.cardContainer}>
        <TouchableOpacity style = {styles.card}>
          <Text style = {styles.texts}>Want to Measure ?</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.card}>
          <Text style = {styles.texts}>About Us</Text>
        </TouchableOpacity>
      </View>
      </NavigationContainer>
      <View style = {styles.footer_top}>
        <Text style = {styles.texts}> 
          Quotes...
        </Text>
      </View>
    </View>
  )
}


const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#FFFFFF',
    },
     header : 
     {
      padding: 20,
      margin: 10,
      backgroundColor: '#DDDDDD',
      borderRadius: 15, 
      textAlign: 'center',
      fontSize: 25,
      fontWeight: 'bold'
  
     },
     card : 
     {
      marginTop: 30,
       width: width/(2.5),
       backgroundColor: '#DDDDDD',
       padding: 30,
       margin: 10,
       borderRadius: 10,
       height: height/4,
       textAlign: 'center',
       justifyContent: 'center',
       alignContent: 'center',
       alignItems: 'center',
     },
      cardContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 10,
    },
    footer_top : 
    {
      backgroundColor: '#DDDDDD',
      padding: 60,
      borderRadius: 10,
      marginTop: 50,
      textAlign: 'center',
      justifyContent: 'center',
      alignContent: 'center'
    },
    texts :
    {
         fontSize: 25,
         fontStyle: 'italic',
         fontFamily : 'sans-serif',
         fontWeight : 'bold',
         textAlign: 'center'
    }
  
  }
)


export default App