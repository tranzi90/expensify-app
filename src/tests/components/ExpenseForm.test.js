import { shallow } from "enzyme"
import ExpenseForm from "../../components/ExpenseForm"
import React from "react"
import expenses from "../fixtures/expenses"
import moment from "moment"
import {SingleDatePicker} from "react-dates"

it('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot()
})

it('should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>)
    expect(wrapper).toMatchSnapshot()
})

it('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('form').simulate('submit', { preventDefault: () => {} })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

it('should set description on input change', () => {
    const value = 'New description'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(0).simulate('change', { target: { value } })
    expect(wrapper.state('description')).toBe(value)
})

it('should set note on textarea change', () => {
    const value = 'New note'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('textarea').simulate('change', { target: { value } })
    expect(wrapper.state('note')).toBe(value)
})

it('should set amount if valid input', () => {
    const value = '23.50'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change', { target: { value } })
    expect(wrapper.state('amount')).toBe(value)
})

it('should not set amount if invalid input', () => {
    const value = '23.500'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change', { target: { value } })
    expect(wrapper.state('amount')).toBe('')
})

it('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit', { preventDefault: () => {} })
    expect(wrapper.state('error')).toBe('')

    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    })
})

it('should set new date on date change', () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find(SingleDatePicker).prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})

it('should set calendar focus on change', () => {
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused: true })
    expect(wrapper.state('calendarFocused')).toBe(true)
})


