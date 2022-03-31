import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = () => {

    const clearOnboarding = async () => {
        try {
            await AsyncStorage.removeItem('@viewedOnboarding')
        } catch (error) {
            console.log("error @clearOnboarding: ", error)
        }
    }
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={clearOnboarding}>
        <Text>Clear Onboarding</Text>

      </TouchableOpacity>
      {/* <Button 
      title='Go to Login'
        onPress={() => navigation.navigate('LoginPage')}
      /> */}
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})