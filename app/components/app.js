import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native'

import ScoreBoard from './scoreboard'
import KeyBoard from './keyboard'

import {
    onRestartGame,
    onScoreClear
} from '../actions'

const mapStateToProps = state => ({
    error: state.error,
    p1: state.p1,
    p2: state.p2,
    currentScore: state.currentScore
})

const mapDispatchToProps = dispatch => bindActionCreators({
    onRestartGame,
    onScoreClear
}, dispatch)

class App extends Component {
    render() {
        let {
            p1,
            p2,
            currentScore,
            onScoreClear,
            onRestartGame,
            error
        } = this.props

        return (
            <View style={styles.container}>
                <ScoreBoard />
                <Text>Сurrent turn {currentScore}</Text>
                <Text>
                    {error} {error && (<Text onPress={onScoreClear}>Clear score</Text>)}
                </Text>
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
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
