import React, {useState, useLayoutEffect} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from "./ModalIcons";
import { getFoodCategoryByName } from '@src/assets/images';

import { Input, Button, RowInput } from '@src/components';
import Icon from 'react-native-vector-icons/MaterialIcons';

import CategoryAPI from '@src/api/CategoryAPI';

export default function AddCategory(props) {

    const [name, setName] = useState("");
    const [selectedIcon, setSelectedIcon] = useState("pizza_icon");
    const [modalVisible, setModalVisible] = useState(false);

    // add Save button to header
    useLayoutEffect(() => {

        if (props.navigation) {
            props.navigation.setOptions({
                headerRight: () => (
                    <Button
                        style={{
                            borderWidth: 0
                        }}
                        textStyle={{
                            fontWeight: "bold",
                            fontSize: 16
                        }}
                        type="secondary"
                        disabled={name == "" || selectedIcon == null}
                        onPress={async () => {
                            const model = {
                                name: name,
                                dscription: "Test description",
                                avatarIconName: selectedIcon
                            };
                            let category = await CategoryAPI.Create(model);
                            // console.log("Created category: ", category);
                            props.navigation.navigate("Home");
                        }}
                        title="Save"
                    />
                  ),
            })
        }
    }, [props, name, selectedIcon]);

    const toggleModal = () => {
        setModalVisible(prev => !prev);
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.avatarContainer} onPress={toggleModal}>
                <Image style={styles.avatarImage} source={getFoodCategoryByName(selectedIcon)}/>
                <Icon style={styles.avatarAdd} name="add" size={42} color="#FF4C29" />
            </TouchableOpacity>

            <RowInput label="Name" value={name} onChangeText={setName}/>

 
            <Modal 
                modalVisible={modalVisible} 
                toggleModal={toggleModal} 
                onIconSelected={(icon) => setSelectedIcon(icon)}
                onBackdropPress={() => setModalVisible(false)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 12
    },

    avatarContainer: {
        // backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center",
    },
    avatarImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 1,
        borderColor: "#FF4C29",
    },
    avatarAdd: {
        position: "absolute",
        bottom: 10,
        right: 20
    },

    rowContainer: {
        width: "100%"
    },
    rowInputText: {
        fontSize: 18
    },


})
