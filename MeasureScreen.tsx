import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity, FlatList } from 'react-native'
import React, { useReducer, useState } from 'react'



const MeasureScreen = () => {


  const[age, setAge] = useState(0)
  const[LDL, setLDL] = useState(0)
  const[HDL, setHDL] = useState(0)
  const[dBP, setdBP] = useState(0)
  const[sBP, setsBP] = useState(0)
  const[BSBM, setBSBM] = useState(0)
  const[BSAM, setBSAM] = useState(0)
  const[Show, setShow] = useState(false)
  const[Relation, setRelation] = useState('')
  const[ShowList, setShowList] = useState(false)
  const[Showtime, setShowtime] = useState(false)
  const[ShowDrug, setShowDrug] = useState(false)
  const[Time, setTime] = useState(0)
  const[BMI, setBMI] = useState(0)

  
  





  const handleAge = async (x:any) => 
  {
      setAge(x);
  }
  const handleBMI = async (x:any) => 
  {
    setBMI(x)
  }
  const handleLDL = async (x : any) => 
  {
       setLDL(x)
  }
  const handleHDL = async (x : any) => 
  {
      setHDL(x)
  }
  const handleDiastole_BP = async (x : any) => 
  {
      setdBP(x)
  }
  const handlesystole_BP = async (x : any) => 
  {
      setsBP(x)
  }
  const handleSugarBM = async (x : any) => 
    {
        setBSBM(x)
    }
    const handleSugarAM = async (x : any) => 
    {
        setBSAM(x)
    }
    const handleOption = async () => 
    {
        ShowList === true ? setShow(false) : setShow(true)
    }
    const handleShowList = async () => 
    {
       setShow(false)
       setShowList(true)
    }
    const handleHideList = async () => 
    {
        setShow(false)
        setShowList(false)
    }

    const handleRelation = async (value : any) => 
    {
      setRelation(value)
      setShowList(false)
      setShow(false)

    }

    const handleDrugOption = async () => 
    {
         Showtime === true ? setShowDrug(false) : setShowDrug(true)
    }
    const handleDrugTime = async () =>
    {
        setShowtime(true)
        setShowDrug(false)
    }

    const handleHideDrug = async () => 
    {
      setShowDrug(false)
      setShowtime(false)
    }
    const handleDrug = async (value : any) => 
    {
       setTime(value) 
       setShowDrug(false)
       setShowtime(false)
    }



    // console.log(age)
    // console.log(LDL)
    // console.log(HDL)
    // console.log(BSAM)
    // console.log(BSBM)
    // console.log(Relation)
    // console.log(Time)
  return (
    <View style = {styles.container}>
      <View style = {styles.box_box}>
      <TextInput style = {styles.inputText} placeholder='Please Enter your Age' onChangeText={handleAge}></TextInput>
      <TextInput style = {styles.inputText} placeholder='Please Enter Your BMI' onChangeText={handleBMI}></TextInput>
      </View>
      <View style = {styles.box_box}>
      <TextInput style = {styles.inputText} placeholder='Your LDL cholesterol' onChangeText={handleLDL}></TextInput>
      <TextInput style = {styles.inputText} placeholder='Your HDL  Cholesterol' onChangeText={handleHDL}></TextInput>
      </View>
      <View style = {styles.box_box}>
      <TextInput style = {styles.inputText} placeholder='Your Diastole Pressure' onChangeText={handleDiastole_BP}></TextInput>
      <TextInput style = {styles.inputText} placeholder='Your Systole Pressure' onChangeText={handlesystole_BP}></TextInput>
      </View>
      <View style = {styles.box_box}>
      <TextInput style = {styles.inputText} placeholder='Sugar level before Meal' onChangeText={handleSugarBM}></TextInput>
      <TextInput style = {styles.inputText} placeholder='Sugar level after Meal' onChangeText={handleSugarAM}></TextInput>
      </View>
      <View>
        <TouchableOpacity style = {styles.box_box}>
          <Text style = {styles.text} onPress={handleOption}>Do any of your family members or You have a history of cardiac arrest or other 
            heart-related conditions?</Text>
        </TouchableOpacity>

        {
          Show && (
            <View style = { styles.box_box}>
            <TouchableOpacity onPress={handleShowList}>
              <Text style = {styles.inputText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleHideList}>
              <Text style = {styles.inputText}>No</Text>
            </TouchableOpacity>
            </View>
          )
        }
      </View>
      <View>
        {ShowList && (
          <View>
          <View style = {styles.box_box}>
          <TouchableOpacity onPress={() => handleRelation('parents')}>
            <Text style = {Relation === 'parents' ? styles.clicked : styles.inputText}>Parents</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRelation('uncle')}>
            <Text style = {Relation === 'uncle' ? styles.clicked : styles.inputText}>Uncle or Aunt</Text>
          </TouchableOpacity>
          </View>
          <View style = {styles.box_box}>
            <TouchableOpacity onPress={() => handleRelation('siblings')}>
              <Text style = {Relation === 'siblings' ? styles.clicked : styles.inputText}>Siblings</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRelation('grandparents')}>
              <Text style = {Relation === 'grandparents' ? styles.clicked : styles.inputText}>Grand Parent</Text>
            </TouchableOpacity>
            </View>
            <View style = {styles.box_box}>
            <TouchableOpacity onPress={() => handleRelation('self')}>
              <Text style = {Relation === 'self' ? styles.clicked : styles.inputText}>Self</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRelation('')}>
              <Text style = {styles.inputText}>No one</Text>
            </TouchableOpacity>
            </View>
          </View>
          
        )
      }
      <TouchableOpacity style = {styles.box_box}>
          <Text style = {styles.text} onPress={handleDrugOption}>Have you ever used recreational drugs such as cocaine, 
            cannabis, opioids, or amphetamines?</Text>
        </TouchableOpacity>
      </View>
      <View>
      {
          ShowDrug && (
            <View style = { styles.box_box}>
            <TouchableOpacity onPress={handleDrugTime}>
              <Text style = {styles.inputText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleHideDrug}>
              <Text style = {styles.inputText}>No</Text>
            </TouchableOpacity>
            </View>
          )
        }
        <View>
          {
            Showtime && (
              <View>
              <View style = {styles.box_box}>
          <TouchableOpacity onPress={() => handleDrug(1)}>
            <Text style = {Time === 1 ? styles.clicked : styles.inputText}>Less than 1 month</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDrug(3)}>
            <Text style = {Time === 3 ? styles.clicked : styles.inputText}>Less than 3 months</Text>
          </TouchableOpacity>
          </View>
          <View style = {styles.box_box}>
            <TouchableOpacity onPress={() => handleDrug(6)}>
              <Text style = {Time === 6 ? styles.clicked : styles.inputText}>Less than 6 months</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDrug(12)}>
              <Text style = {Time === 12 ? styles.clicked : styles.inputText}>Less than a year</Text>
            </TouchableOpacity>
            </View>
            <View style = {styles.box_box}>
            <TouchableOpacity onPress={() => handleDrug(15)}>
              <Text style = {Time === 15 ? styles.clicked : styles.inputText}>More than one year</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDrug(0)}>
              <Text style = {styles.inputText}>Never</Text>
            </TouchableOpacity>
            </View>
            </View>
            )
          }
        </View>
      </View>
      <View>
        <Text>How often type questions....</Text>
      
      </View>
      
    </View>

    
  )
}


const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create (
  {

    container :
    {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFFFF',
    
    },
     inputText : 
     {
      padding: 15,
      backgroundColor: '#DDDDDD',
      borderRadius: 15,
      width : width/3,
      textAlign: 'center',
      justifyContent: 'center',
     },
     box_box :
     {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 10,
     },
     text :
     {
      marginTop: 15,
      padding: 10,
      width: width/(1.23),
      textAlign : 'center',
      backgroundColor: '#DDDDDD',
      borderRadius: 15
     }
     ,
     clicked : 
     {
      padding: 15,
      backgroundColor: '#FFFFFF',
      borderRadius: 15,
      width : width/3,
      textAlign: 'center',
      justifyContent: 'center',
     }, 
     starButton :
     {

     }
  }
)
export default MeasureScreen