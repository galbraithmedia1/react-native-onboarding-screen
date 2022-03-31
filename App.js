import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import Onboarding from "./components/onboarding/Onboarding";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

import Home from "./components/Home/Home";
import LoginPage from'./components/login/Login';

// const Stack = createStackNavigator({
//   Home: Home,
//   Onboarding: Onboarding,
//   LoginPage: LoginPage

// });


const Loading = () => {
  return (
  <View>
    <Text>Hello</Text>
    <ActivityIndicator size="large" />
  </View>
  )
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [viewedOnboarding, setViewedOnboarding] = useState(false);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("@viewedOnboarding");

      if (value !== null) {
        setViewedOnboarding(true);
      }
    } catch (error) {
      console.log("error @viewedOnboarding: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkOnboarding();
  }, [viewedOnboarding]);

  return (
    <View style={styles.container}>
      {loading ? <Loading /> : viewedOnboarding ? <Home /> : <Onboarding />}
      {/* <Onboarding/> */}
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
