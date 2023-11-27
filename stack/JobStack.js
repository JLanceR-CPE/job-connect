import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Screens from "../screens/Screens";

const Stack = createStackNavigator()

const JobStack = () => {
    return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={Screens.HomeScreen}/> 
        <Stack.Screen name='Job' component={Screens.JobScreen} />
    </Stack.Navigator>
    )
};

export default JobStack;