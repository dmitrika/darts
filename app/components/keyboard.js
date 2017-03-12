import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

import {
    onScoreChange,
    onScoreSubmit,
    onScoreClear,
    onScoreUndo
} from '../actions'

let buttons = [
    [{title: '1'}, {title: '2'}, {title: '3'}],
    [{title: '4'}, {title: '5'}, {title: '6'}],
    [{title: '7'}, {title: '8'}, {title: '9'}],
    [
        {title: 'Undo', style: {fontSize: 25}},
        {title: '0'},
        {title: 'Submit', style: {fontSize: 25}}
    ],
]

let mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        onScoreChange,
        onScoreSubmit,
        onScoreClear,
        onScoreUndo
    }, dispatch)
})

export const KeyBoard = ({actions}) => {
    let onButtonPress = title => {
        if (title === 'Undo') {
            return actions.onScoreUndo()
        }

        if (title === 'Submit') {
            actions.onScoreSubmit()
            return actions.onScoreClear()
        }

        actions.onScoreChange(title)
    }

    return (
        <View style={{alignItems: 'center', flexDirection: 'column'}}>
            {buttons.map((row, i) => (
                <View key={i} style={{alignItems: 'center', flexDirection: 'row'}}>
                    {row.map(button => (
                        <TouchableOpacity
                            key={button.title}
                            style={styles.button}
                            onPress={onButtonPress.bind(this, button.title)}
                        >
                            <Text style={[styles.buttonText, button.style]}>
                                {button.title}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        marginRight: 5,
        marginBottom: 5,
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    buttonText: {
        fontSize: 55,
        fontWeight: '500',
        color: '#222'
    }
})

export default connect(null, mapDispatchToProps)(KeyBoard)
