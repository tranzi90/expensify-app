export default (expenses) =>
    expenses.reduce((sum, value) => sum + value.amount, 0)

