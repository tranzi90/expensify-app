import { shallow } from "enzyme"
import Header from "../../components/Header"
import React from "react"

it('should render Header correctly', () => {
    const wrapper = shallow(<Header/>)

    expect(wrapper).toMatchSnapshot()
})