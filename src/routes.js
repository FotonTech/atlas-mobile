import { createAppContainer, createStackNavigator } from "react-navigation";

import Login from "./pages/Login";
import Teste from "./pages/Teste";
import SignUp from "./pages/signUp";
import Password from "./pages/password";
import Feed from "./pages/Feed";
import Post from "./common/Post";

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
