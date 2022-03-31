import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonForLogin = ({navigation}) => {
  return (
   <TouchableOpacity style={styles.button}>
       <Text style={styles.btn}>Login</Text>

   </TouchableOpacity>
  )
}

export default ButtonForLogin

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#32BBCB',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold'
    }
})