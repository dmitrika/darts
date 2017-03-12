import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

const mapDispatchToProps = state => ({
    p1: state.p1,
    p2: state.p2
})

const ScoreBoard = ({
    p1,
    p2
}) => (
    <View style={styles.wrapper}>
        <View>
            <Text style={styles.title}>P1</Text>
            <Text style={styles.score}>{p1}</Text>
        </View>
        <View>
            <Text style={styles.title}>P2</Text>
            <Text style={styles.score}>{p2}</Text>
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
        color: 'black',
        fontSize: 70
    }
})

export default connect(mapDispatchToProps)(ScoreBoard);