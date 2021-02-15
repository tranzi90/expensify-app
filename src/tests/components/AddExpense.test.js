import { shallow } from 'enzyme'
import { AddExpense } from '../../components/AddExpense'
import React from 'react'
import expenses from '../fixtures/expenses'

let startAddExpense, history, wrapper

beforeEach(() => {
    startAddExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(
        <AddExpense startAddExpense={startAddExpense} history={history} />
    )
})

it('should render AddExpense correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

it('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1])
})
