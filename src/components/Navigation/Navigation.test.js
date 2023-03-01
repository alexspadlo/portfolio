import React from 'react'
import renderer from 'react-test-renderer'
import Navigation from './Navigation'

describe('Test on <Navigation /> component', () => {
    test('Should render without the props', () => {
        const componentNoprops = renderer.create(<Navigation />)
        const treeNoprops = componentNoprops.toJSON()
        expect(treeNoprops).toMatchSnapshot()
    })
})
