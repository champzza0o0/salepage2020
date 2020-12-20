import { StatusBar } from "expo-status-bar";
import NoneButton from "../components/Button";
import React from "react";
import Headerbar from "../components/Appbar";
import Logo from "../components/Logo";
import Username from "../components/Username";
import Password from "../components/Password";
import LoginButton from "../components/LoginButton";
import RegisterButton from "../components/RegisterButton";

import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
} from "react-native";
const image = { uri: "https://reactjs.org/logo-og.png" };
export default function Login() {
  return (
    <SafeAreaView>
      <ImageBackground
        source={image}
        style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}
      ></ImageBackground>
      <Headerbar />
      <Logo />
      <Text
        style={{
          textAlign: "center",
          marginVertical: 8,
          fontSize: 20,
          color: "green",
        }}
      >
        กรุณาเข้าสู่ระบบ
      </Text>
      <Username></Username>
      <Password></Password>
      <LoginButton></LoginButton>
      <RegisterButton></RegisterButton>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
