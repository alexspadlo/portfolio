import React from 'react'
import renderer from 'react-test-renderer'
import MainComp from './MainComp'

describe('Test on <MainComp /> component', () => {
    test('Should render without the props', () => {
        const componentNoprops = renderer.create(<MainComp />)
        const treeNoprops = componentNoprops.toJSON()
        expect(treeNoprops).toMatchSnapshot()
    })
})
