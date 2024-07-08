import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import storage from '@react-native-firebase/storage'

const YogaChild = ({ route } : any) => {

  const { name } = route.params;
  console.log(name);
  
  const [url, seturl] = useState<string | undefined>()

  

  useEffect(() => {
  
    func();
  
  }, [])

  const func = async () => 
  {
    const reference = await storage().ref(`/Fitness/${name}.jpg`).getDownloadURL();
    console.log(reference);
    seturl(reference);
  }


  
  const handleTimer = async () => 
  {
       
  }

  return (

    <View style={styles.container}>
    {url ? (
            <Image source={{ uri: url}} style={styles.card} />
               ) : (
           <Text>Loading...</Text>
           )}
           <TouchableOpacity onPress={handleTimer}>
            <Text style = {styles.timer}>Start Timer</Text>
            </TouchableOpacity>
  </View>


  )
}

const{width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Center vertically
    alignItems: 'center',     // Center horizontally
    backgroundColor: '#FFFFFF', // Light background color for contrast
  },
  card: {
    marginTop: height/20,
    height: height / 1.5, // Half of the screen height
    width: width * 0.8, // 80% of the screen width
    backgroundColor: '#DDDDDD', // White background for the card
    borderRadius: 10, // Rounded corners
    
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    padding: 10, // Padding inside the card
  },
  cardText: {
    fontSize: 18, // Font size for the card text
    color: '#333', // Text color
  },

  timer : 
  {
    fontWeight: 'bold', 
    backgroundColor: '#DDDDDD',
    padding: 20,
    paddingHorizontal: 70,
    borderRadius: 15
  }
});


export default YogaChild