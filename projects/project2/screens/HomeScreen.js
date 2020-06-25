import React from 'react';
import { Button, View, TextInput, TouchableOpacity, Text, Image, ScrollView } from 'react-native';

import { search, movie } from '../mockData'


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          autoFocus
        />
      <ScrollView>
        {search.Search.map(item => (
          <View key={item.imdbID} style={{paddingTop: 5}}>
            <TouchableOpacity style={styles.touchableArea} activeOpacity={0.6} onPress={() => console.log("Pressed")}>
              <Image style={styles.movieCoverImage} source={{uri: String(item.Poster)}} />
                <View style={{flex: 1}}>
                  <Text style={{paddingLeft: 10, fontSize: 24, flex: 1}}> {item.Title} </Text>
                </View>
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
    flexDirection:'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 5,
  }
}

export default HomeScreen
