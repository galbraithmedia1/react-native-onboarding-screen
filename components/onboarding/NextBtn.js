import { StyleSheet, Text, View } from 'react-native'
import Svg, {G,Circle} from 'react-native-svg'
import React from 'react'

const NextBtn = () => {

    const size =128
    const stokeWidth = 2
    const center =  size /2
    const radius = size / 2 - stokeWidth / 2
    const circumference = 2 * Math.PI * radius

  return (
    <View>
     <Svg width={size} height={size}>
         <Circle stroke='#E6E7E8' cx={center} cy={center} r={radius} strokeWidth={stokeWidth}/>
         <Cicle 
            stroke='#E6E7E8'
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={stokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (circumference * 25 / 100)}/> 
     </Svg>
    </View>
  )
}

export default NextBtn

const styles = StyleSheet.create({})