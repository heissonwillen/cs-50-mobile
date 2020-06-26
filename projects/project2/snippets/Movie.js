import React from 'react';
import { Button, View, TextInput, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { movie } from '../mockData'
import { fetchMovieInfo } from '../api'

const Detail = () => {

  const route = useRoute()

  const navigation = useNavigation()

  function Row(props) {
    return (
      <Text>{props.title}:
        <Text style={styles.info}> {props.content}</Text>
      </Text>
    )
  }

  return (
    <View style={styles.container}>
      <Image style={styles.poster} source={{uri: movie.Poster}} />
      <ScrollView style={{flex: 1}}>
        <Text style={styles.title}>Star Wars: Episode VI - Return of the Jedi</Text>

        <Row title="Year" content={movie.Year}/>
        <Row title="Released" content={movie.Released} />
        <Row title="Runtime" content={movie.Runtime} />
        <Row title="Genre" content={movie.Genre} />
        <Row title="Director" content={movie.Director} />
        <Row title="Writer" content={movie.Writer} />
        <Row title="Actors" content={movie.Actors} />
        <Row title="Language" content={movie.Language} />
        <Row title="Awards" content={movie.Awards} />
        <Row title="Production" content={movie.Production} />

        <TouchableOpacity onPress={() => console.log("movie")}>
          <Row title="Website" content={movie.Website} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = {
  container: {
    padding: 5,
    flex: 1,
    alignItems: 'stretch'
  },
  poster: {
    height: 250,
    borderRadius: 5,
  },
  title: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  info: {
    fontWeight: 'bold',
  },
}

export default Detail
