import { shallow } from 'enzyme'
import LoadingPage from '../../components/LoadingPage'
import React from 'react'

it('should render LoadingPage correctly', () => {
    const wrapper = shallow(<LoadingPage />)

    expect(wrapper).toMatchSnapshot()
})
