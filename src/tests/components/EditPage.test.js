import { shallow } from "enzyme"
import {EditPage} from "../../components/EditPage"
import React from "react"
import expenses from "../fixtures/expenses"

let editExpense, startRemoveExpense, history, wrapper

beforeEach(() => {
    editExpense = jest.fn()
    startRemoveExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<EditPage
                        editExpense={editExpense}
                        startRemoveExpense={startRemoveExpense}
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

it('should handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[1].id)
})