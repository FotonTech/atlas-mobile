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
import AsyncStorage from "@react-native-community/async-storage";
import NavigationBar from "react-native-navbar";
import Post from "../modules/Feed/Post";
import Icon from "react-native-vector-icons/FontAwesome";
import styled from "styled-components";

import MyModal from "../modules/common/MyModal";
import { FlatList } from "react-native-gesture-handler";

const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: #fafafa;
`;

const SearchBar = styled.View`
  flex-direction: row;
  border-radius: 25px;
  margin: 10px;
  padding: 5px;
  height: 50px;
  background-color: #efefef;
`;

const FeedBox = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Img = styled.Image`
  align-self: center;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  border-width: 1px;
  border-color: #ddd;
`;

const NewPost = styled.View`
  justify-content: space-between;
  height: 90px;
  width: 305px;
  border-radius: 5px;
  border-width: 2px;
  border-color: #ddd;
  background-color: #fff;
`;

let postContent = [];

export default class Feed extends Component {
  static navigationOptions = {
    title: "Feed"
  };

  state = {
    isVisible: false
  };

  render() {
    return (
      <Container>
        <SearchBar>
          <Icon
            style={{ alignSelf: "center", margin: 10 }}
            color="#dadada"
            name="search"
            size={20}
          />
          <TextInput placeholder="Search" style={{ marginLeft: 5 }} />
        </SearchBar>
        <FeedBox>
          <Img source={girl} />
          <View style={{ width: 10 }} />
          <NewPost>
            <TextInput
              placeholder="What's on your mind?"
              placeholderTextColor="black"
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                padding: 10
              }}
            >
              <TouchableOpacity>
                <Icon name="image" size={20} />
              </TouchableOpacity>
              <View style={{ width: 10 }} />
              <TouchableOpacity>
                <Icon name="paper-plane" size={20} />
              </TouchableOpacity>
            </View>
          </NewPost>
        </FeedBox>
        {/* <FlatList> */}
        <Post
          userName="Nome Sobrenome"
          postText="TESTEKKKKKKKKKKKKK sauhquwheuhiuahs Testando pra ver se vai pra
            outra linha. Foi porra"
        />
        {/* </FlatList> */}
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <NavigationBar
            style={{ justifyContent: "space-evenly" }}
            leftButton={
              <TouchableOpacity>
                <Icon
                  onPress={() => {
                    this.setState({ isVisible: true });
                  }}
                  name="bars"
                  size={20}
                />
              </TouchableOpacity>
            }
            rightButton={
              <TouchableOpacity>
                <Icon name="users" size={20} />
              </TouchableOpacity>
            }
          />
        </View>
        <MyModal
          modalContent="Logout?"
          isVisible={this.state.isVisible}
          onConfirm={async () => {
            await AsyncStorage.removeItem("token");
            this.props.navigation.replace("Login");
          }}
          onCancel={() => {
            this.setState({ isVisible: false });
          }}
        />
      </Container>
    );
  }
}
