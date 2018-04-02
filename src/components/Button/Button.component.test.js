/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import Button from './Button.component.jsx'

describe('Button', () => {
  it('propagates an event when clicked', () => {
    let mockButtonClicked = jest.fn()
    let wrapper = shallow(<Button buttonClicked={mockButtonClicked} />)

    wrapper.simulate('click')

    expect(mockButtonClicked).toHaveBeenCalledTimes(1)
  })

  it('a disabled button does not propagate an event when clicked', () => {
    let mockButtonClicked = jest.fn()
    let wrapper = shallow(<Button buttonClicked={mockButtonClicked} disabled />)

    wrapper.simulate('click')

    expect(mockButtonClicked).toHaveBeenCalledTimes(0)
  })

  it('renders a delete button', () => {
    const TYPE = 'delete'

    const tree = renderer
      .create(<Button buttonClicked={jest.fn()} type={TYPE} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders an add button', () => {
    const TYPE = 'add'

    const tree = renderer
      .create(<Button buttonClicked={jest.fn()} type={TYPE} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders a default button', () => {
    const tree = renderer
      .create(<Button buttonClicked={jest.fn()} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders a default, disabled button', () => {
    const tree = renderer
      .create(<Button buttonClicked={jest.fn()} disabled />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders a small delete button', () => {
    const tree = renderer
      .create(<Button buttonClicked={jest.fn()} type='delete' small />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
