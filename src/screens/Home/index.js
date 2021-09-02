import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';
import HomeInfo from '@src/screens/HomeInfo';
import AddCategory from "./AddCategory";
import AddSubcategory from './AddSubcategory';

const Stack = createNativeStackNavigator();

const Component = (props) => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
            <Stack.Screen name="HomeInfo" component={HomeInfo} />
            <Stack.Screen name="AddCategory" component={AddCategory} />
            <Stack.Screen name="AddSubcategory" component={AddSubcategory} />
        </Stack.Navigator>
    )
}

export default Component;