import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native'

import KeyBoard from '../components/keyboard';

import {
    onRestartGame
} from '../actions'

const mapStateToProps = state => ({
    error: state.error,
    p1: state.p1,
    p2: state.p2,
    currentScore: state.currentScore
})

const mapDispatchToProps = dispatch => bindActionCreators({
    onRestartGame
}, dispatch)

class App extends Component {
    render() {
        let {
            p1,
            p2,
            currentScore,
            onRestartGame,
            error
        } = this.props

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    P1: {p1}, P2: {p2}
                </Text>
                <Text>Сurrent score {currentScore}</Text>
                <Text>{error}</Text>
                <KeyBoard />
                <Button
                    onPress={onRestartGame}
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
