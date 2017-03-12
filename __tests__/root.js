import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import Root from '../app/root'

test('Root renders correctly', () => {
    let tree = renderer.create(
        <Root />
    ).toJSON()

    expect(tree).toMatchSnapshot()
})