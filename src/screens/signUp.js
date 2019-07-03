import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import { bold } from "ansi-colors";

import MyButton from "../modules/common/MyButton";
import Title from "../modules/common/Title";

export default class SignUp extends Component {
  static navigationOptions = {
    title: "Sign Up"
  };

  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Title style={styles.title} title="Welcome" />
        <Image style={styles.img} source={require("../img/SignUp-logo.png")} />
        <View style={styles.formContainer}>
          <View style={{ flex: 1.3, justifyContent: "flex-end" }}>
            <TextInput style={styles.input} placeholder="name" />
            <View style={{ height: 20 }} />
            <TextInput style={styles.input} placeholder="email" />
            <View style={{ height: 20 }} />
            <TextInput
              secureTextEntry
              style={styles.input}
              placeholder="password"
            />
          </View>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <MyButton
              style={styles.button}
              buttonTxt="Sign Up"
              onPress={() => this.props.navigation.navigate("Teste")}
            />
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Login");
              }}
            >
              <Text style={styles.subtitle}>
                Already have an account? <Text style={styles.click}>Login</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    flex: 1,
    backgroundColor: "#fafafa"
  },

  title: {
    fontSize: 36,
    fontFamily: "Verdana",
    textAlign: "center",
    fontWeight: "bold"
  },

  img: {
    width: 281,
    height: 192
  },

  formContainer: {
    flex: 0.8,
    justifyContent: "center"
  },

  input: {
    fontSize: 20,
    borderRadius: 5,
    borderWidth: 2,
    width: 305.86,
    height: 45.23,
    borderColor: "#ddd",
    backgroundColor: "transparent"
  },

  subtitle: {
    fontSize: 11,
    alignSelf: "flex-end"
  },

  click: {
    color: "#0755FD",
    fontWeight: "bold"
  }
});
