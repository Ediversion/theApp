import React, { useState, useEffect } from 'react';
import { Pressable, View, Text, Image } from 'react-native';
import { Movie } from '../../src/models';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Storage } from "aws-amplify";



const MovieItem = ({ movie }: { movie: Movie }) => {
    const navigation = useNavigation();
    const [imgUrl, setImgUrl] = useState('');

    const onMoviePress = () => {
        navigation.navigate('MovieDetailsScreen', { id: movie.id })
    }

    useEffect(() => {
        if (movie.poster?.startsWith('http')) {
            setImgUrl(movie.poster)
            return;
        }

        Storage.get(movie.poster).then(setImgUrl);
    }, [])

    return (
        <Pressable onPress={onMoviePress}>
            <Image style={styles.image} source={{ uri: imgUrl }} />
        </Pressable>
    )
}

export default MovieItem;
