import React from 'react';
import { Button, View } from 'react-native';


const MovieInfoScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()} />
    </View>
  );
}


export default MovieInfoScreen