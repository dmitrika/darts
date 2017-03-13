import {
    onScoreChange,
    onScoreSubmit,
    onScoreClear,
    onScoreUndo,
    onGameStart,
    onGameStartNew,
    onGameSetName,
    onGameSetTotal
} from '../app/actions'

describe('Actions snapshots', () => {
    test('onScoreChange', () => {
        expect(onScoreChange()).toMatchSnapshot()
    })

    test('onScoreSubmit', () => {
        expect(onScoreSubmit()).toMatchSnapshot()
    })

    test('onScoreClear', () => {
        expect(onScoreClear()).toMatchSnapshot()
    })

    test('onScoreUndo', () => {
        expect(onScoreUndo()).toMatchSnapshot()
    })

    test('onGameStart', () => {
        expect(onGameStart()).toMatchSnapshot()
    })

    test('onGameStartNew', () => {
        expect(onGameStartNew()).toMatchSnapshot()
    })

    test('onGameSetName', () => {
        expect(onGameStartNew()).toMatchSnapshot()
    })

    test('onGameSetTotal', () => {
        expect(onGameStartNew()).toMatchSnapshot()
    })
})