import React, { Component } from "react";
import loginLogo from "../img/Login-logo.png";
import AuthContext from "../context/auth-context";

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
import { thisExpression } from "@babel/types";

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

  constructor(props) {
    super(props);
  }

  state = {
    email: "",
    password: "",
    token: "",
    userID: ""
  };

  submitHandler = async event => {
    event.preventDefault();

    const requestBody = {
      query: `
        query {
          login(email: "${this.state.email}", password: "${
        this.state.password
      }"){
            userID
            token
            tokenExpiration
          }
        }
      `
    };

    await fetch("http://localhost:3000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    });
    this.props.navigation.navigate("Feed");
  };

  login = (token, userID, tokenExpiration) => {
    this.setState({ token: token, userID: userID });
  };

  logout = () => {
    this.setState({ token: null, userID: null });
  };

  render() {
    const { email, password, token, userID } = this.state;

    return (
      <Container>
        <Title style={{ fontSize: 64 }} title="Atlas" />
        <Img source={loginLogo} />
        <AuthContext.Provider
          value={{
            token: this.state.token,
            userID: this.state.userID,
            login: this.login,
            logout: this.logout
          }}
        >
          <FormContainer>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Input
                placeholder="email"
                autoCorrect={false}
                value={email}
                onChangeText={value => this.setState({ email: value })}
              />
              <View style={{ height: 20 }} />
              <Input
                secureTextEntry
                autoCorrect={false}
                placeholder="password"
                value={password}
                onChangeText={value => this.setState({ password: value })}
              />
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
              <MyButton buttonTxt="Login" onPress={this.submitHandler} />
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("SignUp")}
              >
                <Subtitle>
                  Don't have an account yet? <Click>Sign Up</Click>
                </Subtitle>
              </TouchableOpacity>
            </View>
          </FormContainer>
        </AuthContext.Provider>
      </Container>
    );
  }
}
