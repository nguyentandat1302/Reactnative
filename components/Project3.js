import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

const Button = ({ onPress, text, buttonStyle }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.button, buttonStyle]}
  >
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

const Project3 = () => {
  return (
    <View style={styles.container}>
      <Button text="Say Hello" onPress={() => alert("Hello!")} />
      <Button
        text="Say goodbye"
        onPress={() => alert("Goodbye!")}
        buttonStyle={{ backgroundColor: "#4dc2c2" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#ff637c",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Project3;
