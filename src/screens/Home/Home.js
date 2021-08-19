import React from 'react'
import { StyleSheet, Text, View, FlatList, ImageBackground, SectionList } from 'react-native';

import {Input} from '@src/components';
import CategoryCard from './CategoryCard';
import CategoryCircle from './CategoryCircle';

import { categories, categories2 } from './config';
const BACKGROUND_IMAGE = require("@src/assets/images/home_background.jpg");


export default function Home(props) {

    const renderSectionItem = ({item}) => {
        console.log(item);
        const {name, icon, description, totalItems} = item;

        return (<CategoryCard name={name} iconName={icon} description={description} total={totalItems} onClick={onCategoryItemClick}/>)
    }

    const renderSectionHeader = ({ section: { title } }) => {

        return (<Text style={styles.sectionHeader}>{title}</Text>)
    }

    const renderHorizontalItem = ({item}) => {
        const { name } = item;

        return (<CategoryCircle name={name} onClick={onCategoryCircleItemClick}/>)
    }

    const onCategoryItemClick = () => {
        props.navigation.navigate('HomeInfo');
    }

    const onCategoryCircleItemClick = () => {
        console.log("Category circle pressed");
    }

    return (
        <View style={styles.container} >
                <View style={styles.searchContainer}>
                    <Text style={styles.searchText}>Search for food</Text>
                    <Input style={styles.searchInput}/>
                </View>

                <FlatList 
                    horizontal
                    data={categories2}
                    renderItem={renderHorizontalItem}
                    keyExtractor={item => item.id}
                />

                <SectionList
                    sections={categories}
                    renderItem={renderSectionItem}
                    renderSectionHeader={renderSectionHeader}
                    keyExtractor={(item, index) => item + index}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        paddingHorizontal: 6
    },

    searchContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    searchText: {
        flex: 8,
        fontSize: 18,
    },
    searchInput: {
        flex: 5,
        width: "100%"
    },
    
    sectionHeader: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 4,
        marginTop: 16
    }
})
