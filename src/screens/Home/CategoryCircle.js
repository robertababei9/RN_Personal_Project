import React from 'react'
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';

import { getFoodCategoryByName } from '@src/assets/images';

export default function CategoryCircle({onClick, iconName}) {
    return (
        <TouchableOpacity onPress={onClick} style={styles.container}>
            <Image style={{width: 45, height: 45}} source={getFoodCategoryByName(iconName)} />
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
