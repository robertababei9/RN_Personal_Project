import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Ripple from 'react-native-material-ripple';

export default function Button(props) {

    const {
        title = "",
        onPress,
        style = {},
        textStyle = {},
        disabled = false
    } = props;

    const disabledStyle = React.useMemo(() => (disabled ? {backgroundColor: "#C0C0C0"} : {}), [disabled]);

    return (
        <Ripple style={[styles.container, style, disabledStyle]} onPress={onPress} disabled={disabled} rippleContainerBorderRadius={18}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
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
    text: {
        color: "white"
    }
})
