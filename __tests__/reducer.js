import {
    onScoreChange,
    onScoreSubmit,
    onScoreClear,
    onScoreUndo
} from '../app/actions'

import reducer, {initialState} from '../app/reducer'

describe('Actions snapshots', () => {
    test('onScoreChange under 180', () => {
        let nextState = reducer(initialState, onScoreChange(12))
        expect(nextState).toMatchSnapshot()
    })

    test('onScore change over 180', () => {
        let nextState = reducer(initialState, onScoreChange(181))
        expect(nextState).toMatchSnapshot()
    })

    test('onScoreSubmit empty score submit', () => {
        let nextState = reducer(initialState, onScoreSubmit())
        expect(nextState).toMatchSnapshot()
    })

    test('onScoreSubmit winning draw', () => {
        let nextState = reducer({
            ...initialState,
            currentPlayer: 101,
            currentScore: 101
        }, onScoreSubmit())

        expect(nextState).toMatchSnapshot()
    })

    test('onScoreSubmit bust draw', () => {
        let nextState = reducer({
            ...initialState,
            currentPlayer: 10,
            currentScore: 20
        }, onScoreSubmit())

        expect(nextState).toMatchSnapshot()
    })

    test('onScoreSubmit scored 1', () => {
        let nextState = reducer({
            ...initialState,
            currentPlayer: 501,
            currentScore: 1
        }, onScoreSubmit())

        expect(nextState).toMatchSnapshot()
    })

    test('onScoreClear', () => {
        let nextState = reducer({
            ...initialState,
            error: 'Test error',
            currentScore: 101
        }, onScoreClear())

        expect(nextState).toMatchSnapshot()
    })

    test('onScoreUndo', () => {
        let nextState = reducer({
            ...initialState,
            error: 'Test error',
            currentScore: 101
        }, onScoreUndo())

        expect(nextState).toMatchSnapshot()
    })
})