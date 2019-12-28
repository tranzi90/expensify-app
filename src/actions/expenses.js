import database from "../firebase"

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData

        const expense = { description, note, amount, createdAt}

        const ref = await database.ref(`users/${uid}/expenses`).push(expense)

        dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }))
    }
}

export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
})

export const startRemoveExpense = (id) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid
        await database.ref(`users/${uid}/expenses/${id}`).remove()

        dispatch(removeExpense(id))
    }
}

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export const startEditExpense = (id, updates) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid
        await database.ref(`users/${uid}/expenses/${id}`).update(updates)

        dispatch(editExpense(id, updates))
    }
}

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

export const startSetExpenses = () => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid
        const snapshot = await database.ref(`users/${uid}/expenses`).once('value')

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