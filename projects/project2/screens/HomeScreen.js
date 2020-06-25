import React from 'react';
import { Button, View } from 'react-native';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to the movie screen"
        onPress={() => navigation.navigate('Movie')}
      />
    </View>
  );
}


export default HomeScreen
