import React from "react";

import { View, Modal, Text } from "react-native";
import styled from "styled-components";

const Content = styled.View`
  background: white;
  padding: 1px;
`;

const Actions = styled.View`
  display: flex;
  justify-content: flex-end;
`;

const Btn = styled.TouchableOpacity`
  background: #0755fd;
  border: 1px solid #0755fd;
  border-radius: 3px;
  padding: 0.25px 1px;
  margin-right: 1px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.26);
  color: white;
`;

const MyModal = ({ isVisible, modalContent, onCancel, onConfirm }) => {
  return (
    <Modal animationType="slide" transparent visible={isVisible}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.76)"
        }}
      >
        <Content>
          <Text>{modalContent}</Text>
        </Content>
        <Actions>
          <Btn onPress={onConfirm}>
            <Text>Confirm</Text>
          </Btn>
          <Btn onPress={onCancel}>
            <Text>Cancel</Text>
          </Btn>
        </Actions>
      </View>
    </Modal>
  );
};

export default MyModal;
