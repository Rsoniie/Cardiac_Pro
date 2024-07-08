import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity, FlatList, Alert, Button} from 'react-native'
import React, { useReducer, useState } from 'react'
import CircleRating from './Circlerating'

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
  const [Alcoholrate, setAlcoholRate] = useState(0)
  const[Smokerate, setSmokerate] = useState(0)
  const[faintRate, setFaintRate] = useState(0)
  const[Result, setResult] = useState(0)



  







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
    
    const handleChedk = async () =>
    {
      var res = 32;
      if(age > 30)
      {
        res = res + 0.06*32;
      }
       var bmi = BMI - 25;
       if(bmi > 0)
       {
        res = res + (bmi*4.3)*0.32;
       }
       if(130 < LDL  && LDL < 159)
       {
        res = res + (5)*0.32;
       }
       else if(LDL > 160)
       { 
          res = res + 16*(0.32);
       }
       if(HDL < 40)
       {
        res = res + 3*(0.32);
       }
       if(HDL > 60)
       {
        res = res - 5*(0.32);
       }
       if(dBP > 80)
       {
        var x = dBP - 80;
        x = x/10;
        if(age > 40)
        {
        res = res + x*(0.32);
        }
        else 
        {
          res = res + x*(0.16);
        }
       }
       if(sBP > 80)
        {
         var x = dBP - 80;
         x = x/10;
         if(age > 40)
         {
         res = res + x*(0.32);
         }
         else 
         {
           res = res + x*(0.16);
         }
        }
        if(BSBM < 70 || BSBM > 100)
        {
          res = res + 3.8*(0.32);
        }
        if(BSBM < 70 || BSBM > 150)
        {
            res = res + 3.8*(0.32);
        }
        if(Relation === 'parents')
        {
            res = res + 10.4*(0.32);
        }
        if(Relation === 'siblings')
        {
          res = res + 17.4*(0.32);
        }
        if(Relation === 'uncle')
        {
          res = res + 6.4*(0.32);
        }
        if(Relation === 'grandparents')
        {
          res = res + 1.1*(0.32);
        }
        if(Relation === 'self')
        {
          res = res + 23.7*(0.32);
        }
        if(Time === 1)
        {
          res = res + 14*(0.32);
        }
        if(Time === 3)
        {
          res = res + 7*(0.32);
        }
        if(Time == 6)
        {
          res = res + 1.75*(0.32);
        }
        if(Time >= 12)
        {
          res = res + 0.88*(0.32);
        }
        if(faintRate < 5)
        {
          res = res + faintRate*1.6*(0.32);
        }
        else 
        {
          res = res + 9.5*(0.32);
        }
        if(Alcoholrate < 5)
        {
          res = res + Alcoholrate*2.1*(0.32);
        }
        else 
        {
          res = res + 13*(0.32);
        }

        if(Smokerate < 3)
        {
          res = res + 4*(0.32);
        }
        else if(Smokerate < 4)
        {
          res = res + 7*(0.32);
        }
        else 
        {
          if(age > 40)
          {
          res = res + 25*(0.32);
          }
          else
          {
            res = res + 13*(0.32);
          }
        }
        setResult(res);
        setResult(res);
        console.log(Result);
  
        Alert.alert('Risk Factor', `Your Risk Factor is ${Result}`, [
         
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
        
    }


    // console.log(Result);
  return (
    <View style = {styles.container}>
      <View style = {styles.box_box}>
      <TextInput style = {styles.inputText} placeholder='Please Enter your Age' keyboardType='numeric' onChangeText={handleAge}></TextInput>
      <TextInput style = {styles.inputText} placeholder='Please Enter Your BMI' keyboardType='numeric' onChangeText={handleBMI}></TextInput>
      </View>
      <View style = {styles.box_box}>
      <TextInput style = {styles.inputText} placeholder='Your LDL cholesterol' keyboardType='numeric' onChangeText={handleLDL}></TextInput>
      <TextInput style = {styles.inputText} placeholder='Your HDL  Cholesterol' keyboardType='numeric' onChangeText={handleHDL}></TextInput>
      </View>
      <View style = {styles.box_box}>
      <TextInput style = {styles.inputText} placeholder='Your Diastole Pressure' keyboardType='numeric' onChangeText={handleDiastole_BP}></TextInput>
      <TextInput style = {styles.inputText} placeholder='Your Systole Pressure' keyboardType='numeric' onChangeText={handlesystole_BP}></TextInput>
      </View>
      <View style = {styles.box_box}>
      <TextInput style = {styles.inputText} placeholder='Sugar level before Meal' keyboardType='numeric' onChangeText={handleSugarBM}></TextInput>
      <TextInput style = {styles.inputText} placeholder='Sugar level after Meal' keyboardType='numeric' onChangeText={handleSugarAM}></TextInput>
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
      <View style = {styles.box_box}>
        <Text style = {styles.text}>How often you do / Occur any of these activities{'\n'}
          
        </Text>
      </View>

      <View style = {styles.howOften}>
        <View>
        <Text style = {styles.rate}>Alcohol consumption</Text>
        </View>
       <CircleRating rating={Alcoholrate} onChange={setAlcoholRate}/>
      </View>
      <View style = {styles.howOften}>
        <View>
        <Text style = {styles.rate}>Smoking</Text>
        </View>
       <CircleRating rating={Smokerate} onChange={setSmokerate}/>
      </View>
      <View style = {styles.howOften}>
        <View>
        <Text style = {styles.rate}>Fainting</Text>
        </View>
       <CircleRating rating={faintRate} onChange={setFaintRate}/>
      </View>


    <View>
      <Button title='Check' onPress={handleChedk}/>
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
     howOften : 
     {
      padding: 20, 
      flexDirection: 'row',
      justifyContent: 'space-around'
     },
     rate : 
     {
      
      backgroundColor: '#DDDDDD',
      borderRadius: 15, 
      padding: 15,
      justifyContent: 'space-around',
      width : width/3,
      textAlign: 'center'
     }
  }
)
export default MeasureScreen