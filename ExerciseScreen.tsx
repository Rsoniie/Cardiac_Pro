import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import React from 'react'

const ExerciseScreen = ({navigation} : any) => {
  return (
    <View>
      <View style = {styles.cardContainer}>
        <TouchableOpacity style = {styles.card} onPress={ () => navigation.navigate('Yoga')}>
          <Text style = {styles.texts}>Yoga Basics</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.card} onPress={ () => navigation.navigate('General Fitness')}>
          <Text style = {styles.texts}>General Fitness</Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.cardContainer}>
        <TouchableOpacity style = {styles.card} onPress={ () => navigation.navigate('Hard_Cardiac')}>
          <Text style = {styles.texts}>Cardiac</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.card} onPress={() => navigation.navigate('See_Report')}>
          <Text style = {styles.texts}>Report</Text>
        </TouchableOpacity>
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



export default ExerciseScreen