import React from 'react';
import { Button, View, TextInput, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { search, movie } from '../mockData'

const Results = () => {

  const navigation = useNavigation()

  function handleMoviePress(imdbID) {
    navigation.navigate("Movie", {"imdbID": imdbID})
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {search.Search.map(movie => (
          <View key={movie.imdbID} style={{paddingTop: 5}}>
            <TouchableOpacity
              style={styles.infoSection}
              activeOpacity={0.6}
              onPress={() => handleMoviePress(movie.imdbID)}
            >
              <Image style={styles.poster} source={{uri: movie.Poster}} />
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
    paddingRight: 5,
    paddingLeft: 5,
    flex: 1,
  },
  poster: {
    width: 90,
    height: 120,
    borderRadius: 5,
  },
  infoSection: {
    flex: 1,
    alignItems: 'center',
    flexDirection:'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 5,
  }
}

export default Results
