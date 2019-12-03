import getExpensesTotal from "../../selectors/expenses-total"
import expenses from "../fixtures/expenses"

it('should return 0 if no expenses', () => {
    const result = getExpensesTotal([])
    expect(result).toBe(0)
})

it('should correctly add up single expense', () => {
    const result = getExpensesTotal([expenses[0]])
    expect(result).toBe(195)
})

it('should correctly add up multiple expenses', () => {
    const result = getExpensesTotal(expenses)
    expect(result).toBe(114195)
})