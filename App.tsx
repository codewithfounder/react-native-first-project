import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import BouncyCheckbox from 'react-native-bouncy-checkbox';
// Form validation
import * as Yup from 'yup'
import { Formik } from 'formik';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'Should be min of 4 characters')
  .max(16, 'Should be max of 16 charactor')
  .required('Length is required')
})

export default function App() {

  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const[upperCase, setupperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const[symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) =>{
    let characterList = '';

    const upperCaseChares = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqustuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*_+';

    if(upperCase){
      characterList += upperCaseChares
    }
    if(lowerCase){
      characterList += lowerCaseChars
    }
    if(numbers){
      characterList += digitChars
    }
    if(symbols){
      characterList += specialChars
    }

    const passwordResult = createPassword(characterList, passwordLength)

    setPassword(passwordResult)
    setIsPassGenerated(true)
  }

  const createPassword = (characters: string, passwordLength: number) =>{
    let result = '';
    for(let i = 0; i<passwordLength; i++){
      const charecterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(charecterIndex);
    }
    return result;
  }

  const resetPasswordState = ()=>{
    setPassword('')
    setIsPassGenerated(false)
    setLowerCase(true)
    setupperCase(false)
    setNumbers(false)
    setSymbols(false)
  }

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
       initialValues={{ passwordLength: '' }}
        validationSchema={PasswordSchema}
       onSubmit={ values=>{
        console.log(values);
        generatePasswordString(+values.passwordLength)
       } }
     >
       {({
         values,
         errors,
         touched,
         isValid,
         handleChange,
         handleSubmit,
         isSubmitting,
         handleReset
         /* and other goodies */
       }) => (
        <>
        <View style={styles.inputWrapper}>
          <View style={styles.inputColumn}>
           <View>
           <Text style={styles.heading}>Password Length</Text>
            {touched.passwordLength && errors.passwordLength && (
              <Text style={styles.errorText}>
                {errors.passwordLength}
              </Text>
            )}
           </View>
            <TextInput style={styles.inputStyle}
            value={values.passwordLength}
            onChangeText={handleChange('passwordLength')}
            placeholder='Ex. 8 '
            keyboardType='numeric'
            />
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.heading}>Include lowercase</Text>
          <BouncyCheckbox
          disableText 
          isChecked={lowerCase}
          onPress={()=> setLowerCase(!lowerCase)}
          fillColor='#29ABB7'
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.heading}>Include Uppercase letters</Text>
          <BouncyCheckbox
          disableText
          isChecked={lowerCase}
          onPress={()=> setupperCase(!upperCase)}
          fillColor='#FED85D'
          />
        </View>
        <View style={styles.inputWrapper}>
        <Text style={styles.heading}>Include Number</Text>
          <BouncyCheckbox
          disableText 
          isChecked={lowerCase}
          onPress={()=> setNumbers(!numbers)}
          fillColor='#C9A0DC'
          />
        </View>
        <View style={styles.inputWrapper}>
        <Text style={styles.heading}>Include Symbols</Text>
          <BouncyCheckbox
          disableText 
          isChecked={lowerCase}
          onPress={()=> setSymbols(!symbols)}
          fillColor='#FC80A5'
          />
        </View>

        <View style={styles.formActions}>
          <TouchableOpacity
          disabled={!isValid}
          style={styles.primaryBtn}
          onPress={() => handleSubmit()}
          >
            <Text style={styles.primaryBtnTxt}>Generate Password</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.secondaryBtn}
          onPress={()=>{
            handleReset(); 
            resetPasswordState()
          }}
          >
            <Text style={styles.primaryBtnTxt}>
            Reset
            </Text>
          </TouchableOpacity>
        </View>
        </>
       )}
          </Formik>
        </View>
        {isPassGenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result:</Text>
            <Text style={styles.description}>Copy Password</Text>
            <Text style={styles.generatedPassword}>{password}</Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  heading:{
    color: '#FFFFFF',
    textAlign: 'center'
  },
  errorText:{
    color: 'red'
  },
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#FFFFFF'
  },
  inputWrapper:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  inputColumn:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20
  },
  inputStyle:{
    color: '#FFFFFF',
    borderWidth: 1,
    width: 100,
    borderColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5
  },
  formActions:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 30
  },
  buttonText:{
    color: '#FFFFFF'
  },
  primaryBtn:{
    padding: 10,
    backgroundColor: '#29ABB7',
    borderRadius: 6
  },
  primaryBtnTxt:{
    color: '#FFFFFF'
  },
  secondaryBtn:{
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 6
  },
  card:{
    backgroundColor: '#FFFFFF',
    marginHorizontal: 15,
    padding: 10,
    borderRadius: 10,
    marginTop: 20
  },
  cardElevated:{},
  subTitle:{
    fontSize: 16,
    fontWeight: '600'
  },
  description:{
    marginVertical: 10
  },
  generatedPassword:{
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    color: '#FFFFFF'

  }
})