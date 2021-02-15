import { shallow } from 'enzyme'
import { Header } from '../../components/Header'
import React from 'react'

it('should render Header correctly', () => {
    const wrapper = shallow(<Header />)

    expect(wrapper).toMatchSnapshot()
})

it('should call startLogout on button click', () => {
    const startLogout = jest.fn()
    const wrapper = shallow(<Header startLogout={startLogout} />)

    wrapper.find('button').simulate('click')
    expect(startLogout).toHaveBeenCalled()
})
