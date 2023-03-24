import React from 'react'
import renderer from 'react-test-renderer'
import UIContent from './UIContent'

describe('Test on <UIContent /> component', () => {
    test('Should render without the props', () => {
        const componentNoprops = renderer.create(<UIContent />)
        const treeNoprops = componentNoprops.toJSON()
        expect(treeNoprops).toMatchSnapshot()
    })
})
