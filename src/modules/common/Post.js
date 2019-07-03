import React, { Component } from "react";

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity
} from "react-native";

// import { Container } from './styles';

export default class Post extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 40 }} />
        <View style={styles.feedBox}>
          <View style={styles.person}>
            <Image style={styles.img} source={require("../img/girl.png")} />
            <View style={{ width: 15 }} />
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.name}>Nome Sobrenome</Text>
              <Text style={styles.time}>posted 15m ago</Text>
            </View>
          </View>
          <View style={{ height: 15 }} />
          <View style={styles.feedInput}>
            <Text>TESTEKKKKKKKKKKKKKK</Text>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.reactBt}>
                <Text style={{ color: "#0755FD", fontWeight: "bold" }}>
                  React
                </Text>
              </TouchableOpacity>
              <View style={{ width: 5 }} />
              <TouchableOpacity style={styles.replyBt}>
                <Text>Reply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fafafa"
  },

  feedBox: {},

  person: {
    flexDirection: "row"
  },

  name: {
    fontSize: 12,
    fontWeight: "bold",
    alignSelf: "center"
  },

  time: {
    fontSize: 10
  },

  img: {
    alignSelf: "center",
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ddd"
  },

  feedInput: {
    alignSelf: "center",
    padding: 5,
    width: 305,
    height: 96,
    // borderRadius: 5,
    // borderWidth: 1,
    // borderColor: "#dadada",
    backgroundColor: "#fff"
  },

  buttons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end"
  },

  reactBt: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd"
  },

  replyBt: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd"
  }
});
