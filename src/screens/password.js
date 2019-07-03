import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import MyButton from "../modules/common/MyButton";
import Title from "../modules/common/Title";

export default class Password extends Component {
  static navigationOptions = {
    title: "Help"
  };

  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Title style={styles.title} title="Forgot your password?" />
        <Image style={styles.img} source={require("../img/girl.png")} />
        <View style={styles.formContainer}>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <TextInput style={styles.input} placeholder="email" />
          </View>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <MyButton
              buttonTxt="Submit"
              onPress={() => {
                this.props.navigation.navigate("Teste");
              }}
            />
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Login");
              }}
            >
              <Text style={styles.subtitle}>
                Wanna go back? <Text style={styles.click}>Login</Text>
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
    alignItems: "center",
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
    width: 66,
    height: 171
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
    marginTop: 5,
    fontSize: 11,
    alignSelf: "flex-end"
  },

  click: {
    color: "#0755FD",
    fontWeight: "bold"
  }
});
