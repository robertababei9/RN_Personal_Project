import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Ripple from 'react-native-material-ripple';

export default function Button(props) {

    const {
        title = "",
        onPress,
        style = {},
        textStyle = {},
        disabled = false,
        type = "primary"
    } = props;

    let disabledStyle = React.useMemo(() => (disabled ? {backgroundColor: "#C0C0C0"} : {}), [disabled]);

    let buttonStyle = styles.container;
    let buttonTextStyle = styles.text;

    if (type == "secondary") {
        buttonStyle = styles.containerSecondary;
        buttonTextStyle = styles.textSecondary;
        
        if (disabled) {
            disabledStyle = {};
            buttonTextStyle = {...styles.textSecondary, color: "gray"}
        }
    }

    return (
        <Ripple style={[buttonStyle, style, disabledStyle]} onPress={onPress} disabled={disabled} rippleContainerBorderRadius={18}>
            <Text style={[buttonTextStyle, textStyle]}>{title}</Text>
        </Ripple>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FF4C29",
        padding: 16,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    containerSecondary: {
        backgroundColor: "transparent",
        borderWidth: 1.5,
        borderColor: "#FF4C29",
        padding: 16,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "white"
    },
    textSecondary: {
        color: "#FF4C29"
    }
})
