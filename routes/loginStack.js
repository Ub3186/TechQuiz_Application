import { createStackNavigator } from "react-navigation-stack";

import Login from '../src/screens/loginPage';
import Home from '../src/screens/homePage';
import Register from "../src/screens/registerPage";

const screens ={
    Login:{
        screen: Login
    },
    Home:{
        screen: Home,
        navigationOptions: {
            headerLeft: () => {
                return null;
              }
         }
    },
    Register:{
        screen: Register
    },
    
}

const LoginStack = createStackNavigator(screens);

export default LoginStack;