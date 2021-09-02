import React, { useState, useEffect } from 'react'
import { StyleSheet, TextInput } from 'react-native'

const ERR_STYLE_OBJ = {borderBottomColor: "red", color: "red"}

export default function Input(props) {

    const {
        secureTextEntry,
        style = {},
        onChangeText = () => {},
        value,
        placeholder,
        error = false,
        required = false,
        keyboardType
    } = props;

    const [errorStyle, setErrorStyle] = useState(error ? ERR_STYLE_OBJ : {})

    useEffect(() => {
        setErrorStyle(error ? ERR_STYLE_OBJ : {})
    }, [error]);

    const _onChangeText = (_val) => {
        if (required) {
            if (_val == "")
                setErrorStyle(ERR_STYLE_OBJ)
            else
                setErrorStyle(null)
        }

        if (keyboardType == "numeric") {
            
            if (isNaN(_val))
                return;
        }

        onChangeText(_val);
    }

    // console.log("+++errorStyle: ", errorStyle);


    return (
        <TextInput 
            style={[styles.input, style, errorStyle ]} 
            onChangeText={_onChangeText}
            value={value}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            keyboardType={keyboardType}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
        fontSize: 18,
        fontFamily: "Open Sans",
        minWidth: 150,
        color: "black"
    }
})
