import { shallow } from "enzyme"
import { ExpenseList } from "../../components/ExpenseList"
import React from "react"
import expenses from "../fixtures/expenses"

it('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()
})

it('should render ExpenseList with no expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>)
    expect(wrapper).toMatchSnapshot()
})

