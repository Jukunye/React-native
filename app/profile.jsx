import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import React from "react";

const profile = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>profile</Text>
      </View>
      <TextInput
        style={{ height: 60, borderColor: "green", borderWidth: 2 }}
        defaultValue="You can type in me"
      />
      <Image
        source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png" }}
        style={{ width: 200, height: 200 }}
      />
    </ScrollView>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
