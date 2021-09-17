import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { DataStore } from '@aws-amplify/datastore';

import styles from './styles';
// import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategory';
import { View } from '../../components/Themed';
import { Category } from '../../src/models'



const HomeScreen = () => {
    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        const fetchCategories = async () => {
            setCategories(await DataStore.query(Category));
        };
        fetchCategories();
    }, []);
    return (
        <View style={styles.container}>
            {/* List of Categories */}
            <FlatList
                data={categories}
                renderItem={({ item }) => <HomeCategory category={item} />}
            />
        </View>
    );
}

export default HomeScreen;