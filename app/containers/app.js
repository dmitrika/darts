import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native'

import KeyBoard from '../components/keyboard';

const mapStateToProps = state => ({
    p1: state.p1,
    p2: state.p2,
})

class App extends Component {
    onChangeScore = () => {
        this.setState({score: this.state.score - 10})
    }

    reloadGame = () => {
        this.setState({score: 501});
    }

    addNumber = number => {
        this.setState({currentScore: this.state.currentScore + number})
    }

    onSubmit = () => {
        let {currentPlayer, currentScore} = this.state

        this.setState({
            [currentPlayer]: this.state[currentPlayer] - currentScore
        })
    }

    render() {
        let {
            p1,
            p2,
            currentScore
        } = this.props

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    P1: {p1}, P2: {p2}
                </Text>
                <Text>
                    {currentScore}
                </Text>
                <KeyBoard />
                <Button
                    title="Restart"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
})

export default connect(mapStateToProps)(App)
