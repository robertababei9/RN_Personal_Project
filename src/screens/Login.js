import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';

import { setUser } from '@src/redux/actions/auth.action';

import {Input, Button} from '@src/components';

import AuthAPI from '@src/api/AuthAPI';

const REMEMBER_ME_KEY = "@rememberMe";


export default function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const dispatch = useDispatch();

    // retrieve email & pass from AsyncStorage
    useEffect(async () => {
        try {
            const jsonValue = await AsyncStorage.getItem(REMEMBER_ME_KEY);
            if (jsonValue != null) {
                
                const value = JSON.parse(jsonValue);
                setEmail(value.email);
                setPassword(value.password);
                setRememberMe(true);
            }
        } catch (e) {
            console.log("Login: ", e);
        }
    }, []);

    const onSignupPress = () => {
        props.navigation.navigate('SignUp');
    }

    const onLoginPress = async () => {
        const model = {
            email: email,
            password: password
        };
        
        AuthAPI.SignIn(model).then(data => {
            data != null && dispatch(setUser(data));
        });

        if (rememberMe) {
            try {
                const model = JSON.stringify({
                    email: email,
                    password: password
                });
                await AsyncStorage.setItem(REMEMBER_ME_KEY, model);
            } catch (e) {
                console.log("Login: " + e);
            }
        }
        else {
            try {
                await AsyncStorage.removeItem(REMEMBER_ME_KEY);
            } catch (e) {
                // errors
            }
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image style={{
                    flex: 1,
                }} source={require('@src/assets/images/login_image.jpg')} resizeMode="cover"/>
                {/* <Text>Logo</Text> */}
            </View>

            <View style={styles.loginContainer}>
                <View style={styles.usernameContainer}>
                    <Icon name="user" size={30} color="#FF4C29" />
                    <Input style={{width: "80%"}} placeholder="Email" value={email} onChangeText={setEmail}/>
                </View>

                <View style={styles.passwordContainer}>
                    <Icon name="lock" size={30} color="#FF4C29" />
                    <Input style={{width: "80%"}} secureTextEntry={true} placeholder="Password" value={password} onChangeText={setPassword}/>
                </View>

                <View style={styles.rememberMeContainer}>
                    <CheckBox 
                        style={styles.rememberMeCheckBox} 
                        value={rememberMe} 
                        onValueChange={setRememberMe} 
                        tintColors={{
                            true: "#FF4C29",
                            false: "#FF4C29"
                        }} // android
                        tintColor="#FF4C29" // iOS
                        onCheckColor="#FF4C29" // iOS
                    />
                    <Text>Remember me </Text>
                </View>

                <View style={styles.loginButtonContainer}>

                    <Button style={styles.loginButton} title="Login" onPress={onLoginPress} disabled={!email || !password}/>

                    <View style={styles.signupContainer}>
                        <Text>Don't have an account ? </Text>
                        <TouchableOpacity onPress={onSignupPress} style={{paddingLeft: 8, fontWeight: "bold" }}>
                            <Text style={{color: "#FF4C29"}}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
    },
    headerContainer: {
        // backgroundColor: "orange",
        flex: 4,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    loginContainer: {
        flex: 6,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: "10%"
    },
    usernameContainer: {
        width: "100%",
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    passwordContainer: {
        width: "100%",
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    rememberMeContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 10
    },
    rememberMeCheckBox: {
        marginRight: 12
    },
    loginButtonContainer: {
        width: "100%",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40
    },
    loginButton: {
        width: "100%"
    },
    signupContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 12
    }
})
