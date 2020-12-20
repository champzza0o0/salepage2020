import React from "react";
import { View, Image } from "react-native";
// import logo from "./assets/Habitscan.png";
const Logo = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        source={{
          uri:
            "https://www.habitscode.com/images/myimage/logo/logohabitscan.png",
        }}
        style={{
          width: 300,
          height: 300,
          marginTop: 50,
        }}
      />
    </View>
  );
};

export default Logo;
