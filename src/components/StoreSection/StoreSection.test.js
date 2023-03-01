import React from 'react'
import renderer from 'react-test-renderer'
import StoreSection from './StoreSection'

describe('Test on <StoreSection /> component', () => {
    test('Should render without the props', () => {
        const componentNoprops = renderer.create(<StoreSection />)
        const treeNoprops = componentNoprops.toJSON()
        expect(treeNoprops).toMatchSnapshot()
    })
})
