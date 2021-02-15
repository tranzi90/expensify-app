import { shallow } from 'enzyme'
import NotFoundPage from '../../components/NotFoundPage'
import React from 'react'

it('should render NotFoundPage correctly', () => {
    const wrapper = shallow(<NotFoundPage />)

    expect(wrapper).toMatchSnapshot()
})
