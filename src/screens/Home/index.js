import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';
import HomeInfo from '@src/screens/HomeInfo';

const Stack = createNativeStackNavigator();

const Component = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
            <Stack.Screen name="HomeInfo" component={HomeInfo} />
        </Stack.Navigator>
    )
}

export default Component;