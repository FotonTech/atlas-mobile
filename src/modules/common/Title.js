import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Title extends Component {
  render() {
    return (
      <View>
        <Text style={this.props.style}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {}
});
