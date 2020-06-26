import React from 'react'
import { View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { movie } from '../mockData'
import { fetchMovieInfo } from '../api'
import MovieInfo from '../components/MovieInfo'

class Detail extends React.Component {

  state = {
    imdbID: this.props.route.params.imdbID,
    movie: null,
  }

  componentDidMount() {
    fetchMovieInfo(this.state.imdbID).then(movie=> this.setState({movie}))
    console.log(this.state.movie)
  }

  render() {
    if (this.state.movie) {
      return (
        <MovieInfo movie={this.state.movie} />
      )
    }
    return (
      <View>
        <Text>
          Loading
        </Text>
      </View>
    )
  }
}

export default Detail
