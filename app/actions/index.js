import { createAction } from 'redux-actions'

import {
    CHANGE_SCORE,
    RESET_GAME
} from '../constants'

export const onChangeScore = createAction(
    CHANGE_SCORE,
    score => score
)

export const resetGame = createAction(
    RESET_GAME
)