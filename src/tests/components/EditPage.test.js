import { shallow } from "enzyme"
import {EditPage} from "../../components/EditPage"
import React from "react"
import expenses from "../fixtures/expenses"

let editExpense, removeExpense, history, wrapper

beforeEach(() => {
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<EditPage
                        editExpense={editExpense}
                        removeExpense={removeExpense}
                        history={history}
                        expense={expenses[1]}
                        />)
})

it('should render EditPage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

it('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1])
})

it('should handle removeExpense', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenLastCalledWith(expenses[1].id)
})