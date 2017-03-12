import { handleActions } from 'redux-actions'

import {
    CHANGE_SCORE
} from '../constants'

let initialState = {
    currentScore: 666,
    currentTurn: 'p1',
    p1: 501,
    p2: 502
}

const reducer = handleActions({
    [CHANGE_SCORE]: (state, action) => ({
        ...state,
        currentScore: state.currentScore + action.payload
    })
}, initialState)

export default reducer