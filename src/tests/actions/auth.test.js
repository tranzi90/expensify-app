import { login, logout } from '../../actions/auth'

it('should setup login action object', () => {
    const action = login('123abc')

    expect(action).toEqual({
        type: 'LOGIN',
        uid: '123abc',
    })
})

it('should setup logout action object', () => {
    const action = logout()

    expect(action).toEqual({
        type: 'LOGOUT',
    })
})
