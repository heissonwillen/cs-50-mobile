import React from 'react';
import { Button, View, TextInput, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { search, movie } from '../mockData'

const Home = () => {

  const navigation = useNavigation()

  function handleNavigateToResults() {
    console.log("navigating to results")
    navigation.navigate("Results")
  }

  return (
    <View style={styles.container}>
      <Button title="Search" onPress={handleNavigateToResults} />
    </View>
  );
}

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  }
}


export default Home
