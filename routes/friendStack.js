import { createStackNavigator } from "react-navigation-stack";
import Friends from "../src/screens/Freinds";

const screens ={
    
    Friends:{
        screen: Friends
    },
    
}

const friendStack = createStackNavigator(screens);

export default friendStack;