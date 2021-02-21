import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";
const height = Dimensions.get("window").height;
export default LessonEdit = ({ route, navigation }) => {
  const [teacher, setTeacher] = useState("");
  const [unit, setUnit] = useState("");
  const [objetive, setObjetive] = useState("");
  const [homework, setHomework] = useState("");
  const [keywords, setKeywords] = useState("");
  const [comments, setComments] = useState("");

  const { fecha } = route.params;
  const actions = [
    {
      text: "Editar",
      name: "bt_edit",
      position: 1,
    },
  ];

  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    //   style={styles.container}
    // >
    //   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    //     <View style={styles.inner}>
    //       <Text style={styles.header}>Header</Text>
    //       <TextInput placeholder="Username" style={styles.textInput} />
    //       <View style={styles.btnContainer}>
    //         <Button title="Submit" onPress={() => null} />
    //       </View>
    //     </View>
    //   </TouchableWithoutFeedback>
    // </KeyboardAvoidingView>

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          
            <View style={styles.dates}>
              <View style={styles.originalDate}>
                <View>
                  <Text style={styles.labelDate}>Original date</Text>
                </View>
                <View>
                  <Text style={styles.valueDate}>November 10th 2021</Text>
                </View>
              </View>
              <View style={styles.newDate}>
                <View>
                  <Text style={styles.labelDate}>New date</Text>
                </View>
                <View>
                  <Text style={styles.valueDate}>November 11th 2021</Text>
                </View>
              </View>
            </View>
            <View style={styles.dates}>
              <View style={styles.originalDate}>
                <View>
                  <Text style={styles.labelDate}>Teacher</Text>
                </View>
                <View>
                  <Text style={styles.valueDate}>Gustavo</Text>
                </View>
              </View>
            </View>

            <View style={styles.dates}>
              <View style={styles.originalDate}>
                <View>
                  <Text style={styles.labelDate}>Unit</Text>
                </View>
                <View>
                  <TextInput
                    style={styles.TextInput}
                    onChangeText={(text) => setUnit(text)}
                    value={unit}
                  />
                </View>
              </View>
            </View>

            <View style={styles.dates}>
              <View style={styles.originalDate}>
                <View>
                  <Text style={styles.labelDate}>Objective</Text>
                </View>
                <View>
                  <TextInput
                    style={styles.TextInput}
                    onChangeText={(text) => setObjetive(text)}
                    value={objetive}
                  />
                </View>
              </View>
            </View>

            <View style={styles.dates}>
              <View style={styles.originalDate}>
                <View>
                  <Text style={styles.labelDate}>Homework</Text>
                </View>
                <View>
                  <TextInput
                    style={styles.TextInput}
                    onChangeText={(text) => setHomework(text)}
                    value={homework}
                  />
                </View>
              </View>
            </View>

            <View style={styles.dates}>
              <View style={styles.originalDate}>
                <View>
                  <Text style={styles.labelDate}>
                    Palabras Claves (Keywords)
                  </Text>
                </View>
                <View>
                  <TextInput
                    style={styles.TextInput}
                    onChangeText={(text) => setKeywords(text)}
                    value={keywords}
                  />
                </View>
              </View>
            </View>

            <View style={styles.dates}>
              <View style={styles.originalDate}>
                <View>
                  <Text style={styles.labelDate}>Comments</Text>
                </View>
                <View>
                  <TextInput
                    multiline={true}
                    numberOfLines={4}
                    style={styles.TextInput}
                    onChangeText={(text) => setComments(text)}
                    value={comments}
                  />
                </View>
              </View>
            </View>
          
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    padding: 10,
    flex: 1,
  },
  dates: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  originalDate: {
    flex: 6,
    display: "flex",
  },
  newDate: {
    flex: 5,
    display: "flex",
  },
  labelDate: {
    fontSize: 22,
    fontWeight: "bold",
  },
  valueDate: {
    fontSize: 16,
  },
  comments: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  TextInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 5,
  },
  inner: {
    padding: 24,
    paddingBottom:90,
    flex: 1,
    justifyContent: "space-around",
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
  },
});
