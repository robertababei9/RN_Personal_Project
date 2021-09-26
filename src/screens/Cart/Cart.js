import React, { useMemo } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import {CategoryCard, Button, Price} from '@src/components';

export default function Cart(props) {

    const { selectedProducts } = useSelector(state => state.productsReducer);

    const uniqueProducts = useMemo(() => {
        const tempObj = {};
        selectedProducts.forEach(item => tempObj[item._id] = item);
        return Object.values(tempObj);
    }, [selectedProducts]);
    const total = useMemo(() => selectedProducts.reduce((prevVal, curr) => prevVal + curr.Price, 0), [selectedProducts])

    const onStartOrderingClick = () => {
        props.navigation.navigate("Home");
    }

    const test = () => {
        console.log(selectedProducts)
    }

    const renderCartItem = ({item}) => {
        return (
            <CategoryCard 
                product={item} 
                // onClick={() => onCategoryItemClick(item)}
            />)
    }

    console.log(uniqueProducts);

    return (
        <View style={styles.container}>
            {
                selectedProducts.length > 0 ? (
                    <View style={styles.notEmpty}>

                        <View style={styles.cartList}>
                            <FlatList
                                data={uniqueProducts}
                                renderItem={renderCartItem}
                                keyExtractor={item => item._id}
                            />
                        </View>

                        <View style={styles.bottomContainer}>
                            <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                                <Text style={{fontSize: 22, fontWeight: "bold"}}>Total</Text>
                                <Price price={total} type="RON"/>
                            </View>
                            <Button style={styles.button} title="Payment" onPress={test}/>
                        </View>

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
    notEmpty: {
        width: "100%",
        flex: 1,
        padding: 6
    },
    emptyTitleText: {
        fontWeight: "bold",
        fontSize: 28
    },
    emptySecondText: {
        fontSize: 16
    },
    button: {
        marginTop: 16
    },

    cartList: {
        // backgroundColor: "red",
        flex: 8
    },
    bottomContainer: {
        // backgroundColor: "blue",
        flex: 2,
        justifyContent: "flex-end",
        // alignItems: "center",
        // padding: 6

    }
})
