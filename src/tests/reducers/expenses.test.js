import expensesReducer from "../../reducers/expenses"
import expenses from "../fixtures/expenses"
import moment from "moment"

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: expenses[1].id })

    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove non-existing expense', () => {
    const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: '-1' })

    expect(state).toEqual(expenses)
})

test('should edit an expense', () => {
    const state = expensesReducer(expenses, { type: 'EDIT_EXPENSE', id: expenses[1].id, updates: {note: 'gg'} })

    expect(state[1]).toEqual({
        id: '2',
        description: 'Rent',
        note: 'gg',
        amount: 109500,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    })
})

test('should not edit non-existing expense', () => {
    const state = expensesReducer(expenses, { type: 'EDIT_EXPENSE', id: '-1' })

    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const state = expensesReducer(expenses, { type: 'ADD_EXPENSE', expense: {
            description: '',
            id: '4',
            note: '',
            amount: 0,
            createdAt: 0
        } })

    expect(state[3]).toEqual({
        id: '4',
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    })
})