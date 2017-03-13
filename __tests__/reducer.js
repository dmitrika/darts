import {
    onScoreChange,
    onScoreSubmit,
    onScoreClear,
    onScoreUndo,
    onGameStart,
    onGameSetName,
    onGameSetTotal,
    onGameStartNew
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
            p1: {score: 101},
            currentPlayer: 'p1',
            currentScore: 101
        }, onScoreSubmit())

        expect(nextState).toMatchSnapshot()
    })

    test('onScoreSubmit bust draw', () => {
        let nextState = reducer({
            ...initialState,
            p1: {score: 11},
            currentPlayer: 'p1',
            currentScore: 20
        }, onScoreSubmit())

        expect(nextState).toMatchSnapshot()
    })

    test('onScoreSubmit scored 1', () => {
        let nextState = reducer({
            ...initialState,
            p1: {score: 11},
            currentPlayer: 'p1',
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

    test('onGameStart', () => {
        let nextState = reducer(initialState, onGameStart())

        expect(nextState).toMatchSnapshot()
    })

    test('onGameStartNew', () => {
        let nextState = reducer({
            ...initialState,
            p1: {...initialState.p1, name: 'p1Name'},
            p2: {...initialState.p2, name: 'p2Name'}
        }, onGameStartNew())

        expect(onGameStartNew).toMatchSnapshot()
    })

    test('onGameSetName', () => {
        let nextState = reducer(initialState, onGameSetName('p1', 'test'))

        expect(nextState).toMatchSnapshot()
    })

    test('onGameSetTotal', () => {
        let nextState = reducer(initialState, onGameSetTotal('101'))

        expect(nextState).toMatchSnapshot()
    })
})