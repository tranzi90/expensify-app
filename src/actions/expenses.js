// import uuid from "uuid"
import database from "../firebase"

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData

        const expense = { description, note, amount, createdAt}

        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}

export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
})

export const startRemoveExpense = (id) => {
    return async (dispatch) => {
        await database.ref(`expenses/${id}`).remove()

        dispatch(removeExpense(id))
    }
}

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export const startEditExpense = (id, updates) => {
    return async (dispatch) => {
        await database.ref(`expenses/${id}`).update(updates)

        dispatch(editExpense(id, updates))
    }
}

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

export const startSetExpenses = () => {
    return async (dispatch) => {
        const snapshot = await database.ref(`expenses`).once('value')

        let expenses = []
        snapshot.forEach((child) => {
            expenses.push({
                id: child.key,
                ...child.val()
            })
        })

        dispatch(setExpenses(expenses))
    }
}