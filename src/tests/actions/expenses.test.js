import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import {startAddExpense, addExpense, editExpense, removeExpense, startRemoveExpense, setExpenses, startSetExpenses} from "../../actions/expenses"
import expenses from "../fixtures/expenses"
import database from "../../firebase"

const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
    const expensesData = {}
    expenses.forEach(({id, description, note, amount, createdAt}) =>
        expensesData[id] = {description, note, amount, createdAt}
    )
    database.ref('expenses').set(expensesData).then(() => done())
})

it('should setup remove expense action object', () => {
    const action = removeExpense('123abc')

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

it('should remove expense from firebase', async () => {
    const store = createMockStore({})
    const id = expenses[0].id

    await store.dispatch(startRemoveExpense(id))

    const actions = store.getActions()

    expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        })

    const snapshot = await database.ref(`expenses/${id}`).once('value')
    expect(snapshot.val()).toBe(null)
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

it('should setup set expense action object with data', () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

it('should fetch the expenses from firebase', async () => {
    const store = createMockStore({})

    await store.dispatch(startSetExpenses())

    const actions = store.getActions()
    expect(actions[0]).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})