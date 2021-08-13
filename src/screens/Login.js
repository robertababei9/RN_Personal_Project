import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { setUser } from '@src/redux/actions/auth.action';

import {Input, Button} from '@src/components';

import AuthAPI from '@src/api/AuthAPI';

export default function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const onSignupPress = () => {
        props.navigation.navigate('SignUp');
    }

    const onLoginPress = () => {
        const model = {
            email: email,
            password: password
        };
        
        AuthAPI.SignIn(model).then(data => {
            data != null && dispatch(setUser(data));
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                {/* <Image source={require('@src/assets/images/test_logo.png')}/> */}
                <Text>Logo</Text>
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

                <View style={styles.loginButtonContainer}>

                    <Button style={styles.loginButton} title="Login" onPress={onLoginPress}/>

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
        backgroundColor: "orange",
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
