import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Input, Button} from '@src/components';

import AuthAPI from '@src/api/AuthAPI';

export default function SignUp(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        if (name != "" && email != "" && password != "" && confirmPassword != "" && password == confirmPassword)
            setButtonDisabled(false);
        else
            setButtonDisabled(true);
            
    }, [name, email, password, confirmPassword])

    const onSignupPress = () => {
        props.navigation.navigate('SignIn');
    }

    const onRegister = () => {
        const model = {
            username: name,
            email: email,
            password: password
        }

        AuthAPI.SignUp(model).then(result => console.log("result = ", result));
    }


    return (
        <View style={styles.container}>
                <View style={styles.usernameContainer}>
                    <MaterialIcons name="person" size={30} color="#FF4C29" />
                    <Input 
                        style={{width: "80%"}} 
                        placeholder="Name" 
                        onChangeText={(value) => setName(value)}
                        value={name}
                    />
                </View>

                <View style={styles.passwordContainer}>
                    <Icon name="user" size={30} color="#FF4C29" />
                    <Input 
                        style={{width: "80%"}} 
                        placeholder="Email" 
                        value={email} 
                        onChangeText={setEmail} 
                    />
                </View>

                <View style={styles.passwordContainer}>
                    <Icon name="lock" size={30} color="#FF4C29" />
                    <Input 
                        style={{width: "80%"}} 
                        secureTextEntry={true} 
                        placeholder="Password" 
                        value={password} 
                        onChangeText={setPassword}
                    />
                </View>

                <View style={styles.passwordContainer}>
                    <Icon name="lock" size={30} color="#FF4C29" />
                    <Input 
                        style={{width: "80%"}} 
                        secureTextEntry={true} 
                        placeholder="Password" 
                        value={confirmPassword} 
                        onChangeText={setConfirmPassword}
                    />
                </View>

                <View style={styles.loginButtonContainer}>

                    <Button style={styles.loginButton} title="Get Started" onPress={onRegister} disabled={buttonDisabled}/>

                    <View style={styles.loginContainer}>
                        <Text>Have an account already ? </Text>
                        <TouchableOpacity onPress={onSignupPress} style={{paddingLeft: 8, fontWeight: "bold" }}>
                            <Text style={{color: "#FF4C29"}}>SIGN IN</Text>
                        </TouchableOpacity>
                    </View>

                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
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
        marginTop: 40,
    },
    loginButton: {
        width: "100%",
    },
    loginContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 12,
    }
})
