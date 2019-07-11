import React from "react";

import styled from "styled-components";

const Button = styled.TouchableOpacity`
  align-self: stretch;
  padding: 12px;
  border-radius: 5px;
  background-color: #0755fd;
  justify-content: center;
  align-items: center;
`;

const ButtonTxt = styled.Text`
  font-size: 24px;
  color: #fff;
`;

const MyButton = ({ onPress, buttonTxt }) => {
  return (
    <Button onPress={onPress}>
      <ButtonTxt>{buttonTxt}</ButtonTxt>
    </Button>
  );
};

export default MyButton;
