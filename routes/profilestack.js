import { createStackNavigator } from "react-navigation-stack";
import Profile from "../src/screens/Profile";

const screens ={
    
    Profile:{
        screen: Profile
    },
    
}

const profileStack = createStackNavigator(screens);

export default profileStack;