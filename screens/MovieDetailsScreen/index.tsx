import React, { useState } from 'react'
import { Image, Pressable, FlatList } from 'react-native';
import { Text, View } from '../../components/Themed';
import styles from './styles';
import movie from '../../assets/data/movie';
import { MaterialIcons, Entypo, AntDesign, Feather, Ionicons, FontAwesome } from '@expo/vector-icons';
import EpisodeItem from '../../components/EpisodeItem';
import { Picker } from '@react-native-picker/picker';

const firstEp = movie.seasons.items[0].episodes.items[0];
const firstSeason = movie.seasons.items[0];

const MovieDetailsScreen = () => {

    const [currentSeason, setCurrentSeason] = useState(firstSeason);

    const seasonNames = movie.seasons.items.map(season => season.name);
    return (
        <View>
            <Image style={styles.image} source={{ uri: firstEp.poster }} />

            <FlatList
                data={currentSeason.episodes.items}
                style={{ marginBottom: 250 }}
                renderItem={({ item }) => <EpisodeItem episode={item} />}
                ListHeaderComponent={(
                    <View style={{ padding: 12 }}>
                        <Text style={styles.title}>{movie.title}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.match}>98% Match</Text>
                            <Text style={styles.year}>{movie.year}</Text>
                            <View style={styles.ageContainer}>
                                <Text style={styles.age}>12+</Text>
                            </View>
                            <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
                            <MaterialIcons name='hd' size={24} color='black' />
                        </View>
                        {/* Play Button */}
                        <Pressable onPress={() => { console.warn('Play') }} style={styles.playButton}
                        >
                            <Text style={styles.playButtonText}>
                                <Entypo name='controller-play' size={16} color='black' />
                                {' '}
                                Play</Text>
                        </Pressable>
                        {/* Download button */}
                        <Pressable onPress={() => { console.warn('Play') }} style={styles.downloadButton}
                        >
                            <Text style={styles.downloadButtonText}>
                                <AntDesign name='download' size={16} color='white' />
                                {' '}
                                Download</Text>
                        </Pressable>
                        <Text style={{ marginVertical: 10 }}>{movie.plot}</Text>
                        <Text style={styles.year}>Cast: {movie.cast}</Text>
                        <Text style={styles.year}>Creator: {movie.creator}</Text>

                        {/* Row with icon buttons */}
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                <AntDesign name='plus' size={24} />
                                <Text style={{ color: 'darkgrey', marginTop: 5 }}>My List</Text>
                            </View>

                            <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                <Feather name='thumbs-up' size={24} />
                                <Text style={{ color: 'darkgrey', marginTop: 5 }}>Rate</Text>
                            </View>

                            <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                <FontAwesome name='send-o' size={30} />
                                <Text style={{ color: 'darkgrey', marginTop: 5 }}>Share</Text>
                            </View>
                        </View>
                        <Picker
                            selectedValue={currentSeason.name}
                            onValueChange={(itemValue, itemIndex) => {
                                setCurrentSeason(movie.seasons.items[itemIndex])
                            }}
                            style={{ width: 130, marginTop: 10 }}
                            dropdownIconColor={'black'}
                        >
                            {seasonNames.map(seasonName => (
                                <Picker.Item label={seasonName} value={seasonName} key={seasonName} />
                            ))}
                        </Picker>
                    </View>
                )}
            />
        </View>
    )
}

export default MovieDetailsScreen;