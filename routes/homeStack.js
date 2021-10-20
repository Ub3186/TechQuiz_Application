import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import Login from "../src/screens/loginPage";
import Home from "../src/screens/homePage";
import Scoreboard from "../src/screens/scoreboard";
import Setting from "../src/screens/settings";
import Header from "../shared/header";
import QuizPage from "../src/Tquiz/QuizPage";
import QuizLevel from "../src/Tquiz/QuizLevel";
import Profile from "../src/screens/Profile";
import Friends from "../src/screens/Freinds";
import SettingStack from "./settingstack";

const screens = {
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },

  Profile: {
    screen: Profile,
  },

  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />,
        headerLeft: () => {
          return null;
        },
      };
    },
  },
  Profile:{
    screen: Profile
  },
  Friends: {
    screen: Friends,
  },
  Leaderboard: {
    screen: Scoreboard,
  },
  Settings: {
    screen: SettingStack,
    navigationOptions: ({ navigation }) => {
      return {
        header: () => {
          return null;
        },
      };
    },
  },

  QuizLevel: {
    screen: QuizLevel,
  },

  Quizpage: {
    screen: QuizPage,
    navigationOptions: {
      header: null,
    },
  },
};

const HomeStack = createStackNavigator(screens);

export default HomeStack;
