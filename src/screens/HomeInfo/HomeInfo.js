import React, { useState, useMemo } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

import { useSelector, useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '@src/redux/actions/products.action';

import { Price } from '@src/components';
import EmptyFoodImage from "@src/assets/images/empty_food_image.png";

const ActionCardButton = ({type = "plus", style = {},  onPress}) => {

    return (
        <TouchableOpacity style={[styles.plusButtonContainer, style, type == "minus" ? {backgroundColor: "white"} : {}]} onPress={onPress}>
            {
                type == "plus" ? 
                (<Icon2 name="add" size={22} color="white" />) :
                (<Icon2 name="remove" size={22} color="#FF4C29" />)
            }
        </TouchableOpacity>
    )
}



export default function HomeInfo(props) {

    const [favorite, setFavorite] = useState(false);
    const item = props.route.params.item;

    const { selectedProducts } = useSelector(state => state.productsReducer);
    const dispatch = useDispatch();

    const onAddProduct = () => {
        // setNoProducts(prev => prev + 1)

        dispatch(addProduct(item));
    };

    const onRemoveProduct = () => {
        // setNoProducts(prev => prev - 1);

        dispatch(removeProduct(item._id));
    }

    const nrOfProducts = useMemo(() => selectedProducts.filter(x => x._id == item._id).length, [selectedProducts]);

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={EmptyFoodImage} resizeMode="contain"/>

            <View style={styles.bottomContainer}>
                <View style={styles.bottomTextContainer}>
                    <Text style={styles.title}>Buffalo Burger</Text>
                    <Price price={47.99} type="RON"/>

                    <Text style={styles.description}>{item.Description}</Text>
                </View>
                
                <View style={styles.bottomActionsCotainer}>
                    <TouchableOpacity onPress={() => setFavorite(prev => !prev)}>
                        {
                            favorite ? (
                                <Icon name="heart" size={40} color="#FF4C29" />
                            ) : (
                                <Icon name="hearto" size={40} color="#FF4C29" />
                            )
                        }
                    </TouchableOpacity>

                    <View style={styles.addRemoveContainer}>

                        {
                            nrOfProducts > 0 ? (
                                <React.Fragment>
                                    <ActionCardButton style={{marginRight: 6}} type="minus" onPress={onRemoveProduct}/>
                                    <Text style={{fontSize: 17, fontWeight: "bold"}}>{nrOfProducts}</Text>
                                    <ActionCardButton style={{marginLeft: 6}} type="plus" onPress={onAddProduct}/>
                                </React.Fragment>
                            ) : (
                                <ActionCardButton type="plus" onPress={onAddProduct}/>
                            )
                        }

                        
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        flex: 3,
        // backgroundColor: "red",
        backgroundColor: "lightgray",

    },
    bottomContainer: {
        flex: 4,
        // justifyContent: "center",
        alignItems: "flex-start",
        width: "100%",
        padding: 12,
        // marginTop: -30
    },
    title: {
        fontWeight: "bold",
        fontSize: 26,
        // backgroundColor: "red"
    },
    description: {
        marginTop: 16
    },

    bottomTextContainer: {
        // backgroundColor: "yellow",
        width: "100%",
        flex: 8
    },  
    bottomActionsCotainer: {
        // backgroundColor: "red",
        width: "100%",
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    addRemoveContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
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
