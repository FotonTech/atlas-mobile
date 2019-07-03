import React, { Component } from "react";
import girl from "../../img/girl.png";

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity
} from "react-native";

import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

const FeedBox = styled.View``;

const Person = styled.View`
  flex-direction: row;
`;

const Img = styled.Image`
  align-self: center;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  border-width: 1px;
  border-color: #ddd;
`;

const Name = styled.Text`
  font-size: 12px;
  font-weight: bold;
  align-self: center;
`;

const Time = styled.Text`
  font-size: 10px;
`;

const FeedInput = styled.View`
  align-self: center;
  padding: 5px;
  width: 305px;
  height: 96px;
  /* border-radius: 5px;
    border-width: 1px;
    border-color: #dadada; */
  background-color: #fff;
`;

const BtWapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
`;

const ReactBt = styled.TouchableOpacity`
  border-radius: 10px;
  border-width: 1px;
  border-color: #ddd;
`;

const ReplyBt = styled.TouchableOpacity`
  border-radius: 10px;
  border-width: 1px;
  border-color: #ddd;
`;

export default class Post extends Component {
  render() {
    return (
      <Container>
        <View style={{ height: 40 }} />
        <FeedBox>
          <Person>
            <Img source={girl} />
            <View style={{ width: 15 }} />
            <View style={{ flexDirection: "column" }}>
              <Name>Nome Sobrenome</Name>
              <Time>posted 15m ago</Time>
            </View>
          </Person>
          <View style={{ height: 15 }} />
          <FeedInput>
            <Text>TESTEKKKKKKKKKKKKKK</Text>
            <BtWapper>
              <ReactBt>
                <Text style={{ color: "#0755FD", fontWeight: "bold" }}>
                  React
                </Text>
              </ReactBt>
              <View style={{ width: 5 }} />
              <ReplyBt>
                <Text>Reply</Text>
              </ReplyBt>
            </BtWapper>
          </FeedInput>
        </FeedBox>
      </Container>
    );
  }
}
