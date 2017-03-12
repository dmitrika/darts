import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './containers/app'
import reducer from './reducer'

let store = createStore(reducer)

export default () => (
    <Provider store={store}>
        <App />
    </Provider>
)
