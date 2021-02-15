import { shallow } from 'enzyme'
import Dashboard from '../../components/Dashboard'
import React from 'react'

it('should render Dashboard correctly', () => {
    const wrapper = shallow(<Dashboard />)

    expect(wrapper).toMatchSnapshot()
})
