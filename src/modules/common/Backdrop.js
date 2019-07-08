import React from "react";
import View from "react-native";
import styled from "styled-components";

const Backdrop = styled.View`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.75);
`;
const backdrop = props => <Backdrop />;

export default backdrop;
