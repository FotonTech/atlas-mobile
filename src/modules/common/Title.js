import React, { Component } from "react";
import { View } from "react-native";
import styled from "styled-components";

const Title2 = styled.Text`
  font-family: Verdana;
  text-align: center;
  font-weight: bold;
`;

const Title = ({ style, title }) => {
  return (
    <View>
      <Title2 style={style}>{title}</Title2>
    </View>
  );
};

export default Title;
