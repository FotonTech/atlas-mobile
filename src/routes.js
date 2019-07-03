import { createAppContainer, createStackNavigator } from "react-navigation";

import Login from "./screens/Login";
import Teste from "./screens/Teste";
import SignUp from "./screens/signUp";
import Password from "./screens/password";
import Feed from "./screens/Feed";
import Post from "./modules/Feed/Post";

const AppNavigator = createStackNavigator({
  Login,
  Feed,
  Post,
  SignUp,
  Password,
  Teste
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
