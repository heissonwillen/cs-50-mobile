import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';


class Counter extends Component {
	state = {
		seconds: 60,
        minutes: 25,
	}

	componentDidMount() {
		this.timer = setInterval(this.decreaseCount, 1000)
	}

	decreaseCount = () => {
		this.setState(prevState => ({
            seconds: (prevState.seconds > 1 ? prevState.seconds - 1 : 0)
        }))
	}

    resetCount = () => {
        console.log("reseting");
        this.setState(prevState => ({
            seconds: 60,
        }))
    }

	render() {
		return (
            <>
                <Text style={styles.text}>{this.state.seconds}</Text>
                <Button style={styles.button} title="Reset" onPress={this.resetCount}
                />
            </>
        )
	}
}

const styles = StyleSheet.create({
    text: {
        fontSize: 72,
        marginVertical: 32,
    },
});


export default Counter;
