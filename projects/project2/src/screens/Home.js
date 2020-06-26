import React from 'react';
import { Button, View, TextInput, Text } from 'react-native';


class Home extends React.Component {

  state = {
    queryString: null
  }

  handleTextChange(text) {
    this.setState((state) => {
      return {queryString: text}
    })
  }

  handleSubmit(){
    this.props.navigation.navigate('Results', this.state.queryString)
  }

  render(){
    return (
      <View style={styles.container}>
      <View style={{paddingBottom: 10}}>
        <TextInput
        style={styles.textInput}
        onChangeText={text => this.handleTextChange(text)}
        placeholder="Type here! 😄"
        textAlign="center"
        />
      </View>
        <Button title="Search" onPress={() => this.handleSubmit()} />
      </View>
    )
  }
}

const styles = {
  container: {
    padding: 30,
    justifyContent: 'center',
    alignItems: 'stretch',
    flex: 1,
  },
  textInput: {
    height: 60,
    borderRadius: 8,
    // borderColor: '#000000',
    // borderWidth: 2,
    backgroundColor: '#FFFFFF'
  }
}


export default Home
