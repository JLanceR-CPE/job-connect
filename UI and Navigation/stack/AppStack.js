import React from "react";
import Screens from "../screens/Screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import JobStack from "./JobStack";
import { View, Image, Text } from "react-native";

const Tab = createBottomTabNavigator()

const AppStack = () => {
    return (
    <Tab.Navigator 
        initialRouteName = 'Home' 
        backBehavior = 'history'
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: { padding: 10, height: 60},
            tabBarHideOnKeyboard: true
        }}>
        <Tab.Screen name='Home' component={JobStack}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../assets/House.png')}
                            style={{
                                width: 35,
                                height: 35,
                                tintColor: focused? 'rgba(251, 108, 0, 1)': 'rgba(251, 108, 0, 0.5)',
                            }}
                        />
                        <Text
                        style={{color: focused? 'rgba(251, 108, 0, 1)': 'rgba(251, 108, 0, 0.5)', fontSize: 12}}>
                            Home</Text>
                    </View>
                )
            }}
        /> 
        <Tab.Screen name='Add' component={Screens.AddScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../assets/Plus.png')}
                            style={{
                                width: 35,
                                height: 35,
                                tintColor: focused? 'rgba(251, 108, 0, 1)': 'rgba(251, 108, 0, 0.5)',
                            }}
                        />
                        <Text
                        style={{color: focused? 'rgba(251, 108, 0, 1)': 'rgba(251, 108, 0, 0.5)', fontSize: 12}}>
                            Add</Text>
                    </View>
                )
            }}
         />
        <Tab.Screen name='Profile' component={Screens.ProfileScreen} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../assets/Male_user.png')}
                            style={{
                                width: 35,
                                height: 35,
                                tintColor: focused? 'rgba(251, 108, 0, 1)': 'rgba(251, 108, 0, 0.5)',
                            }}
                        />
                        <Text
                        style={{color: focused? 'rgba(251, 108, 0, 1)': 'rgba(251, 108, 0, 0.5)', fontSize: 12}}>
                            Profile</Text>
                    </View>
                )
            }}
        />
    </Tab.Navigator>
    )
};

export default AppStack;