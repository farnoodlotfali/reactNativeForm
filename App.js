import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Picker, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [form, setForm] = useState({
    firstname: " ",
    lastname: " ",
    age: " ",
    gender: "",
  });
  const handleChange = (text, which) => {
    setForm({
      ...form,
      [which]: text,
    });
  };
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.textInputSection}>
          <Text style={styles.textInputLabel}>Firstname: </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Firstname"
            onChangeText={(text) => handleChange(text, "firstname")}
          />
        </View>
        <View style={styles.textInputSection}>
          <Text style={styles.textInputLabel}>LastName: </Text>
          <TextInput
            style={styles.textInput}
            placeholder="LastName"
            onChangeText={(text) => handleChange(text, "lastname")}
          />
        </View>
        <View style={styles.textInputSection}>
          <Text style={styles.textInputLabel}>Age: </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Age"
            onChangeText={(text) => handleChange(text, "age")}
          />
        </View>
        <View style={styles.textInputSection}>
          <Text style={styles.textInputLabel}>Gender: </Text>
          <Picker
            selectedValue={form.gender}
            style={styles.textInput}
            onValueChange={(itemValue, itemIndex) =>
              handleChange(itemValue, "gender")
            }
          >
            <Picker.Item label="male" value="male" />
            <Picker.Item label="female" value="female" />
          </Picker>
        </View>
      </View>

      <View style={styles.showValues}>
        <Text style={styles.showValues__header}>Your Info</Text>

        <View style={styles.showValueView}>
          <Text style={styles.showText}>your firstName: </Text>
          <Text style={styles.showValueViewAnswer}>{form.firstname}</Text>
        </View>
        <View style={styles.showValueView}>
          <Text style={styles.showText}>your lastName:</Text>
          <Text style={styles.showValueViewAnswer}>{form.lastname}</Text>
        </View>
        <View style={styles.showValueView}>
          <Text style={styles.showText}>your age: </Text>
          <Text style={styles.showValueViewAnswer}>{form.age}</Text>
        </View>
        <View style={styles.showValueView}>
          <Text style={styles.showText}>your gender: </Text>
          <Text style={styles.showValueViewAnswer}>{form.gender}</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 30,
    justifyContent: "space-evenly",
  },
  textInputSection: {
    flexDirection: "row",
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    marginBottom: 5,
  },
  textInputLabel: {
    alignSelf: "center",
    flex: 0.3,
    textAlign: "center",
  },
  textInput: {
    padding: 6,
    paddingLeft: 10,
    display: "flex",
    borderColor: "red",
    borderWidth: 1,
    flex: 1,
    borderRadius: 10,
    alignSelf: "auto",
  },
  showValues: {
    marginTop: 30,
    padding: 6,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 4,
  },
  showValueView: {
    display: "flex",
    width: "100%",
    marginBottom: 6,
    flexDirection: "row",
    marginTop: 5,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  showValues__header: {
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    color: "gray",
  },
  showValueViewAnswer: {
    textAlign: "center",
    fontWeight: "700",
    flex: 1,
  },
});
