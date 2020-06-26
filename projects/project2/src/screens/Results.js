import React from 'react';
import { Button, View, TextInput, TouchableOpacity, Text, Image, ScrollView } from 'react-native';

import { search } from '../mockData'
import { searchMovies, getMovie } from '../api'


class Results extends React.Component {

  state = {
    queryString: this.props.route.params,
    movies: null,
  }

  componentDidMount() {
    searchMovies(this.state.queryString).then(movies => this.setState({movies}))
    // console.log(this.state)
  }

  handleMoviePress = imdbID => {
    this.props.navigation.navigate('Movie', {imdbID})
  }


  render() {
    return this.state.movies ? (
      <View style={styles.container}>
        <ScrollView>
          {this.state.movies.Search.map(movie => (
            <View key={movie.imdbID} style={{paddingTop: 5}}>
              <TouchableOpacity
                style={styles.infoSection}
                activeOpacity={0.6}
                onPress={() => this.handleMoviePress(movie.imdbID)}
              >
                <Image style={styles.poster} source={{uri: movie.Poster}} />
                <Text style={{paddingLeft: 10, fontSize: 18, flex: 1}}>{movie.Title} ({movie.Year})</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    ) : <View></View>
  }
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
