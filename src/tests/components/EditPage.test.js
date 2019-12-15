import { shallow } from "enzyme"
import {EditPage} from "../../components/EditPage"
import React from "react"
import expenses from "../fixtures/expenses"

let startEditExpense, startRemoveExpense, history, wrapper

beforeEach(() => {
    startEditExpense = jest.fn()
    startRemoveExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<EditPage
                        startEditExpense={startEditExpense}
                        startRemoveExpense={startRemoveExpense}
                        history={history}
                        expense={expenses[1]}
                        />)
})

it('should render EditPage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

it('should handle startEditExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1])
})

it('should handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[1].id)
})