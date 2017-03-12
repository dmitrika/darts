import { handleActions } from 'redux-actions'

import {
    SCORE_CHANGE,
    SCORE_CLEAR,
    SCORE_SUBMIT,
    GAME_NEXT_TURN,
    GAME_RESTART
} from '../constants'

let initialState = {
    error: '',
    currentScore: '',
    currentTurn: 'p1',
    p1: 501,
    p2: 502
}

const reducer = handleActions({
    [SCORE_CHANGE]: (state, action) => {
        let prevScore = state.currentScore

        if (Number(prevScore) + action.payload <= 180) {
            return {
                ...state,
                currentScore: state.currentScore + String(action.payload)
            }
        }

        return {...state, error: 'The possible  highest score is 180'}
    },

    [SCORE_SUBMIT]: state => ({
        ...state,
        [state.currentTurn]: state[state.currentTurn] - Number(state.currentScore)
    }),

    [SCORE_CLEAR]: state => ({
        ...state,
        error: '',
        currentScore: ''
    }),

    [GAME_NEXT_TURN]: state => ({
        ...state,
        currentTurn: state.currentTurn === 'p1' ? 'p2' : 'p1'
    }),

    [GAME_RESTART]: () => initialState
}, initialState)

export default reducer