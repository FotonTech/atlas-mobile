import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";

import NavigationBar from "react-native-navbar";
import Post from "../modules/common/Post";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Feed extends Component {
  static navigationOptions = {
    title: "Feed"
  };

  state = {};

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <Icon style={styles.icon} color="#dadada" name="search" size={20} />
          <TextInput placeholder="Search" style={{ marginLeft: 5 }} />
        </View>
        <View style={styles.feedBox}>
          <Image style={styles.img} source={require("../img/girl.png")} />
          <View style={{ width: 10 }} />
          <View style={styles.newPost}>
            <TextInput
              placeholder="What's on your mind?"
              placeholderTextColor="black"
              style={styles.feedInput}
            />
          </View>
        </View>
        <Post />
        <NavigationBar
          style={styles.navBar}
          leftButton={
            <TouchableOpacity>
              <Icon name="bars" size={20} />
            </TouchableOpacity>
          }
          rightButton={
            <TouchableOpacity>
              <Icon name="users" size={20} />
            </TouchableOpacity>
          }
        />
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

  feedBox: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },

  img: {
    alignSelf: "center",
    height: 40,
    width: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 20
  },

  searchBar: {
    flexDirection: "row",
    borderRadius: 25,
    margin: 10,
    padding: 5,
    height: 50,
    backgroundColor: "#efefef"
  },

  icon: {
    alignSelf: "center",
    margin: 10
  },

  newPost: {
    width: 305,
    height: 90,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#ddd",
    backgroundColor: "#fff"
  },

  navBar: {
    justifyContent: "space-evenly"
  }
});
