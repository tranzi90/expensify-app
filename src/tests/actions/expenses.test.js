import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import {startAddExpense, addExpense, editExpense, removeExpense} from "../../actions/expenses"
import expenses from "../fixtures/expenses"
import database from "../../firebase"

const createMockStore = configureMockStore([thunk])

it('should setup remove expense action object', () => {
    const action = removeExpense('123abc')

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

it('should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'new note'})

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { note: 'new note'}
    })
})

it('should setup add expense action object', () => {
    const action = addExpense(expenses[2])

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

it('should add expense to database and store', (done) => {
    const store = createMockStore({})

    const expenseData = {
            description: 'Mouse',
            note: 'This one is better',
            amount: 3000,
            createdAt: 1000
    }

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })

        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

it('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({})

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                description: '',
                note: '',
                amount: 0,
                createdAt: 0
            }
        })

        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual({
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        })
        done()
    })
})

// it('should setup add expense action object with defaults', () => {
//     const action = addExpense()
//
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0
//         }
//     })
// })