import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import Video from 'react-native-video';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import storage from '@react-native-firebase/storage'
// import { useIsFocused } from '@react-navigation/native';

const YogaChild = ({ route } : any) => {

  const { name } = route.params;
  console.log(name);
  
  const [url, seturl] = useState<string | undefined>()
  
  


  useEffect(() => {
  
    func();
  
  }, [])

  const func = async () => 
  {
    const reference = await storage().ref(`/Cardiac/${name}.mp4`).getDownloadURL();
    // const reference = await storage().ref(`./Cardiac/hrt.jpg`).getDownloadURL();
    console.log(reference);
    seturl(reference);
  }

  // const togglePlayPause = () => {
  //   setPaused(!paused);
  // };
  
  const handleTimer = async () => 
  {
       
  }

  return (

    <View style={styles.container}>
    {url ? (
            <Video source={{ uri: url}} style={styles.card} controls = {true} resizeMode='stretch'/>
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
    height: height /1.5, // Half of the screen height
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
    borderRadius: 15,
    margin: 20
  },
  video: {
    width: '100%',
    height: 200,
  },
  controlButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
  },
  controlButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});


export default YogaChild