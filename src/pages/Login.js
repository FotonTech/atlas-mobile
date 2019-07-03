import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions
} from "react-native";
import MyButton from "../common/MyButton";
import Title from "../common/Title";

export default class Login extends Component {
  static navigationOptions = {
    title: "Login"
  };

  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Title style={styles.title} title="Atlas" />
        <Image style={styles.img} source={require("../img/Login-logo.png")} />
        <View style={styles.formContainer}>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <TextInput style={styles.input} placeholder="email" />
            <View style={{ height: 20 }} />
            <TextInput
              secureTextEntry
              style={styles.input}
              placeholder="password"
            />
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Password");
              }}
            >
              <Text style={styles.subtitle}>
                <Text style={styles.click}>Forgot</Text> your password?
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <MyButton
              buttonTxt="Login"
              onPress={() => this.props.navigation.navigate("Feed")}
            />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("SignUp")}
            >
              <Text style={styles.subtitle}>
                Don't have an account yet?{" "}
                <Text style={styles.click}>Sign Up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    justifyContent: "space-around",
    flex: 1
  },

  title: {
    fontSize: 64,
    fontFamily: "Verdana",
    textAlign: "center",
    fontWeight: "bold"
  },

  img: {
    width: screenWidth,
    height: screenHeight / 4
  },

  formContainer: {
    flex: 0.8,
    padding: 20,
    justifyContent: "center"
  },

  input: {
    alignSelf: "stretch",
    padding: 12,
    fontSize: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#ddd",
    backgroundColor: "transparent"
  },

  subtitle: {
    padding: 5,
    fontSize: 11,
    alignSelf: "flex-end"
  },

  click: {
    color: "#0755FD",
    fontWeight: "bold"
  }
});
