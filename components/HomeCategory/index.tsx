import * as React from 'react';
import { Image, Text, View, FlatList } from 'react-native';
import styles from './styles';


interface HomeCategoryProps {
    category: {
        id: string,
        title: string,
        movies: {
            id: string,
            poster: string,
        }[]
    }
}

const HomeCategory = (props: HomeCategoryProps) => {
    const { category } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{category.title}</Text>
            <FlatList
                data={category.movies}
                renderItem={({ item }) => (
                    <Image style={styles.image} source={{ uri: item.poster }} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>

    );
}

export default HomeCategory;