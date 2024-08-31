import React, { useState } from "react";
import { Text, Button, View, StyleSheet } from "react-native";

const Project4 = () => {
  const [pressCount, setPressCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        You've pressed the button: {pressCount} time(s)
      </Text>
      <Button
        title={`Pressed ${pressCount} time(s)`}
        onPress={() => setPressCount(pressCount + 1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
    padding: 10,
  },
  text: {
    marginBottom: 10,
    fontSize: 18,
  },
});

export default Project4;
