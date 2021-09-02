import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import Input from './Input';

export default function RowInput({label, value, onChangeText, keyboardType}) {

    return (
        <View style={styles.rowContainer}>
            <Text style={styles.rowInputText}>{label}</Text>
            <Input style={styles.input} required value={value} onChangeText={onChangeText} keyboardType={keyboardType}/>
        </View>
    )
}

const styles = StyleSheet.create({
    rowContainer: {
        width: "100%",
        marginBottom: 22,
    },
    rowInputText: {
        fontSize: 18,
        fontWeight: "bold"
    },
    input: {

    }

})
