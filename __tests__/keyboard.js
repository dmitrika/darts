import 'react-native'
import React from 'react'
import { KeyBoard } from '../app/components/keyboard'

import renderer from 'react-test-renderer'

test('KeyBoard renders correctly', () => {
    let tree = renderer.create(
        <KeyBoard actions={{}} />
    ).toJSON()

    expect(tree).toMatchSnapshot()
})