// screens/HomeScreen.tsx

import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation} : any) => {
  return (
    <View style ={styles.container}>
      <View>
      <Text style = {styles.header}>Cardiac Health App</Text>
      </View>

      <View style = {styles.cardContainer}>
        <TouchableOpacity style = {styles.card} onPress={ () => navigation.navigate('Predict')}>
          <Text style = {styles.texts}>Want to Predict ?</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.card} onPress={ () => navigation.navigate('Suggestion')}>
          <Text style = {styles.texts}>Want Suggestions ?</Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.cardContainer}>
        <TouchableOpacity style = {styles.card} onPress={ () => navigation.navigate('Measure')}>
          <Text style = {styles.texts}>Want to Measure ?</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.card} onPress={() => navigation.navigate('Exercise')}>
          <Text style = {styles.texts}>Go to Exercise Zone</Text>
        </TouchableOpacity>
      </View>
  
      <View style = {styles.footer_top}>
        <Text style = {styles.texts}> 
          Quotes...
        </Text>
      </View>
    </View>
  );
};

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



export default HomeScreen;
// import { View, Text } from 'react-native'
// import React from 'react'

// export default function HomeScreen() {
//   return (
//     <View>
//       <Text>HomeScreen</Text>
//     </View>
//   )
// }
