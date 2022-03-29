import { StyleSheet, View, TouchableOpacity , Animated} from "react-native";
import Svg, { G, Circle } from "react-native-svg";
import React, { useEffect, useRef } from "react";
import { AntDesign } from "@expo/vector-icons";

const NextBtn = ({ percentage }) => {
  const size = 128;
  const stokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - stokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  const animation = (toValue) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duratin: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener(
      ({ value }) => {
        const strokeDashoffset = circumference - (circumference * value) / 100;
        if (progressRef.current) {
          {
            progressRef.current.setNativeProps({
              strokeDashoffset,
            });
          }
        }
      },
      [percentage]
    );
  });

  return (
    <View>
      <Svg width={size} height={size}>
        <G rotation="-90" orgin={center}>
          <Circle
            stroke="#E6E7E8"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={stokeWidth}
          />
          <Circle
            stroke="#E6E7E8"
            cx={center}
            ref={progressRef}
            cy={center}
            r={radius}
            strokeWidth={stokeWidth}
            strokeDasharray={circumference}
          />
        </G>
      </Svg>
      <TouchableOpacity style={styles.button} activeOpascity={0.6}>
        <AntDesign name="arrowright" size={32} color="#E6E7E8" />
      </TouchableOpacity>
    </View>
  );
};

export default NextBtn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    backgroundColor: "#f4338f",
    borderRadius: 100,
    padding: 20,
  },
});
