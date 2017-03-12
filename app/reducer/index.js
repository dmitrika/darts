import { Alert } from 'react-native'
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
    p1: 50,
    p2: 50
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

    [SCORE_SUBMIT]: state => {
        let nextScore = state[state.currentTurn] - Number(state.currentScore)

        if (nextScore === 0 ) {
            Alert.alert(
                'Мы определили победителя!',
                `Победитель ${state.currentTurn}`,
                [{text: 'OK'}],
                { cancelable: false }
            )

            return initialState
        }

        if (nextScore < 0) {
            return state
        }

        return {...state, [state.currentTurn]: nextScore}
    },

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