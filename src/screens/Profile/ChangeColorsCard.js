import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ChangeColorsCard(props) {

    const {
        title
    } = props;

    return (
        <View style={styles.container} >
            <Text style={styles.title}>{title}</Text>

            <View style={styles.body}>
                {/* <Text style={styles.text}>Change primary color</Text>
                <Text style={styles.text}>Change secondary color</Text> */}
                <Text style={styles.text}>Comming soon</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(51, 71, 86, 0.8)',
        width: "100%",
        padding: 6,
        marginVertical: 8
    },
    title: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18
    },
    text: {
        color: "white"
    },
    body: {
        marginTop: 12,
        // paddingHorizontal: 12
    }
})
