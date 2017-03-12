import { Alert } from 'react-native'
import { handleActions } from 'redux-actions'

import {
    SCORE_CHANGE,
    SCORE_CLEAR,
    SCORE_SUBMIT,
    SCORE_UNDO,
    GAME_RESTART
} from '../constants'

let initialState = {
    error: '',
    currentScore: '',
    currentPlayer: 'p1',
    p1: 50,
    p2: 50,
    history: []
}

const reducer = handleActions({
    [SCORE_CHANGE]: (state, action) => {
        let prevScore = Number(state.currentScore)

        if (prevScore + action.payload <= 180) {
            return {
                ...state,
                currentScore: state.currentScore + String(action.payload)
            }
        }

        return {...state, error: 'The possible  highest score is 180'}
    },

    [SCORE_SUBMIT]: state => {
        let nextScore = state[state.currentPlayer] - Number(state.currentScore)

        if (!state.currentScore) {
            return state
        }

        if (nextScore === 0 ) {
            Alert.alert(
                'Мы определили победителя!',
                `Победитель ${state.currentPlayer}`,
                [{text: 'OK'}],
                { cancelable: false }
            )

            return initialState
        }

        if (nextScore < 0) {
            return {
                ...state,
                history: [...state.history, 'Bust'],
                currentPlayer: state.currentPlayer === 'p1' ? 'p2' : 'p1'
            }
        }

        return {
            ...state,
            [state.currentPlayer]: nextScore,
            history: [...state.history, state.currentScore],
            currentPlayer: state.currentPlayer === 'p1' ? 'p2' : 'p1'
        }
    },

    [SCORE_CLEAR]: state => ({
        ...state,
        error: '',
        currentScore: ''
    }),

    [SCORE_UNDO]: state => {
        let {history} = state

        if (state.currentScore) {
            return {...state, currentScore: '', error: ''}
        }

        if (history.length === 0) {
            return state
        }

        let prevPlayer = state.currentPlayer === 'p1' ? 'p2' : 'p1'
        let lastDraw = history[history.length - 1]

        if (lastDraw === 'Bust') {
            lastDraw = 0
        } else {
            lastDraw = Number(lastDraw)
        }

        return {
            ...state,
            history: history.slice(0, history.length - 1),
            [prevPlayer]: state[prevPlayer] + lastDraw,
            currentPlayer: prevPlayer
        }
    },

    [GAME_RESTART]: () => initialState
}, initialState)

export default reducer