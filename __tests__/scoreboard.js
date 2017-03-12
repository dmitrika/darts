import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import { ScoreBoard } from '../app/components/scoreboard'

test('ScoreBoard renders correctly', () => {
    let tree = renderer.create(
        <ScoreBoard
            p1="P1"
            p2="P2"
            currentPlayer="P1"
            history={[]}
        />
    ).toJSON()

    expect(tree).toMatchSnapshot()
})