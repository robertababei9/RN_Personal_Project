import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from '@src/screens/Home';
import Cart from '@src/screens/Cart';
import Profile from '@src/screens/Profile';

const BottomTabNav = createBottomTabNavigator();

export default function BottomNavigator() {
    return (
        <BottomTabNav.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "#FF4C29",
                
            }}
        >
            <BottomTabNav.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarIcon: (({color, size}) => (
                        <Icon name="home" size={size} color={color} />
                    )),
                    headerShown: false
                }}
            />
            <BottomTabNav.Screen 
                name="Cart" 
                component={Cart} 
                // children={() => <Cart props={props}/>}
                options={{
                    tabBarIcon: (({color, size}) => (
                        <Icon2 name="shopping-cart" size={size} color={color} />
                    )),
                    headerShown: false
                }}
            />
            <BottomTabNav.Screen 
                name="Profile" 
                component={Profile}
                options={{
                    tabBarIcon: (({color, size}) => (
                        <Icon2 name="person" size={size} color={color} />
                    ))
                }} 
            />
        </BottomTabNav.Navigator>
    )
}