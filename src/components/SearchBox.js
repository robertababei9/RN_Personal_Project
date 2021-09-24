import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function SearchBox(props) {
    const {
        value = "",
        onChangeText = () => {},
        placeholder
    } = props;


    const handleOnChangeText = (value) => {
        // setInputValue(value);

        onChangeText(value);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.inputContainer}>
                <TextInput style={styles.inputText} placeholder={placeholder} value={value} onChangeText={handleOnChangeText}/>
            </TouchableOpacity>
            {
                value == "" ? (
                    <View>
                        <Icon style={styles.icon} name="search1" size={28} color="#FF4C29" />
                    </View>
                ) : (
                    <TouchableOpacity onPress={() => handleOnChangeText("")}>
                        <Icon style={styles.icon} name="close" size={28} color="#FF4C29" />
                    </TouchableOpacity>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        borderRadius: 8,
        width: "100%",
        
        // shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    },
    inputContainer: {
        // backgroundColor: "red",
        flex: 1,
        justifyContent: "center",
    },
    icon: {

    },
    inputText: {
        fontSize: 16
    }
})
