import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View, Button } from 'react-native'

import {
    onChangeScore,
    onScoreSubmit,
    onScoreClear,
    onNextTurn
} from '../actions'

const FIOLET = '#841584'

let buttons = [
    [{title: '1'}, {title: '2'}, {title: '3'}],
    [{title: '4'}, {title: '5'}, {title: '6'}],
    [{title: '7'}, {title: '8'}, {title: '9'}],
    [{title: 'Undo'}, {title: '0'}, {title: 'Submit'}],
]

let mapDispatchToProps = dispatch => bindActionCreators({
    onChangeScore,
    onScoreSubmit,
    onScoreClear,
    onNextTurn
}, dispatch)


class KeyBoard extends Component {
    onButtonPress = title => {
        let {
            onChangeScore,
            onScoreSubmit,
            onScoreClear,
            onNextTurn
        } = this.props

        if (title === 'Undo') {
            return // dispatch undo last action
        }

        if (title === 'Submit') {
            onScoreSubmit()
            onScoreClear()
            onNextTurn()
            return

        }

        onChangeScore(title)
    }

    render() {
        return (
            <View style={{alignItems: 'center', flexDirection: 'column'}}>
                {buttons.map((row, i) => (
                    <View key={i} style={{alignItems: 'center', flexDirection: 'row'}}>
                        {row.map(button => (
                            <Button
                                key={button.title}
                                onPress={this.onButtonPress.bind(this, button.title)}
                                {...button}
                            />
                        ))}
                    </View>
                ))}
            </View>
        )
    }
}

export default connect(null, mapDispatchToProps)(KeyBoard)