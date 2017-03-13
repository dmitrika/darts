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
    onGameStartNew
} from '../actions'

const mapStateToProps = state => ({
    error: state.error,
    currentScore: state.currentScore
})

const mapDispatchToProps = dispatch => bindActionCreators({
    onGameStartNew
}, dispatch)

const Game = ({
    onGameStartNew,
    currentScore,
    error,
}) => (
    <View style={styles.container}>
        <ScoreBoard />
        <Text>Сurrent turn {currentScore}</Text>
        <Text>{error}</Text>
        <KeyBoard />
        <Button
            onPress={onGameStartNew}
            title="Start New"
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

export default connect(mapStateToProps, mapDispatchToProps)(Game)
