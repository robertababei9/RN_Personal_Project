import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import Splash from '@src/screens/Splash';
import BottomNavigator from './BottomNavigator';


import Login from '@src/screens/Login';
import SignUp from '@src/screens/SignUp';

const Stack = createNativeStackNavigator();

export default function Routes() {

  const [isSignedIn , setIsSignedIn ] = useState(false)
  const [user, setUser] = useState(null);

  const authReducer = useSelector(state => state.authReducer);
  
  useEffect(() => {
      if (authReducer.user != null) {
        setIsSignedIn(true);
      }
      else {
          setIsSignedIn(false);
      }
  }, [authReducer.user])

//     if (!user) {
//         return (
//             <React.Fragment>
//                 <Splash />
//             </React.Fragment>
//         )
//     }

    return (
        <NavigationContainer>
            {
                isSignedIn ? (
                    <BottomNavigator />
                ) : (
                    <Stack.Navigator initialRouteName="SignIn">
                        <Stack.Screen options={{headerShown: false}} name="SignIn" component={Login} />
                        <Stack.Screen options={{headerShown: false}} name="SignUp" component={SignUp} />
                    </Stack.Navigator>
                )
            }
        </NavigationContainer>

    )
}

const styles = StyleSheet.create({})
