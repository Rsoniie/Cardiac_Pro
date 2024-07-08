import { View, Text, TouchableHighlight, StyleSheet, Dimensions, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import storage from '@react-native-firebase/storage'

const Yoga = ({navigation} : any) => {

  const [url, seturl] = useState<string | undefined>()
  

  useEffect(() => {
  
    func();
  
  }, [])

  const func = async () => 
  {
    
    const durl = await storage().ref('/Fitness/fit.jpg').getDownloadURL();
    console.log(durl);
    seturl(durl);
  }
  // console.log(url);
  return (
   <ScrollView showsVerticalScrollIndicator = {true}> 
    <View style = {styles.container}>
      <View style = {styles.card_container}>
      <View style = {styles.card}>
          <TouchableOpacity style = {styles.imgcon} onPress={() => navigation.navigate('FitnessChild', {name : 'fittt'})}>
          {url ? (
            <Image source={{ uri: url }} style={styles.img} />
               ) : (
           <Text>Loading...</Text>
           )}
           <Text style = {styles.texts}> Squats </Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.card}>
          <TouchableOpacity style = {styles.imgcon} onPress={() => navigation.navigate('FitnessChild', {name : 'fittt'})}>
          {url ? (
        <Image source={{ uri: url }} style={styles.img} />
      ) : (
        <Text>Loading...</Text>
      )}
      <Text style = {styles.texts}>Plank</Text>
          </TouchableOpacity>
        </View>
        </View>
        <View style = {styles.card_container}>
      <View style = {styles.card}>
          <TouchableOpacity style = {styles.imgcon} onPress={() => navigation.navigate('FitnessChild', {name : 'fittt'})}>
          {url ? (
        <Image source={{ uri: url }} style={styles.img} />
      ) : (
        <Text>Loading...</Text>
      )}
      <Text style = {styles.texts}>Lungee</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.card}>
          <TouchableOpacity style = {styles.imgcon} onPress={() => navigation.navigate('FitnessChild', {name : 'fittt'})}>
          {url ? (
        <Image source={{ uri: url }} style={styles.img} />
      ) : (
        <Text>Loading...</Text>
      )}
      <Text style = {styles.texts}>Butt Bridge</Text>
          </TouchableOpacity>
        </View>
        </View>
        <View style = {styles.card_container}>
      <View style = {styles.card}>
          <TouchableOpacity style = {styles.imgcon} onPress={() => navigation.navigate('FitnessChild', {name : 'fittt'})}>
          {url ? (
        <Image source={{ uri: url }} style={styles.img} />
      ) : (
        <Text>Loading...</Text>
      )}
      <Text style = {styles.texts}>Push ups</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.card}>
          <TouchableOpacity style = {styles.imgcon} onPress={() => navigation.navigate('FitnessChild', {name : 'fittt'})}>
          {url ? (
        <Image source={{ uri: url }} style={styles.img} />
      ) : (
        <Text>Loading...</Text>
      )}
      <Text style = {styles.texts}>Crunches</Text>
          </TouchableOpacity>
        </View>
        </View>
        <View style = {styles.card_container}>
      <View style = {styles.card}>
          <TouchableOpacity style = {styles.imgcon} onPress={() => navigation.navigate('FitnessChild', {name : 'fittt'})}>
          {url ? (
        <Image source={{ uri: url }} style={styles.img} />
      ) : (
        <Text>Loading...</Text>
      )}
      <Text style = {styles.texts}>Jumping Jacks</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.card}>
          <TouchableOpacity style = {styles.imgcon} onPress={() => navigation.navigate('FitnessChild', {name : 'fittt'})}>
          {url ? (
        <Image source={{ uri: url }} style={styles.img} />
      ) : (
        <Text>Loading...</Text>
      )}
      <Text style = {styles.texts}>Skipping</Text>
          </TouchableOpacity>
        </View>
        </View>
        <View style = {styles.card_container}>
      <View style = {styles.card}>
          <TouchableOpacity style = {styles.imgcon} onPress={() => navigation.navigate('FitnessChild', {name : 'fittt'})}>
          {url ? (
            <Image source={{ uri: url }} style={styles.img} />
               ) : (
           <Text>Loading...</Text>
           )}
           <Text style = {styles.texts}>Triceps Dip</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.card}>
          <TouchableOpacity style = {styles.imgcon} onPress={() => navigation.navigate('FitnessChild', {name : 'fittt'})}>
          {url ? (
        <Image source={{ uri: url }} style={styles.img} />
      ) : (
        <Text>Loading...</Text>
      )}
      <Text style = {styles.texts}>Mountain Climber</Text>
          </TouchableOpacity>
        </View>
        </View>
        <View style = {styles.card_container}>
      <View style = {styles.card}>
          <TouchableOpacity style = {styles.imgcon} onPress={() => navigation.navigate('FitnessChild', {name : 'fittt'})}>
          {url ? (
            <Image source={{ uri: url }} style={styles.img} />
               ) : (
           <Text>Loading...</Text>
           )}
           <Text style = {styles.texts}>Incline Pushups</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.card}>
          <TouchableOpacity style = {styles.imgcon} onPress={() => navigation.navigate('FitnessChild', {name : 'fittt'})}>
          {url ? (
        <Image source={{ uri: url }} style={styles.img} />
      ) : (
        <Text>Loading...</Text>
      )}
      <Text style = {styles.texts}>Side Crunches</Text>
          </TouchableOpacity>
        </View>
        </View>
    </View>
    </ScrollView>
    
  )
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
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
    // justifyContent: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
    justifyContent: 'flex-start'
  },
  texts :
    {
          margin: 15,
         fontSize: 20,
         fontFamily : 'sans-serif',
         fontWeight : 'bold',
         textAlign: 'center'
    }
    ,
    img : 
    {
      width: 175, 
      height : 120, 
      borderRadius: 10
      
    },
    imgcon:
    {
      justifyContent: 'center'
    },
    container :
    {
       flex: 1, 
       padding: 20,
       backgroundColor: '#FFFFFF'
    },
    card_container : 
    {
      flexDirection: 'row',
      justifyContent : 'space-around'
    }
})

export default Yoga