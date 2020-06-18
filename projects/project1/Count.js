import React from 'react'
import {StyleSheet, Text} from 'react-native'
import PropTypes from 'prop-types'


class Count extends React.Component {
	state = {
		count: 0,
	}

	render() {
		return (
			<Text style={styles.text}>
				{this.props.count}
			</Text>
		)
	}
}

const styles = StyleSheet.create({
		text: {fontSize: 72},
})

export default Count
