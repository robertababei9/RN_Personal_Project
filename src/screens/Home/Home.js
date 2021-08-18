import React from 'react'
import { StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { categories } from './config';
const BACKGROUND_IMAGE = require("@src/assets/images/home_background.jpg");

const CategoryCard = ({name, iconName, description, total}) => {
    console.log(iconName);
    return (
        <View style={styles.categoryCard}>
            <View style={styles.categoryTitleContainer}>
                <Icon name={iconName} size={72} color="#FF4C29" />
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.descriptionText}>{description}</Text>
            </View>

            <View style={styles.categoryHeaderContainer}>
                <View style={styles.totalItemsContainer}>
                    <Text style={{color: "white", fontWeight: "bold"}}>{total} items</Text>
                </View>
            </View>
        </View>
    )
}

export default function Home() {

    const renderItem = ({item}) => {
        const {name, icon, description, totalItems} = item;

        return (<CategoryCard name={name} iconName={icon} description={description} total={totalItems}/>)
    }

    return (
        <ImageBackground style={styles.container} source={BACKGROUND_IMAGE}>
                <FlatList
                    data={categories}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    horizontal={false}
                    columnWrapperStyle={{
                        justifyContent: "space-around"
                    }}
                />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
    },
    button: {
        minWidth: 150
    },
    categoryCard: {
        justifyContent: "space-between",
        // backgroundColor: "#334756",
        backgroundColor: 'rgba(51, 71, 86, 0.8)',
        height: 200,
        width: "46%",
        margin: 8,
        borderRadius: 12,
        padding: 12
    },
    categoryTitleContainer: {
        justifyContent: "center",
        alignItems: "center"
        // margin: 12
    },
    nameText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    },
    descriptionText: {
        color: "white",
    },
    totalItemsContainer: {
        width: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    categoryHeaderContainer: {
        color: "white"
    },

})
