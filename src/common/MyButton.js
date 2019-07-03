import React, { Component } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Dimensions
} from "react-native";

export default class MyButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.button}>
        <Text style={styles.buttonTxt}>{this.props.buttonTxt}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "stretch",
    padding: 12,
    borderRadius: 5,
    backgroundColor: "#0755FD",
    justifyContent: "center",
    alignItems: "center"
  },

  buttonTxt: {
    fontSize: 24,
    color: "#fff"
  }
});
