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

import { onGameRestart } from '../actions'

const mapStateToProps = state => ({
    error: state.error,
    currentScore: state.currentScore
})

const mapDispatchToProps = dispatch => bindActionCreators({
    onGameRestart
}, dispatch)

const App = ({
    onGameRestart,
    currentScore,
    error,
}) => (
    <View style={styles.container}>
        <ScoreBoard />
        <Text>Сurrent turn {currentScore}</Text>
        <Text>{error}</Text>
        <KeyBoard />
        <Button
            onPress={onGameRestart}
            title="Restart"
        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
