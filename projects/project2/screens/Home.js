import React from 'react';
import { Button, View, TextInput, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { search, movie } from '../mockData'

const HomeScreen = () => {

  const navigation = useNavigation()

  const handleMoviePress = (movieTitle) => {
    navigation.navigate('MovieInfoScreen')
  }

  return (
    <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          autoFocus
        />
      <ScrollView>
        {search.Search.map(movie => (
          <View key={movie.imdbID} style={{paddingTop: 5}}>
            <TouchableOpacity
              style={styles.touchableArea}
              activeOpacity={0.6}
              onPress={() => handleMoviePress(movie.Title)}
            >
              <Image style={styles.movieCoverImage} source={{uri: movie.Poster}} />
              <Text style={{paddingLeft: 10, fontSize: 18, flex: 1}}>{movie.Title} ({movie.Year})</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = {
  container: {
    padding: 15,
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
  },
  movieCoverImage: {
    width: 90,
    height: 120,
    borderRadius: 5,
  },
  touchableArea: {
    flex: 1,
    alignItems: 'center',
    flexDirection:'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 5,
  }
}

export default HomeScreen
