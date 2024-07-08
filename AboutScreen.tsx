import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import storage from '@react-native-firebase/storage';
import getStorage from '@react-native-firebase/storage'
import ref from '@react-native-firebase/storage'
import getDownloadURL from '@react-native-firebase/storage'
const AboutScreen = () => {

  const [url, seturl] = useState<string | undefined>()

  useEffect(() => {
  
    func();
  
  }, [])

  const func = async () => 
  {
    const reference = storage().ref('bhiya.jpg');
    console.log(reference);
    const durl = await storage().ref('bhiya.jpg').getDownloadURL();
    console.log(durl);
    seturl(durl);
  }
  
  return (
    <View>
      <View style={styles.container}>
      <Text>AboutScreen</Text>
      {url ? (
        <Image source={{ uri: url }} style={styles.image} />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginTop: 20,
  },
});

export default AboutScreen