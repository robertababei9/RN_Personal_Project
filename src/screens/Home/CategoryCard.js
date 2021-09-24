import React, { useState, useMemo } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useSelector, useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '@src/redux/actions/products.action';

const ActionCardButton = ({type = "plus", style = {},  onPress}) => {

    return (
        <TouchableOpacity style={[styles.plusButtonContainer, style, type == "minus" ? {backgroundColor: "white"} : {}]} onPress={onPress}>
            {
                type == "plus" ? 
                (<Icon name="add" size={22} color="white" />) :
                (<Icon name="remove" size={22} color="#FF4C29" />)
            }
        </TouchableOpacity>
    )
}

export default function CategoryCard({product, qty = 0, onClick}) {

    const {_id, Name, iconName, Description, Price } = product;

    const { selectedProducts } = useSelector(state => state.productsReducer);
    const dispatch = useDispatch();


    const onAddProduct = () => {
        dispatch(addProduct(product));
    };

    const onRemoveProduct = () => {
        dispatch(removeProduct(product._id));
    }

    const nrOfProducts = useMemo(() => selectedProducts.filter(x => x._id == product._id).length, [selectedProducts]);
    
    return (
        <TouchableOpacity onPress={onClick} style={styles.categoryCard}>
            <View style={styles.pictureContainer} > 
                <Icon name="fastfood" size={72} color="#FF4C29" />
            </View>

            <View style={styles.rightContainer} >
                <View>
                    <Text style={styles.nameText}>{Name}</Text>
                    <Text style={styles.descriptionText}>{Description}</Text>
                </View>

                <View style={styles.priceActionsContainer}>
                    <Text style={styles.priceText}>{Price} lei</Text>
                    
                    <View style={styles.actionButtonsContainer}>
                        {
                            nrOfProducts > 0 ? (
                                <React.Fragment>
                                    <ActionCardButton style={{marginRight: 6}} type="minus" onPress={onRemoveProduct}/>
                                    <Text style={styles.priceText}>{nrOfProducts}</Text>
                                    <ActionCardButton style={{marginLeft: 6}} type="plus" onPress={onAddProduct}/>
                                </React.Fragment>
                            ) : (
                                <ActionCardButton type="plus" onPress={onAddProduct}/>
                            )
                        }


                    </View>
                </View>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    categoryCard: {
        flexDirection: "row",
        backgroundColor: "#F5F5F5",
        // height: 180,
        // width: "95%",
        marginVertical: 8,
        borderRadius: 16,
        padding: 12,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    pictureContainer: {
        // backgroundColor: "pink",
        flex: 3,
        justifyContent: "center",
        alignItems: "center"
    },
    rightContainer: {
        // backgroundColor: "green",
        flex: 6,
        justifyContent: "space-around",
        padding: 8
    },
    priceActionsContainer: {
        marginTop: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    actionButtonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    nameText: {
        // color: "white",
        fontWeight: "bold",
        fontSize: 20
    },
    descriptionText: {
        // color: "white",
    },
    priceText: {
        fontSize: 17,
        fontWeight: "bold"
    },

    plusButtonContainer: {
        backgroundColor: "#FF4C29",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        height: 36,
        width: 36
    }

})
