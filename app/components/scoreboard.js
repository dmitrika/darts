import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

import getHistory from '../helpers/getHistory'

const mapDispatchToProps = state => ({
    history: state.history,
    currentPlayer: state.currentPlayer,
    p1: state.p1,
    p2: state.p2
})

export const ScoreBoard = ({p1, p2, currentPlayer, history}) => (
    <View style={styles.wrapper}>
        <View>
            <Text style={styles.title}>
                {p1.name}
            </Text>
            <Text style={[styles.score, {color: currentPlayer !== 'p1' ? 'grey' : 'black'}]}>
                {p1.score}
            </Text>
            <Text>
                {history.length > 0 && getHistory(history, 1)}
            </Text>
        </View>
        <View>
            <Text style={styles.title}>
                {p2.name}
            </Text>
            <Text style={[styles.score, {color: currentPlayer !== 'p2' ? 'grey' : 'black'}]}>
                {p2.score}
            </Text>
            <Text>
                {history.length > 0 && getHistory(history, 2)}
            </Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        maxHeight: 150,
        width: '100%',
    },
    title: {
        fontSize: 25,
    },
    score: {
        fontSize: 70
    }
})

export default connect(mapDispatchToProps)(ScoreBoard)
