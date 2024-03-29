import React, { Component } from "react";
import signUpLogo from "../img/SignUp-logo.png";

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
import styled from "styled-components";

const Container = styled.View`
  align-self: center;
  justify-content: space-around;
  flex: 1;
`;

const FormContainer = styled.View`
  flex: 0.8;
  justify-content: center;
`;

const Img = styled.Image`
  width: 281px;
  height: 192px;
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

export default class SignUp extends Component {
  static navigationOptions = {
    title: "Sign Up"
  };

  constructor(props) {
    super(props);
  }

  submitHandler = event => {
    event.preventDefault();

    const requestBody = {
      query: `
        mutation {
          createUser(name: "${this.state.name}", email: "${
        this.state.email
      }", password: "${this.state.password}") {
            _id
            email
          }
        }
      `
    };

    fetch("http://localhost:3000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    });
  };

  state = {
    name: "",
    email: "",
    password: ""
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <Container>
        <Title style={{ fontSize: 40 }} title="Welcome" />
        <Img source={signUpLogo} />
        <FormContainer>
          <View style={{ flex: 1.3, justifyContent: "flex-end" }}>
            <Input
              placeholder="name"
              value={name}
              onChangeText={value => this.setState({ name: value })}
            />
            <View style={{ height: 20 }} />
            <Input
              autoCorrect={false}
              placeholder="email"
              value={email}
              onChangeText={value => this.setState({ email: value })}
            />
            <View style={{ height: 20 }} />
            <Input
              autoCorrect={false}
              secureTextEntry
              placeholder="password"
              value={password}
              onChangeText={value => this.setState({ password: value })}
            />
          </View>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <MyButton buttonTxt="Sign Up" onPress={this.submitHandler} />
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Login");
              }}
            >
              <Subtitle>
                Already have an account? <Click>Login</Click>
              </Subtitle>
            </TouchableOpacity>
          </View>
        </FormContainer>
      </Container>
    );
  }
}
