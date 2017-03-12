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
    currentTurn: state.currentTurn,
    p1: state.p1,
    p2: state.p2
})

const ScoreBoard = ({p1, p2, currentTurn, history}) => (
    <View style={styles.wrapper}>
        <View>
            <Text style={styles.title}>P1</Text>
            <Text style={[styles.score, {color: currentTurn !== 'p1' ? 'grey' : 'black'}]}>{p1}</Text>
            <Text>{history.length > 0 && getHistory(history, 1)}</Text>
        </View>
        <View>
            <Text style={styles.title}>P2</Text>
            <Text style={[styles.score, {color: currentTurn !== 'p2' ? 'grey' : 'black'}]}>{p2}</Text>
            <Text>{history.length > 0 && getHistory(history, 2)}</Text>
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
        fontSize: 35,
    },
    score: {
        fontSize: 70
    }
})

export default connect(mapDispatchToProps)(ScoreBoard)
