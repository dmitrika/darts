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
    onChangeScore
} from '../actions'

const mapStateToProps = state => ({
    p1: state.p1,
    p2: state.p2,
    currentScore: state.currentScore
})

const mapDispatchToProps = dispatch => bindActionCreators({
    onChangeScore
}, dispatch)

class App extends Component {
    onChangeScore = () => {
        this.props.onChangeScore(15)
    }

    render() {
        let {
            p1,
            p2,
            currentScore,
            onChangeScore
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
                    onPress={this.onChangeScore}
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
