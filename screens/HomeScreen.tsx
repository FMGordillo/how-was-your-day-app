import { Button, StyleSheet, TextInput } from "react-native";
import { Text, View } from "../components/Themed";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rate My Day!</Text>
      <TextInput style={styles.input} placeholder="Who did you talk to?" />
      <TextInput style={styles.input} placeholder="Rate your interaction" />
      <TextInput style={styles.input} placeholder="Any comments around it?" />
      <Button title="Add interaction" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    width: "80%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
