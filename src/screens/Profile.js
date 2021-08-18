import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setUser } from '@src/redux/actions/auth.action';

import { Button } from '@src/components';

export default function Profile() {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(setUser(null))
    }

    return (
        <View style={styles.container}>
            <Text>Profile screen</Text>
            <Button style={styles.button} title="Log out" onPress={handleLogout}/>

        </View>
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
