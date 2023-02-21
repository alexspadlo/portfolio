import React from 'react'
import renderer from 'react-test-renderer'
import TestComp from './TestComp'
jest.mock('@google/model-viewer')

describe('Test on <TestComp /> component', () => {
    test('Should render without the props', () => {
        const componentNoprops = renderer.create(<TestComp />)
        const treeNoprops = componentNoprops.toJSON()
        expect(treeNoprops).toMatchSnapshot()
    })
})
