import { useEffect } from "react";

import AsyncStorage from "@react-native-community/async-storage";

// import { Container } from './styles';

function useAsyncEffect(func, deps) {
  useEffect(() => {
    func();
  }, deps);
}

export default ({ navigation }) => {
  useAsyncEffect(async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      navigation.replace("Feed");
    } else {
      navigation.replace("Login");
    }
  }, [navigation]);

  return null;
};
