import * as React from 'react';
import { Image, Text, View, FlatList, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
    const navigation = useNavigation()
    const onMoviePress = (movie) => {
        navigation.navigate('MovieDetailsScreen', { id: movie.id })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{category.title}</Text>
            <FlatList
                data={category.movies}
                renderItem={({ item }) => (
                    <Pressable onPress={() => onMoviePress(item)}>
                        <Image style={styles.image} source={{ uri: item.poster }} />
                    </Pressable>

                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>

    );
}

export default HomeCategory;