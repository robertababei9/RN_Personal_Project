import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import Button from "@src/components/Button";

export default function Cart(props) {

    const { selectedProducts } = useSelector(state => state.productsReducer);

    const onStartOrderingClick = () => {
        props.navigation.navigate("Home");
    }

    const test = () => {
        console.log(selectedProducts)
    }

    return (
        <View style={styles.container}>
            {
                selectedProducts.length > 0 ? (
                    <View>
                        <Text>{selectedProducts.length} selected</Text>
                        {/* <Button style={styles.button} type="secondary" title="Press" onPress={test}/> */}

                    </View>
                ) : (
                    <View style={styles.empty}>
                        <Image style={styles.emptyBagImage} source={require('@src/assets/images/empty_bag.png')} resizeMode="cover"/>
                        <Text style={styles.emptyTitleText}>No Orders Yet</Text>
                        <Text style={styles.emptySecondText}>Your products will be listed here</Text>
                        <Button style={styles.button} type="secondary" title="Start ordering" onPress={onStartOrderingClick}/>
                    </View>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    emptyBagImage: {
        width: 120,
        height: 120
    },
    empty: {
        justifyContent: "center",
        alignItems: "center"
    },
    emptyTitleText: {
        fontWeight: "bold",
        fontSize: 28
    },
    emptySecondText: {
        fontSize: 16
    },

    button: {
        marginTop: 32
    }
})
