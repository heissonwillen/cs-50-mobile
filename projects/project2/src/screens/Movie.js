import React from 'react'
import { View, Text } from 'react-native';

import { getMovie } from '../api'
import MovieInfo from '../components/MovieInfo'

class Detail extends React.Component {

  state = {
    imdbID: this.props.route.params.imdbID,
    movie: null,
  }

  componentDidMount() {
    getMovie(this.state.imdbID).then(movie=> this.setState({movie}))
    console.log(this.state.movie)
  }

  render() {
    return this.state.movie ? <MovieInfo movie={this.state.movie} /> : <View></View>
  }
}

export default Detail
