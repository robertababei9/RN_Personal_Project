import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';

import { useDispatch } from 'react-redux';
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

export default function CategoryCard({product, onClick}) {

    const {id, name, iconName, description, price } = product;
    const [noProducts, setNoProducts] = useState(0);

    const dispatch = useDispatch();

    const onAddProduct = () => {
        setNoProducts(prev => prev + 1)

        dispatch(addProduct(product));
    };

    const onRemoveProduct = () => {
        setNoProducts(prev => prev - 1);

        dispatch(removeProduct(product));
    }

    return (
        <TouchableOpacity onPress={onClick} style={styles.categoryCard}>
            <View style={styles.pictureContainer} > 
                <Icon name="fastfood" size={72} color="#FF4C29" />
            </View>

            <View style={styles.rightContainer} >
                <View>
                    <Text style={styles.nameText}>{name}</Text>
                    <Text style={styles.descriptionText}>{description}</Text>
                </View>

                <View style={styles.priceActionsContainer}>
                    <Text style={styles.priceText}>{price} lei</Text>
                    
                    <View style={styles.actionButtonsContainer}>
                        {
                            noProducts > 0 ? (
                                <React.Fragment>
                                    <ActionCardButton style={{marginRight: 6}} type="minus" onPress={onRemoveProduct}/>
                                    <Text style={styles.priceText}>{noProducts}</Text>
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
        backgroundColor: "#dfdfe5",
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