import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';


const WORK_MINUTES = 25
const BREAK_MINUTES = 5

const minToSec = mins => mins*60

let isPaused = false


class Counter extends Component {
	state = {
		seconds: minToSec(WORK_MINUTES),
	}

	componentDidMount() {
		this.timer = setInterval(this.decreaseCount, 1000)
	}

	decreaseCount = () => {
		this.setState(prevState => ({
            seconds: (prevState.seconds > 1 ? prevState.seconds - 1 : 0)
        }))
	}

    toggleCount = () => {
        console.log('toggle!')
    }

    resetCount = () => {
        console.log("reseting timer");
        this.setState(prevState => ({
            seconds: minToSec(WORK_MINUTES),
        }))
    }

    getFormatedTime = seconds => {
        const formatedSeconds = String(seconds % 60).padStart(2, '0')
        const formatedMinutes = String(Math.floor(seconds/60)).padStart(2, '0')
        return `${formatedMinutes}:${formatedSeconds}`
    }

	render() {
		return (
            <>
                <Text style={styles.text}>{this.getFormatedTime(this.state.seconds)}</Text>
                <View style={styles.button}>
                    <Button title="Reset" onPress={this.resetCount}/>
                </View>
                <View style={styles.button}>
                    <Button title="Start/Stop" onPress={this.toggleCount}/>
                </View>
            </>
        )
	}
}

const styles = StyleSheet.create({
    text: {
        fontSize: 72,
        marginVertical: 32,
    },
    button: {
        marginVertical: 10,
    }
});


export default Counter;
