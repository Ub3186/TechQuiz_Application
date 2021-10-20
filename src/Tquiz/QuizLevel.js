import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function QuizLevel({ navigation }) {

  // we store the language that we chose from the home page in this variable
  const LANGUAGE = navigation.getParam('language')
  return (
    <View style={styles.container}>
      <View style={styles.select}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          Choose difficulty Level
        </Text>
      </View>

      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Quizpage", {language: LANGUAGE, difficulty: 'basic'})}
      >
        <View>
          <Text style={styles.btntext}>Basic</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Quizpage", {language: LANGUAGE, difficulty: 'intermediate'})}
      >
        <View>
          <Text style={styles.btntext}>Intermediate</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Quizpage", {language: LANGUAGE, difficulty: 'complex'})}
      >
        <View>
          <Text style={styles.btntext}>Complex</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    flex: 1,
    alignItems: "center",
  },

  Button: {
    backgroundColor: "#59cbbd",
    width: '50%',
    padding: 10,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 10,
  },

  btntext: {
    color: "black",
    fontSize: 18,
  },
  select: {
    position: "relative",
    fontSize: 100,
    alignItems: "center",
    padding: 40,
    paddingTop: 80,
  },
});
