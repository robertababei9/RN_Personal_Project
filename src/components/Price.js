import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Price({price, type = ""}) {

    const renderText = () => {
        switch (type.toUpperCase()) {
            case "RON":
                return (<Text style={styles.price}>{price} RON</Text>);
            case "EUR":
                return (<Text style={styles.price}>€ {price}</Text>);
            case "USD":
                return (<Text style={styles.price}>$ {price}</Text>);
            default:
                return (<Text style={styles.price}>{price}</Text>);
        }
    }
    
    return (
        renderText()
    )
}

const styles = StyleSheet.create({
    price: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#FF4C29",
    }
})
