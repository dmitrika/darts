import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './containers/app'
import Reducer from './reducers'

let store = createStore(Reducer)

export default class DartsScore extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}