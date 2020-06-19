import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Vibration } from 'react-native';
import Constants from 'expo-constants';


const WORK_MINUTES = 25
const BREAK_MINUTES = 5

const minToSec = mins => mins*60

let isPaused = true
let isWorking = true


class Counter extends Component {
	state = {
		seconds: minToSec(BREAK_MINUTES),
	}

	componentDidMount() {
		this.timer = setInterval(this.decreaseCount, 1000)
	}

	decreaseCount = () => {
		const decreaseInterval = isPaused ? 0 : 1
		this.setState(prevState => ({
            seconds: prevState.seconds > 0 ? prevState.seconds - decreaseInterval : 0
        }))
		if (this.state.seconds === 0) {
			Vibration.vibrate()
		}
	}

    startStopCount = () => {isPaused = !isPaused}

    toggleCount = () => {
		isWorking = !isWorking
        this.setState(prevState => ({
            seconds: isWorking ? minToSec(BREAK_MINUTES) : minToSec(WORK_MINUTES),
        }))
		isPaused = true
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
                    <Button title="Toggle" onPress={this.toggleCount}/>
                </View>
                <View style={styles.button}>
                    <Button title={isPaused ? 'Start' : 'Pause'} onPress={this.startStopCount}/>
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
