import * as React from "react";
import { TextInput } from "react-native-paper";

const Password = () => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      label="รหัสผ่าน"
      value={text}
      onChangeText={(text) => setText(text)}
      style={{
        marginVertical: 10,
        marginHorizontal: 20,
      }}
    />
  );
};

export default Password;
