import authReducer from '../../reducers/auth'

it('should set uid for login', () => {
    const state = authReducer(undefined, { type: 'LOGIN', uid: 'testId' })

    expect(state).toEqual({ uid: 'testId' })
})

it('should clear uid for logout', () => {
    const state = authReducer(undefined, { type: 'LOGOUT' })

    expect(state).toEqual({})
})
