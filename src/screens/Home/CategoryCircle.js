import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function CategoryCircle({name, onClick}) {
    return (
        <TouchableOpacity onPress={onClick} style={styles.container}>
            <Text>test</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 12,
        marginVertical: 8,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    }
})
