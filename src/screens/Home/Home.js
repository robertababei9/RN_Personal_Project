import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator, SectionList, TouchableOpacity, Modal, Alert } from 'react-native';

import {Input} from '@src/components';
import CategoryCard from './CategoryCard';
import CategoryCircle from './CategoryCircle';

import { categoriesMockup, categories2 } from './config';

import CategoryAPI from '@src/api/CategoryAPI';


export default function Home(props) {

    const sectionListRef = useRef(null);
    const categoryListRef = useRef(null);

    const [searchValue, setSearchValue] = useState("");

    const [categories, setCategories] = useState([]);
    const [sectionListData, setSectionListData] = useState([]);
    const [categoriesLoading, setCategoriesLoading] = useState(false);
    const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);

    const [tempCategories, setTempCategories] = useState({
        categories: [],
        sectionsData: []
    });


    // GET section list data
    useEffect(() => {
        fetchSectionListData();
    }, []);

    // when a section is focused ( is in wanted viewport)
    useEffect(() => {
        if (categories.length > 0 && categoryListRef.current)
            categoryListRef.current.scrollToIndex({index: selectedSectionIndex});
    }, [selectedSectionIndex]);

    // fetch category list
    const fetchSectionListData = () => {

        setCategoriesLoading(true);
        CategoryAPI.GetCategorySubcategoryModel().then(data => {
            setCategoriesLoading(false);
            const _sectionListData = data.map(category => ({
                title: category.name,
                id: category._id,
                data: category.Subcategories
            }));
            setSectionListData(_sectionListData);

            const _categories = data.map(category => ({
                id: category._id,
                name: category.name,
                AvatarIconName: category.AvatarIconName
            }));
            setCategories(_categories);

            setTempCategories({
                categories: _categories,
                sectionsData: _sectionListData
            });

        })
    }

    const renderHorizontalItem = ({item}) => {
        return (<CategoryCircle 
                    onClick={() => onCategoryCircleItemClick(item)} 
                    iconName={item.AvatarIconName} 
                    selected={categories.indexOf(item) == selectedSectionIndex}
                />)
    }

    const onCategoryCircleItemClick = (item) => {
        const sectionIndex = categories.indexOf(item);
        sectionListRef.current.scrollToLocation({
            sectionIndex: sectionIndex,
            itemIndex: 0
        });
        setSelectedSectionIndex(sectionIndex);
    }


    const renderSectionItem = ({item}) => {
        return (<CategoryCard product={item} onClick={onCategoryItemClick}/>)
    }

    const renderSectionHeader = ({ section}) => {
        const { title, id } = section;

        return (
            <View style={styles.sectionHeaderContainer}>
                <Text style={styles.sectionHeaderText}>{title}</Text>
                <View style={styles.sectionHeaderActionsContainer}>
                    <TouchableOpacity style={{marginLeft: 8}} onPress={() => props.navigation.navigate("AddSubcategory", { sectionId: id})}>
                        <Text style={styles.sectionHeaderAddText}>Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 32}} onPress={() => props.navigation.navigate("AddSubcategory", { sectionId: id})}>
                        <Text style={styles.sectionHeaderAddText}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 8}} onPress={() => handleDeleteAlert(id)}>
                        <Text style={styles.sectionHeaderAddText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    /// admin panel - render section header
    const renderHeader = () => {
        return (
            <View>
                <TouchableOpacity onPress={() => props.navigation.navigate("AddCategory")}>
                    <Text style={styles.sectionHeaderAddText}>Add category</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const onCategoryItemClick = () => {
        props.navigation.navigate('HomeInfo');
    }

    const getSectionOnScroll = ({viewableItems}) => {
        if (viewableItems.length > 0 && viewableItems[0].section) {
            const sectionTitle = viewableItems[0].section.title;
            const index = categories.map(x => x.name).indexOf(sectionTitle);
            setSelectedSectionIndex(index);
        }
    }

    const handleSearch = (val) => {
        setSearchValue(val);

        if (val == "") {
            setSectionListData(tempCategories.sectionsData);
            return;
        }

        const search_sectionData = tempCategories.sectionsData.filter(category =>
            category.data.some(subcategory => (
                subcategory.Name.toLowerCase().includes(val.toLowerCase()) ||
                subcategory.Description.toLowerCase().includes(val.toLowerCase())
            ))
        )
        .map(category => {
            return Object.assign({}, category, {data: category.data.filter(subcategory => (
                subcategory.Name.toLowerCase().includes(val.toLowerCase()) ||
                subcategory.Description.toLowerCase().includes(val.toLowerCase())
            ))})
        });

        console.log(search_sectionData)
        setSectionListData(search_sectionData);
    }

    const handleDeleteAlert = (sectionId) => {
        Alert.alert(
            "Are you sure ?",
            "Are you sure you want to delete the section ?",
            [
                // YES
                {
                    text: "Yes",
                    onPress: async () => {
                        const result = await CategoryAPI.Delete(sectionId) ;
                        if (result != true) return;
                        
                        // API call to delete + refresh SectionList
                        const newSectionList = sectionListData.filter(section => section.id != sectionId);
                        const newCategoryIcons = categories.filter(category => category.id != sectionId);

                        setSectionListData(newSectionList);
                        setCategories(newCategoryIcons);
                        setTempCategories(prev => ({...prev, sectionsData: newSectionList, categories: newCategoryIcons}));
                    }
                },
                // NO
                {
                    text: "No",
                }
            ]
        )
    }


    if (categoriesLoading) {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <ActivityIndicator size="large" color="#FF4C29"/>
            </View>
        )
    }

    return (
        <View style={styles.container} >
                <View style={styles.searchContainer}>
                    <Text style={styles.searchText}>Search for food</Text>
                    <Input style={styles.searchInput} value={searchValue} onChangeText={handleSearch}/>
                </View>

                {
                    searchValue == "" && (
                        <FlatList
                            ref={categoryListRef}
                            style={{minHeight: 65}}
                            horizontal
                            data={categories}
                            renderItem={renderHorizontalItem}
                            keyExtractor={item => item._id}
                        />
                    )
                }

                <SectionList
                    ref={sectionListRef}
                    style={{width: "100%"}}
                    sections={sectionListData}
                    renderItem={renderSectionItem}
                    renderSectionHeader={renderSectionHeader}
                    ListHeaderComponent={renderHeader}
                    keyExtractor={(item, index) => item + index}
                    onRefresh={fetchSectionListData}
                    refreshing={categoriesLoading}
                    viewabilityConfig={{
                        itemVisiblePercentThreshold: 50
                    }}
                    onViewableItemsChanged={getSectionOnScroll}

                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        // flexDirection: "row",
        // flexWrap: "wrap",
        // justifyContent: "space-around",
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
    },
    sectionHeaderActionsContainer: {
        flexDirection: "row"
    }
})
