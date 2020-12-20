import * as React from "react";
import { TextInput } from "react-native-paper";

const Username = () => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      label="อีเมล"
      value={text}
      onChangeText={(text) => setText(text)}
      style={{
        marginVertical: 10,
        marginHorizontal: 20,
      }}
    />
  );
};

export default Username;
