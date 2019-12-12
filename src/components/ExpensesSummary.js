import React, {Component} from "react"
import selectExpenses from "../selectors/expenses"
import {connect} from "react-redux"
import getExpensesTotal from "../selectors/expenses-total"

export class ExpensesSummary extends Component {
    render() {
        return (
            <div>
                <p> {this.props.expenseCount} expenses on total sum {this.props.expensesTotal}: </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: getExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)