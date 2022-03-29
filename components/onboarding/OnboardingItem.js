import { StyleSheet, Text, View , Image, useWindowDimensions, ImageBackground} from 'react-native'
import React from 'react'



const OnboardingItem = ({item}) => {
    const {width} = useWindowDimensions()
  return (
    <View style={[styles.container, {width}]}>
     <Image source={item.image} style={[styles.image, {width, resizeMode: 'cover'}]}/>

     <View style={{felx: 0.3}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
     </View>
    </View>
  )
}

export default OnboardingItem

const styles = StyleSheet.create({

    container: {
        flex: 1,justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green',
    },
    image: { 
        flex: 1,
        height: '100%',
        width: '100%',
        position: 'absolute',
    justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
        marginBottom: 10,
        color: '#493d8a',
        textAlign: 'center',
        paddingHorizontal: 64
    }
})