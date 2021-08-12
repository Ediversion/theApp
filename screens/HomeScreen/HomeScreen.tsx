import * as React from 'react';
import { Image, StyleSheet, Text, View, FlatList } from 'react-native';
import styles from './styles';
import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategory';

const first = categories.items[0]

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            {/* List of Categories */}
            <FlatList
                data={categories.items}
                renderItem={({ item }) => <HomeCategory category={item} />}
            />
        </View>
    );
}

export default HomeScreen;