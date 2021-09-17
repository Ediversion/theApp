import React, { useState, useEffect } from 'react';
import { Image, View, FlatList, Pressable } from 'react-native';
import styles from './styles';
import { Text } from '../Themed';
import { Category, Movie } from '../../src/models';
import { DataStore } from '@aws-amplify/datastore';
import MovieItem from '../MovieItem';



interface HomeCategoryProps {
    category: Category,
}

const HomeCategory = (props: HomeCategoryProps) => {
    const { category } = props;

    const [movies, setMovies] = useState<Movie[]>([]);




    useEffect(() => {
        const fetchMovies = async () => {
            const result = (await DataStore.query(Movie)).filter((movie) => movie.categoryId === category.id);
            setMovies(result);
        };
        fetchMovies();
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{category.title}</Text>
            <FlatList
                data={movies}
                renderItem={({ item }) => <MovieItem movie={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>

    );
}

export default HomeCategory;