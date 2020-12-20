import * as React from "react";
import { Button } from "react-native-paper";

const LoginButton = () => (
  <Button
    icon="camera"
    mode="contained"
    onPress={() => console.log("Pressed")}
    style={{
      marginVertical: 10,
      marginHorizontal: 20,
    }}
  >
    เข้าสู่ระบบ
  </Button>
);

export default LoginButton;
