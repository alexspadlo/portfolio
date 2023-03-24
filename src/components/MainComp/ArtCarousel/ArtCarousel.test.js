import React from 'react'
import renderer from 'react-test-renderer'
import ArtCarousel from './ArtCarousel'

describe('Test on <ArtCarousel /> component', () => {
    test('Should render without the props', () => {
        const componentNoprops = renderer.create(<ArtCarousel />)
        const treeNoprops = componentNoprops.toJSON()
        expect(treeNoprops).toMatchSnapshot()
    })
})
