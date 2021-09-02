import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator, SectionList, TouchableOpacity } from 'react-native';

import {Input} from '@src/components';
import CategoryCard from './CategoryCard';
import CategoryCircle from './CategoryCircle';

import { categoriesMockup, categories2 } from './config';

import CategoryAPI from '@src/api/CategoryAPI';


export default function Home(props) {

    const [categories, setCategories] = useState([]);
    const [categoriesLoading, setCategoriesLoading] = useState(false);

    // GET categories
    useEffect(() => {
        setCategoriesLoading(true);
        CategoryAPI.GetAll().then(data => {
            setCategories(data);
            setCategoriesLoading(false);
        })
    }, [])

    const renderSectionItem = ({item}) => {
        return (<CategoryCard product={item} onClick={onCategoryItemClick}/>)
    }

    const renderSectionHeader = ({ section}) => {
        const { title } = section;

        return (
            <View style={styles.sectionHeaderContainer}>
                <Text style={styles.sectionHeaderText}>{title}</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("AddSubcategory", { sectionId: section.id})}>
                    <Text style={styles.sectionHeaderAddText}>Add</Text>
                </TouchableOpacity>
            </View>
        )
    }

    /// admin panel
    const renderHeader = () => {
        return (
            <View>
                <TouchableOpacity onPress={() => props.navigation.navigate("AddCategory")}>
                    <Text style={styles.sectionHeaderAddText}>Add category</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const renderHorizontalItem = ({item}) => {
        const { name } = item;
        return (<CategoryCircle onClick={onCategoryCircleItemClick} iconName={item.AvatarIconName}/>)
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

                {/* TODO: Add ActivityIndicator while horizontal flatlist is loading. Refactor styles.container ... */}
                {/* <ActivityIndicator size="large" color="#FF4C29"/> */}

                <FlatList 
                    horizontal
                    data={categories}
                    renderItem={renderHorizontalItem}
                    keyExtractor={item => item._id}
                />


                <SectionList
                    sections={categoriesMockup}
                    renderItem={renderSectionItem}
                    renderSectionHeader={renderSectionHeader}
                    ListHeaderComponent={renderHeader}
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
    
    sectionHeaderContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 4,
        marginTop: 16
    },
    sectionHeaderText: {
        fontSize: 28,
        fontWeight: "bold",
    },
    sectionHeaderAddText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FF4C29",
    }
})
