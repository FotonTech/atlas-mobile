import React, { Component } from "react";
import { View } from "react-native";
import styled from "styled-components";

const Title2 = styled.Text`
  font-family: Verdana;
  text-align: center;
  font-weight: bold;
`;

export default class Title extends Component {
  render() {
    return (
      <View>
        <Title2 style={this.props.style}>{this.props.title}</Title2>
      </View>
    );
  }
}
