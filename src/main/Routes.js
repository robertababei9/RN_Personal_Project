import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import Splash from '@src/screens/Splash';

import Home from '@src/screens/Home';
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

//   // mock API call to get user ( if logged in )
//   useEffect(() => {
//     setTimeout(() => {
//         setIsSignedIn(false);
//         setUser({"name": "Robert", "email": "robert.ababei9@gmail.com"});
//     }, 3000);
//   }, []);

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
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={Home} />
                    </Stack.Navigator>
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
