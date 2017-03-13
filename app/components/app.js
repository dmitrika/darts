import React, { Component } from 'react'
import { connect } from 'react-redux'

import Menu from './menu'
import Game from './game'

const mapStateToProps = state => ({
    view: state.view
})

const App = ({ view }) => ({
    menu: <Menu/>,
    game: <Game/>
}[view])

export default connect(mapStateToProps)(App)
