import React, { Component } from "react";
import girl from "../img/girl.png";

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
import styled from "styled-components";

const Container = styled.View`
  align-items: center;
  flex: 1;
`;

const FormContainer = styled.View`
  flex: 0.8;
  justify-content: center;
`;

const Img = styled.Image`
  width: 66px;
  height: 171px;
`;

const Input = styled.TextInput`
  width: 305;
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

export default class Password extends Component {
  static navigationOptions = {
    title: "Help"
  };

  state = {};

  render() {
    return (
      <Container>
        <Title style={{ fontSize: 36 }} title="Forgot your password?" />
        <Img source={girl} />
        <FormContainer>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Input placeholder="email" />
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
              <Subtitle>
                Wanna go back? <Click>Login</Click>
              </Subtitle>
            </TouchableOpacity>
          </View>
        </FormContainer>
      </Container>
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
