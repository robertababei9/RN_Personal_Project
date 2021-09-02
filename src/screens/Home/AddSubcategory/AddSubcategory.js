import React, { useState, useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';

import { RowInput, Button } from '@src/components';

export default function AddSubcategory(props) {

    console.log(props.route.params.sectionId);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);

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
                        disabled={title == "" || price == 0}
                        onPress={async () => {
                            
                        }}
                        title="Save"
                    />
                    ),
            })
        }
    }, [props, title, price]);

    return (
        <View style={styles.container}>
            <Text>Category id: </Text>
            <RowInput label="Title" value={title} onChangeText={setTitle} />
            <RowInput label="Description" value={description} onChangeText={setDescription} />
            <RowInput label="Price" value={price} onChangeText={setPrice} keyboardType="numeric"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 12
    }
})
