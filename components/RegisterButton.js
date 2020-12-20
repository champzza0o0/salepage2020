import * as React from "react";
import { Button } from "react-native-paper";

const RegisterButton = () => (
  <Button
    icon="plus"
    mode="contained"
    onPress={() => console.log("สมัครสมาชิก")}
    style={{
      marginVertical: 20,
      marginHorizontal: 20,
    }}
    color={"green"}
  >
    สมัครสมาชิก
  </Button>
);

export default RegisterButton;
