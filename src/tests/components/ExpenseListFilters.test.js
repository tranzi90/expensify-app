import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import React from 'react'
import { filters, altFilters } from '../fixtures/filters'
import moment from 'moment'
import { DateRangePicker } from 'react-dates'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    )
})

it('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

it('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({ filters: altFilters })
    expect(wrapper).toMatchSnapshot()
})

it('should handle text change', () => {
    const value = 'textFilter'
    wrapper.find('input').simulate('change', { target: { value } })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

it('should sort by date', () => {
    const value = 'date'
    wrapper.find('select').simulate('change', { target: { value } })
    expect(sortByDate).toHaveBeenCalled()
})

it('should sort by amount', () => {
    const value = 'amount'
    wrapper.find('select').simulate('change', { target: { value } })
    expect(sortByAmount).toHaveBeenCalled()
})

it('should handle date changes', () => {
    const startDate = moment(0)
    const endDate = moment()
    wrapper.find(DateRangePicker).prop('onDatesChange')({ startDate, endDate })
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

it('should handle date focus changes', () => {
    const focus = true
    wrapper.find(DateRangePicker).prop('onFocusChange')(focus)
    expect(wrapper.state('calendarFocused')).toBe(focus)
})
