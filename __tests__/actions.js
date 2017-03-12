import {
    onScoreChange,
    onScoreSubmit,
    onScoreClear,
    onScoreUndo,
    onGameRestart
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

    test('onGameRestart', () => {
        expect(onGameRestart()).toMatchSnapshot()
    })
})