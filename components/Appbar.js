import * as React from "react";
import { Appbar } from "react-native-paper";

const Headerbar = () => {
  const _goBack = () => console.log("Went back");
  const Brandname = "Habitscan";
  const _handleSearch = () => console.log("Searching");

  const _handleMore = () => console.log("Shown more");

  return (
    <Appbar.Header>
      <Appbar.Content title={Brandname} subtitle="โปรแกรมวิเคราะห์นิสัย" />
    </Appbar.Header>
  );
};

export default Headerbar;
