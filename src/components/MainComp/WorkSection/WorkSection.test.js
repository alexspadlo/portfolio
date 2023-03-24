import React from 'react'
import renderer from 'react-test-renderer'
import WorkSection from './WorkSection'

describe('Test on <WorkSection /> component', () => {
    test('Should render without the props', () => {
        const componentNoprops = renderer.create(<WorkSection />)
        const treeNoprops = componentNoprops.toJSON()
        expect(treeNoprops).toMatchSnapshot()
    })
})
