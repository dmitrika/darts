import { createAction } from 'redux-actions'

import {
    SCORE_CHANGE,
    SCORE_SUBMIT,
    SCORE_CLEAR,
    SCORE_UNDO,
    GAME_NEXT_TURN,
    GAME_RESTART
} from '../constants'

export const onScoreChange = createAction(SCORE_CHANGE, score => score)
export const onScoreSubmit = createAction(SCORE_SUBMIT)
export const onScoreClear = createAction(SCORE_CLEAR)
export const onScoreUndo = createAction(SCORE_UNDO)

export const onGameRestart = createAction(GAME_RESTART)
