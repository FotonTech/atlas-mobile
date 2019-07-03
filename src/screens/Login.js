import React, { Component } from "react";
import loginLogo from "../img/Login-logo.png";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions
} from "react-native";
import styled from "styled-components";
import MyButton from "../modules/common/MyButton";
import Title from "../modules/common/Title";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const Container = styled.View`
  align-self: center;
  justify-content: space-around;
  flex: 1;
`;

const Img = styled.Image`
  width: ${screenWidth};
  height: 150;
`;

const FormContainer = styled.View`
  flex: 0.8;
  padding: 20px;
  justify-content: center;
`;

const Input = styled.TextInput`
  align-self: stretch;
  padding: 12px;
  font-size: 20px;
  border: 2px solid #ddd;
  border-radius: 5px;
  background-color: transparent;
`;

const Subtitle = styled.Text`
  padding: 5px;
  font-size: 11px;
  align-self: flex-end;
`;

const Click = styled.Text`
  color: #0755fd;
  font-weight: bold;
`;

export default class Login extends Component {
  static navigationOptions = {
    title: "Login"
  };

  state = {};

  render() {
    return (
      <Container>
        <Title style={{ fontSize: 64 }} title="Atlas" />
        <Img source={loginLogo} />
        <FormContainer>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Input placeholder="email" />
            <View style={{ height: 20 }} />
            <Input secureTextEntry placeholder="password" />
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Password");
              }}
            >
              <Subtitle>
                <Click>Forgot</Click> your password?
              </Subtitle>
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
              <Subtitle>
                Don't have an account yet? <Click>Sign Up</Click>
              </Subtitle>
            </TouchableOpacity>
          </View>
        </FormContainer>
      </Container>
    );
  }
}
