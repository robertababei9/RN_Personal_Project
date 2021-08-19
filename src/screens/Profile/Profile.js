import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { useDispatch } from 'react-redux';
import { setUser } from '@src/redux/actions/auth.action';

import { Button } from '@src/components';
import ProfileCard from './ChangeColorsCard';

const BACKGROUND_IMAGE = require("@src/assets/images/profile_background.jpg");

export default function Profile() {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(setUser(null))
    }

    return (
        <ImageBackground style={styles.container} >

            <ProfileCard 
                title="Change app colors"
            />

            <Button style={styles.button} title="Log out" onPress={handleLogout}/>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        minWidth: 150
    }
})
