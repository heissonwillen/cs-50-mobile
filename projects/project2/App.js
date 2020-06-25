import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
// import { createStackNavigator } from 'react-navigation-stack';


// const MainStack = createStackNavigator({
//
// })

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 24,
        padding: 20,
      }}>
        Search for a movie
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
  },
});
