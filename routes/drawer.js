import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import LoginStack from "./loginStack";
import HomeStack from "./homeStack";
import SettingStack from "./settingstack";
import Scoreboard from "../src/screens/scoreboard";
import friendStack from "./friendStack";
import profileStack from "./profilestack";
import Login from "../src/screens/loginPage";


const RouteConfigs = {
  Home:{
        screen: HomeStack,
    },
    Profile:{
        screen: profileStack,
    },
    
    Leaderboard: {
        screen: HomeStack,

    },

    Friends: {
        screen: friendStack,
    },

    Settings:{
        screen: HomeStack,
    },
    Login:{
        screen: LoginStack,
        navigationOptions: {
            drawerLabel: () => null,
        }
    },
    Logout: {
        screen: Login,   
    },
    
};

const DrawerNavigatorConfig = {
  intialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: 'white',
    },
  },
  contentOptions: {
    // add your styling here 
    activeTintColor: '#e91e63',
    itemsContainerStyle: {
      marginVertical: 80,
    },
    iconContainerStyle: {
      opacity: 1,
    },
  },
  drawerBackgroundColor: 'white', // sets background color of drawer
};

const Navigator = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);


export default createAppContainer(Navigator);