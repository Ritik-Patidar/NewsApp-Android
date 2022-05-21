import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import Svg, {
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop
} from 'react-native-svg';

const Loader = (props) => {

  const { 
    size = 50,
  } = props ;


  return (
    <View style={[styles.container, styles.horizontal]}>

      <ActivityIndicator size={size} color="hsl(223,90%,55%)" />


      {/* <Svg style={style.pl} viewBox="0 0 128 128" width="128px" height="128px" xmlns="http://www.w3.org/2000/svg">
        <Defs>
            <LinearGradient style={style.pl-grad} x1="0" y1="0" x2="0" y2="1">
                <Stop offset="0%" stop-color="hsl(193,90%,55%)" />
                <Stop offset="100%" stop-color="hsl(223,90%,55%)" />
            </LinearGradient>
        </Defs>
        <Circle style={style.pl__ring} r="56" cx="64" cy="64" fill="none" stroke="hsla(0,10%,10%,0.1)" stroke-width="16"
            stroke-linecap="round" />
        <Path style={style.pl__worm}
            d="M92,15.492S78.194,4.967,66.743,16.887c-17.231,17.938-28.26,96.974-28.26,96.974L119.85,59.892l-99-31.588,57.528,89.832L97.8,19.349,13.636,88.51l89.012,16.015S81.908,38.332,66.1,22.337C50.114,6.156,36,15.492,36,15.492a56,56,0,1,0,56,0Z"
            fill="none" stroke="url(#pl-grad)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"
            stroke-dasharray="44 1111" stroke-dashoffset="10" />
    </Svg> */}

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default Loader;