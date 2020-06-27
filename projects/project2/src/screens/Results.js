import React from 'react';
import { Button, View, TextInput, TouchableOpacity, Text, Image, ScrollView } from 'react-native';

import { search } from '../api'

const resultsPerPage = 10

class Results extends React.Component {

  state = {
    queryString: this.props.route.params,
    currentPage: 1,
    search: null,
    numberOfPages: null,
  }

  componentDidMount() {
    search(this.state.currentPage, this.state.queryString).then(search => this.setState({
      search: search,
      numberOfPages: Math.floor(search.totalResults/resultsPerPage)+1,
    }))

    this.setState({
      numberOfPages: 10,
    })

  }

  loadResults = (page, queryString) => {
    if (page <= this.state.numberOfPages) {
      search(page, queryString).then(search => this.setState({
        search: search,
        currentPage: page,
      }))
    }
  }

  handleMoviePress = imdbID => {
    this.props.navigation.navigate('Movie', {imdbID})
  }


  render() {
    return (this.state.search) ? (
      <View style={styles.container}>
        <ScrollView>
          {this.state.search.Search.map(movie => (
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
        <View style={{padding: 5}}>
          <Button title="Load More" onPress={() => this.loadResults(this.state.currentPage+1, this.state.queryString)}/>
        </View>
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
