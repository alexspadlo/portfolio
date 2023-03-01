import React from 'react'
import renderer from 'react-test-renderer'
import Footer from './Footer'

describe('Test on <Footer /> component', () => {
    test('Should render without the props', () => {
        const componentNoprops = renderer.create(<Footer />)
        const treeNoprops = componentNoprops.toJSON()
        expect(treeNoprops).toMatchSnapshot()
    })
})
