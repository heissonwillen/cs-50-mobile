import React from 'react'
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';


const Row = props => {
  return (
    <Text>{props.title}:
      <Text style={styles.info}> {props.content}</Text>
    </Text>
  )
}

const MovieInfo = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.poster} source={{uri: props.movie.Poster}} />
      <Text style={styles.title}>{props.movie.Title}</Text>
      <ScrollView style={{flex: 1}}>

        <Row title="Year" content={props.movie.Year}/>
        <Row title="Released" content={props.movie.Released} />
        <Row title="Runtime" content={props.movie.Runtime} />
        <Row title="Genre" content={props.movie.Genre} />
        <Row title="Director" content={props.movie.Director} />
        <Row title="Writer" content={props.movie.Writer} />
        <Row title="Actors" content={props.movie.Actors} />
        <Row title="Language" content={props.movie.Language} />
        <Row title="Awards" content={props.movie.Awards} />
        <Row title="Production" content={props.movie.Production} />

        <TouchableOpacity onPress={() => console.log("movie")}>
          <Row title="Website" content={props.movie.Website} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = {
  info: {
    fontWeight: 'bold',
  },
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
}

export default MovieInfo
