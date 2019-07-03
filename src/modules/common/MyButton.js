import React, { Component } from "react";
import { TouchableOpacity, Text, View } from "react-native";

import styled from "styled-components";

const Button = styled.TouchableOpacity`
  align-self: stretch;
  padding: 12px;
  border-radius: 5px;
  background-color: #0755fd;
  justify-content: center;
  align-items: center;
`;

const ButtonTxt = styled.Text`
  font-size: 24px;
  color: #fff;
`;

export default class MyButton extends Component {
  render() {
    return (
      <Button onPress={this.props.onPress}>
        <ButtonTxt>{this.props.buttonTxt}</ButtonTxt>
      </Button>
    );
  }
}
