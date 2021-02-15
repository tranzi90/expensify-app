import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'
import React from 'react'
import expenses from '../fixtures/expenses'
import getExpensesTotal from '../../selectors/expenses-total'

it('should view 2 expenses totalling $114000', () => {
    const wrapper = shallow(
        <ExpensesSummary
            expenseCount={[expenses[1], expenses[2]].length}
            expensesTotal={getExpensesTotal([expenses[1], expenses[2]])}
        />
    )
    expect(wrapper).toMatchSnapshot()
})

it('should view 1 expense totalling $195', () => {
    const wrapper = shallow(
        <ExpensesSummary
            expenseCount={[expenses[0]].length}
            expensesTotal={getExpensesTotal([expenses[0]])}
        />
    )
    expect(wrapper).toMatchSnapshot()
})
