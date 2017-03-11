import React, { Component } from 'react'
import { View, Button } from 'react-native'

export default class KeyBoard extends Component {
    render() {
        return (
            <View style={{alignItems: 'center', flexDirection: 'column'}}>
                <View style={{alignItems: 'center', flexDirection: 'row'}}>
                    <Button title="1" color="#841584"/>
                    <Button title="2" color="#841584"/>
                    <Button title="3" color="#841584"/>
                </View>
                <View style={{alignItems: 'center', flexDirection: 'row'}}>
                    <Button title="4" color="#841584"/>
                    <Button title="5" color="#841584"/>
                    <Button title="6" color="#841584"/>
                </View>
                <View style={{alignItems: 'center', flexDirection: 'row'}}>
                    <Button title="7" color="#841584"/>
                    <Button title="8" color="#841584"/>
                    <Button title="9" color="#841584"/>
                </View>
            </View>
        )
    }
}
