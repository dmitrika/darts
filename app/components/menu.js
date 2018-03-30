import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    Picker
} from 'react-native'

import {
    onGameSetName,
    onGameStart,
    onGameSetTotal
} from '../actions'

const mapStateToProps = state => ({
    total: String(state.total),
    p1: state.p1.name,
    p2: state.p2.name
})

const mapDispatchToProps = dispatch => bindActionCreators({
    onGameSetName,
    onGameStart,
    onGameSetTotal
}, dispatch)

const Menu = ({
    p1,
    p2,
    total,
    setName,
    onGameSetTotal,
    onGameSetName,
    onGameStart
}) => (
    <View style={styles.container}>
        <Text style={styles.title}>{p1} vs {p2}</Text>
        <View>
            <Text style={styles.inputTitle}>Player 1:</Text>
            <TextInput
                style={styles.input}
                placeholder={p1}
                onChangeText={name => onGameSetName('p1', name)}
            />
        </View>
        <View>
            <Text style={styles.inputTitle}>Player 2:</Text>
            <TextInput
                style={styles.input}
                placeholder={p2}
                onChangeText={name => onGameSetName('p2', name)}
            />
        </View>
        <View style={[styles.container, {flex: 0 }]}>
            <Text style={styles.inputTitle}>Total Score:</Text>
            <Picker
                enabled
                style={styles.picker}
                selectedValue={total}
                onValueChange={total => onGameSetTotal(total)}>
                <Picker.Item label="101" value="101" />
                <Picker.Item label="301" value="301" />
                <Picker.Item label="501" value="501" />
            </Picker>
        </View>
        <Button
            onPress={onGameStart}
            title="Start game"
        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        color: 'black',
        fontSize: 40,
        marginBottom: 20
    },
    inputTitle: {
        color: 'black',
        fontSize: 30,
        marginTop: 10
    },
    input: {
        height: 25
    },
    picker: {
        width: 90,
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)