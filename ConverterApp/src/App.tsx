import React, { useState } from 'react';

import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  View,
} from 'react-native';


// Constants 
import { currencyByRupee } from './constants';

// Components 
import CurrencyButton from './components/CurrencyButton';


// Snackbar :- npm i react-native-snackbar
import Snackbar from 'react-native-snackbar';

// FlatList is far better than ScrollView 


function App(): React.JSX.Element {

  const [inputValue , setInputValue] = useState('')

  const [resultValue , setResultValue] = useState('')

  const [targetCurrency , setTargetCurrency] = useState('')

  const buttonPressed = (targetValue : Currency) =>{
      if(!inputValue){
        return Snackbar.show({
          text : "Enter a value to convert",
          backgroundColor : "#E8290B",
          textColor : "#000000"
        })
      }

      const inputAmount = parseFloat(inputValue)
      if(!isNaN(inputAmount)){
        const convertedValue = inputAmount * targetValue.value

        const result = `${targetValue.symbol}  ${convertedValue.toFixed(2)}`


        setResultValue(result)

        setTargetCurrency(targetValue.name)


      }else{
         return Snackbar.show({
          text : "Not a Valid number to Convert",
          backgroundColor : "#E8290B",
          textColor : "#000000"
        })
      }
  }
    return (
        <View style={styles.container}>
          <View style={styles.topContainer}>
            < View style={styles.rupeesContainer}>
              <Text style={styles.rupee}> ₹ </Text>
                <TextInput
                  maxLength={14}
                   style={styles.TextInputStyle}
                  value={inputValue}
                  clearButtonMode="always" // only for IOS
                  onChangeText={setInputValue}
                  keyboardType="number-pad"
                  placeholder="Enter amount in Rupees"
                />
            </View>

            {resultValue && (
              <Text style={styles.resultTxt}> {resultValue} </Text>
            )}
          </View>

          <View style={styles.bottomContainer}>
            <FlatList
              numColumns={2}
              data={currencyByRupee}
              keyExtractor={item => item.name} // Without this the performance will not come .
              renderItem={({item}) => (
                <Pressable
                  style={[
                    styles.button,
                    targetCurrency === item.name && styles.selected,
                  ]}
                  onPress={() => buttonPressed(item)}>
                  <CurrencyButton {...item} />
                </Pressable>
              )}
            />
         </View>
        </View>
    );
  };

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BB2CD9',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 30,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,
    fontSize: 22,
    color: '#000000',
    fontWeight: '900',
  },
  TextInputStyle: {
    borderWidth: 5,
    justifyContent: 'center',
    borderRadius: 10,
    width: 300,
    backgroundColor: '#F9DDA4',
    borderColor: '#616C6F',
  },
  rupeesContainer: {
    flexDirection: 'row',

    alignItems: 'center',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,
    margin: 40,
    height: 45,
    borderRadius: 20,
    backgroundColor: '#fff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#EEC213',
  },
});

export default App;