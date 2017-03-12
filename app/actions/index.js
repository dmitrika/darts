import { createAction } from 'redux-actions'

import {
    SCORE_CHANGE,
    SCORE_SUBMIT,
    SCORE_CLEAR,
    GAME_NEXT_TURN,
    GAME_RESTART
} from '../constants'

export const onChangeScore = createAction(
    SCORE_CHANGE,
    score => score
)

export const onScoreSubmit = createAction(SCORE_SUBMIT)
export const onScoreClear = createAction(SCORE_CLEAR)

export const onNextTurn = createAction(GAME_NEXT_TURN)
export const onRestartGame = createAction(GAME_RESTART)