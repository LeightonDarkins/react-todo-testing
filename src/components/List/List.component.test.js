/* eslint-env jest */

import React from 'react'
import { mount } from 'enzyme'

import { selector } from '../../common/TestUtilities.js'

import List from './List.component.jsx'

let wrapper, testItems, itemClickedMock, testSelectedItemId

describe('List', () => {
  afterEach(() => {
    wrapper = undefined
    testItems = undefined
    testSelectedItemId = undefined
    itemClickedMock = undefined
  })

  it('renders no LIs for an empty array', () => {
    const listProps = { items: generateArrayOfItemsWithLength(0) }

    wrapper = mountList(listProps)

    expect(wrapper.find(selector('list-item'))).toHaveLength(0)
  })

  it('renders one LI for an array with one item', () => {
    const listProps = { items: generateArrayOfItemsWithLength(1) }

    wrapper = mountList(listProps)

    expect(wrapper.find(selector('list-item'))).toHaveLength(1)
  })

  it('renders ten LIs for an array with 10 items', () => {
    const listProps = { items: generateArrayOfItemsWithLength(10) }

    wrapper = mountList(listProps)

    expect(wrapper.find(selector('list-item'))).toHaveLength(10)
  })

  it('propagates a click event when an LI is clicked', () => {
    itemClickedMock = jest.fn()

    const listProps = {
      items: generateArrayOfItemsWithLength(10),
      itemClicked: itemClickedMock
    }

    wrapper = mountList(listProps)

    wrapper.find(selector('list-item')).find('#item-0').simulate('click')

    expect(itemClickedMock).toHaveBeenCalledTimes(1)
  })

  it('highlights an LI when given its ID to select', () => {
    testItems = generateArrayOfItemsWithLength(10)
    testSelectedItemId = testItems[0].id

    const listProps = {
      items: testItems,
      selectedItemId: testSelectedItemId
    }

    wrapper = mountList(listProps)

    const selectedItem = wrapper.find(selector('list-item')).find(`#${testSelectedItemId}`)

    expect(selectedItem.is('.ListItem--selected')).toBeTruthy()
  })
})

const mountList = (listProps) => {
  if (!listProps.items) listProps.items = []
  if (!listProps.itemClicked) listProps.itemClicked = () => {}

  return mount(
    <List
      items={listProps.items}
      itemClicked={listProps.itemClicked}
      selectedItemId={listProps.selectedItemId} />
  )
}

const generateArrayOfItemsWithLength = (length) => {
  let array = []

  for (let i = 0; i < length; i++) {
    array.push({ id: `item-${i}` })
  }

  return array
}
