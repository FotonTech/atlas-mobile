import React, { Component } from "react";
import girl from "../img/girl.png";

import { View, TouchableOpacity, TextInput, FlatList } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import NavigationBar from "react-native-navbar";
import Post from "../modules/Feed/Post";
import Icon from "react-native-vector-icons/FontAwesome";
import styled from "styled-components";

import MyModal from "../modules/common/MyModal";

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
  margin-bottom: 5px;
`;

let postContent = [];

export default class Feed extends Component {
  static navigationOptions = {
    title: "Feed"
  };

  state = {
    isVisible: false,
    posts: [],
    content: "",
    refreshing: false
  };

  componentDidMount() {
    this.loadPosts();
  }

  setTextInput = textInput => {
    this.textInput = textInput;
  };

  createPost = async () => {
    const date = new Date().toISOString();
    const requestBody = {
      query: `
        mutation {
          createPost(content: "${this.state.content}", date: "${date}") {
            _id
            creator{
              name
              email
            }
          }
        }
      `
    };

    const token = await AsyncStorage.getItem("token");
    let res = await fetch("http://localhost:3000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    });

    res = await res.json();

    this.setState({
      posts: [
        ...this.state.posts,
        { ...res.data.createPost, content: this.state.content, date: date }
      ]
    });
    this.textInput.clear();
  };

  loadPosts = async () => {
    this.setState({ refreshing: true });
    const requestBody = {
      query: `
      query{
        post{
          _id
          date
          content
          creator{
            name
            _id
            email
          }
        }
      }
      `
    };

    const token = await AsyncStorage.getItem("token");
    let res = await fetch("http://localhost:3000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    });

    res = await res.json();

    const post = [...res.data.post];

    this.setState({ posts: [...post], refreshing: false, content: "" });
  };

  // renderItem = ({ post }) => {
  //   console.log("aqui ->", post);
  //   return (
  //     <Post
  //       userName={post.creator.name}
  //       postText={post.content}
  //       date={post.date}
  //       key={post._id}
  //     />
  //   );
  // };

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
              ref={this.setTextInput}
              onChangeText={value => this.setState({ content: value })}
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
                <Icon name="paper-plane" size={20} onPress={this.createPost} />
              </TouchableOpacity>
            </View>
          </NewPost>
        </FeedBox>

        {/* <Post
          userName="Nome Sobrenome"
          postText="Dig dig joy dig joy popoy, vem brincar comigo, dig dig joy dig joy popoy, vem ser meu amigo."
        /> */}
        <FlatList
          data={this.state.posts}
          keyExtractor={post => post._id}
          renderItem={post => {
            return (
              <Post
                userName={post.item.creator.name}
                postText={post.item.content}
                date={post.item.date}
                key={post.item._id}
              />
            );
          }}
          onRefresh={() => console.log("Deu certo")}
          refreshing={this.state.refreshing}
        />
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
