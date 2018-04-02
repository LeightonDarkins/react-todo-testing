/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import ListItem from './ListItem.component.jsx'

let wrapper

describe('ListItem', () => {
  afterEach(() => {
    wrapper = undefined
  })

  it('renders a selected list item', () => {
    const tree = renderer
      .create(<ListItem itemId='test-id' selected />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders a regular list item', () => {
    const tree = renderer
      .create(<ListItem itemId='test-id' />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('propagates an event when click', () => {
    const mockFunction = jest.fn()

    wrapper = shallow(<ListItem itemId='test-id' onItemClicked={mockFunction} />)

    wrapper.simulate('click')

    expect(mockFunction).toHaveBeenCalledTimes(1)
  })
})
