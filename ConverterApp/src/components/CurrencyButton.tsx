import React from 'react'

import type { PropsWithChildren } from 'react'

import {View , Text , StyleSheet } from 'react-native'


type CurrencyButtonProps = PropsWithChildren<{
    name : string;
    flag : string;
}>


const CurrencyButton = (props : CurrencyButtonProps) : React.JSX.Element =>{

    return(
        <View style={styles.buttonContainer}>
           <Text style={styles.flag}> {props.flag}</Text>
           <Text style={styles.country}> {props.name}</Text>
        </View>
    )
}


const styles = StyleSheet.create({

     buttonContainer:{
        alignItems : 'center'
     },

     flag:{
        fontSize:28,
        marginBottom:4,
        color:"#FFFFFF"
     },
     country:{
        fontSize:28,
        marginBottom:4,
        color:"#FFFFFF"
     }
})


export default CurrencyButton