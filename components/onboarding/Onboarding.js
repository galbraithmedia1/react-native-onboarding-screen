import { StyleSheet, Text, View, FlatList,  Animated } from 'react-native'
import { useState, useRef } from 'react'
import React from 'react'
import slides from './assets/slides'
import OnboardingItem from './OnboardingItem'
import Paginator from './Paginator'
import AsyncStorage from '@react-native-async-storage/async-storage'
import NextBtn from './NextBtn'


export default Onboarding = () => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollx = useRef(new Animated.Value(0)).current

  const viewableitemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index)
  }).current

    const slidesRef =useRef(null)

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current


  const scrollTo = async () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({index: currentIndex +1});
    } else {
      try {
          await AsyncStorage.setItem('@viewedOnboarding', 'true')
      } catch (error) {
        console.log("error @scrollTo: ", error)
      }
    }

  
  }

  return (
    <View style={styles.container}>
    <View style={[styles.list, {flex: 3}]}> 
      <FlatList data={slides} renderItem={({item}) => <OnboardingItem item={item} />}
       horizontal
       showsHorizontalScrollIndicator={false}
      pagingEnabled
      bounces={false}
      keyExtractor={item => item.id}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollx } } }],{

        useNativeDriver: false,
      }
        )}
        onViewableItemsChanged={viewableitemsChanged}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={32}
        ref={slidesRef}
      />
    </View>
    <View style={styles.page}>
    <Paginator data={slides} scrollx={scrollx}/>
    <NextBtn scrollTo={scrollTo} percentage={(currentIndex +1) * (100 / slides.length)}/>
    </View>
    </View>
  )
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems  : 'center',
    justifyContent: 'flex-end',
  },
  
  page: {
    width: 100,
    // height: 100,
    // flex: 1,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'green',
    bottom: 50,
    position: 'absolute',
  }
})