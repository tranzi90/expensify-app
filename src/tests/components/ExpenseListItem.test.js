import { shallow } from 'enzyme'
import ExpenseListItem from '../../components/ExpenseListItem'
import React from 'react'
import expenses from '../fixtures/expenses'

it('should render ExpenseListItem with fixture data', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)

    expect(wrapper).toMatchSnapshot()
})
