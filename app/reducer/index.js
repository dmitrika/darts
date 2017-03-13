import { Alert } from 'react-native'
import { handleActions } from 'redux-actions'

import {
    SCORE_CHANGE,
    SCORE_CLEAR,
    SCORE_SUBMIT,
    SCORE_UNDO,
    GAME_START,
    GAME_START_NEW,
    GAME_SET_NAME,
    GAME_SET_TOTAL
} from '../constants'

export let initialState = {
    view: 'menu',
    error: '',
    total: 301,
    currentScore: '',
    currentPlayer: 'p1',
    p1: {score: 301, name: 'p1'},
    p2: {score: 301, name: 'p2'},
    history: []
}

export default handleActions({
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
        let currentPlayer = state.currentPlayer
        let nextScore = state[currentPlayer].score - Number(state.currentScore)

        if (!state.currentScore) {
            return state
        }

        if (nextScore === 0 ) {
            Alert.alert(
                'Мы определили победителя!',
                `Победитель ${currentPlayer}`,
                [{text: 'OK'}],
                { cancelable: false }
            )

            return ({
                ...initialState,
                p1: {...initialState.p1, name: state.p1.name},
                p2: {...initialState.p2, name: state.p2.name}
            })
        }

        if (nextScore < 0) {
            return {
                ...state,
                history: [...state.history, 'Bust'],
                currentPlayer: currentPlayer === 'p1' ? 'p2' : 'p1'
            }
        }

        return {
            ...state,
            [currentPlayer]: {...state[currentPlayer], score: nextScore},
            history: [...state.history, state.currentScore],
            currentPlayer: currentPlayer === 'p1' ? 'p2' : 'p1'
        }
    },

    [SCORE_CLEAR]: state => ({
        ...state,
        error: '',
        currentScore: ''
    }),

    [SCORE_UNDO]: state => {
        if (state.currentScore) {
            return {...state, currentScore: '', error: ''}
        }

        let {history} = state

        if (history.length === 0) {
            return state
        }

        let lastDraw = history[history.length - 1]

        if (lastDraw === 'Bust') {
            lastDraw = 0
        } else {
            lastDraw = Number(lastDraw)
        }

        let prevPlayer = state.currentPlayer === 'p1' ? 'p2' : 'p1'

        return {
            ...state,
            history: history.slice(0, history.length - 1),
            [prevPlayer]: {...state[prevPlayer], score: state[prevPlayer].score + lastDraw},
            currentPlayer: prevPlayer
        }
    },

    [GAME_START]: state => ({
        ...state,
        view: 'game',
        p1: {...state.p1, score: state.total},
        p2: {...state.p2, score: state.total}
    }),

    [GAME_START_NEW]: state => ({
        ...initialState,
        p1: {...initialState.p1, name: state.p1.name},
        p2: {...initialState.p2, name: state.p2.name}
    }),

    [GAME_SET_NAME]: (state, {payload: {player, name}}) => ({
        ...state,
        [player]: {...state[player], name}
    }),

    [GAME_SET_TOTAL]: (state, {payload}) => ({
        ...state,
        total: payload
    })
}, initialState)
