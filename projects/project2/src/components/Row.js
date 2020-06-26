import React from 'react'
import { Text } from 'react-native';


const Row = props => {
  return (
    <Text>{props.title}:
      <Text style={styles.info}> {props.content}</Text>
    </Text>
  )
}

const styles = {
  info: {
    fontWeight: 'bold',
  },
}

export default Row
