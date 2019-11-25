import {addExpense, editExpense, removeExpense} from "../../actions/expenses"

test('should setup remove expense action object', () => {
    const action = removeExpense('123abc')

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'new note'})

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { note: 'new note'}
    })
})

test('should setup add expense action object', () => {
    const action = addExpense({
        description: 'bla bla bla',
        note: 'ggg',
        amount: 15000,
        createdAt: 1000
    })

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: 'bla bla bla',
            note: 'ggg',
            amount: 15000,
            createdAt: 1000
        }
    })
})

test('should setup add expense action object with defaults', () => {
    const action = addExpense()

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})