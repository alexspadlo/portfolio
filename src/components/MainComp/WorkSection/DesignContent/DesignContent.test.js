import React from 'react'
import renderer from 'react-test-renderer'
import DesignContent from './DesignContent'

describe('Test on <DesignContent /> component', () => {
    test('Should render without the props', () => {
        const componentNoprops = renderer.create(<DesignContent />)
        const treeNoprops = componentNoprops.toJSON()
        expect(treeNoprops).toMatchSnapshot()
    })
})
