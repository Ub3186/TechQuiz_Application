import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import Home from "../src/screens/homePage";
import Setting from "../src/screens/settings";
import Header from "../shared/header";
import About from "../src/screens/settings/about";
import Privacy from "../src/screens/settings/privacyPolicy";
import contactUs from "../src/screens/settings/contactUs";

const screens = {
  Settings: {
    screen: Setting,
  },
  Privacy: {
    screen: Privacy,
  },
  About: {
    screen: About,
  },
  contactUs: {
    screen: contactUs,
  },
};

const SettingStack = createStackNavigator(screens);

export default SettingStack;
