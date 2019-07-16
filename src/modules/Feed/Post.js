import React, { useState } from "react";
import girl from "../../img/girl.png";

import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MyModal from "../../modules/common/MyModal";

import styled from "styled-components";

const Container = styled.View`
  padding: 5px;
  margin-bottom: 2px;
  border-width: 1px;
  border-radius: 5px;
  border-color: #ddd;
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
`;

const Time = styled.Text`
  font-size: 10px;
`;

const FeedInput = styled.View`
  padding: 5px;
  /* width: 305px;
  height: 96px;
  border-radius: 5px;
  border-width: 1px;
  border-color: #dadada; */
  background-color: #fff;
`;

const BtWapper = styled.View`
  padding: 2px;
  margin-top: 5px;
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

const Post = ({ userName, postText, postDate }) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <Container>
      <View style={{ height: 25 }} />
      <FeedBox>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Person>
            <Img source={girl} />
            <View style={{ width: 15 }} />
            <View style={{ flexDirection: "column" }}>
              <Name>{userName}</Name>
              <Time>{postDate}</Time>
            </View>
          </Person>
          <TouchableOpacity>
            <Icon
              name="ellipsis-h"
              size={20}
              onPress={() => setVisible(true)}
            />
          </TouchableOpacity>
        </View>
        <View style={{ height: 15 }} />
        <FeedInput>
          <Text>{postText}</Text>
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
      <MyModal
        modalContent="Delete?"
        isVisible={isVisible}
        onConfirm={async () => {
          setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </Container>
  );
};

export default Post;
