// render() {
//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         {search.Search.map(movie => (
//           <Row key={movie.imdbID} movie={movie}/>
//         ))}
//       </ScrollView>
//     </View>
//   )
// }

import React from 'react'
import { Button, View, TextInput, TouchableOpacity, Text, Image, ScrollView } from 'react-native';

function handleMoviePress(imdbID) {
  navigation.navigate("Movie", {"imdbID": imdbID})
}

const Row = props => {
  return (
    <View key={props.movie.imdbID} style={{paddingTop: 5}}>
      <TouchableOpacity
        style={styles.infoSection}
        activeOpacity={0.6}
        onPress={() => handleMoviePress(props.movie.imdbID)}
      >
        <Image style={styles.poster} source={{uri: props.movie.Poster}} />
        <Text style={{paddingLeft: 10, fontSize: 18, flex: 1}}>{props.movie.Title} ({props.movie.Year})</Text>
      </TouchableOpacity>
    </View>
  )
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

export default Row
