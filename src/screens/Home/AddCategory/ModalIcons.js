import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import FoodCategoryIcons from '@src/assets/images';

export default function ModalIcons(props) {

    const {
        modalVisible,
        toggleModal,
        onIconSelected,
        onBackdropPress
    } = props;

    const onIconPress = (icon) => {
        onIconSelected(icon);
        toggleModal();
    }

    return (
        <Modal isVisible={modalVisible} backdropOpacity={0.50} onBackdropPress={onBackdropPress}>
            <View style={styles.modalContainer}>
                {FoodCategoryIcons.map(icon => (
                    <TouchableOpacity 
                        key={Object.keys(icon).toString()} 
                        style={styles.iconContainer} 
                        onPress={() => onIconPress(Object.keys(icon).toString())}
                    >
                        <Image style={styles.icon} source={Object.values(icon).toString()} resizeMode="cover"/>
                    </TouchableOpacity>
                ))}
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        // flex: 1, 
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "white",
        // height: 123
    },
    iconContainer: {
        margin: 4
    },
    icon: {
        width: 60,
        height: 60
    }
})
