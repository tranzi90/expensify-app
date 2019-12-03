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
    return {
        expenseCount: selectExpenses(state.expenses, state.filters).length,
        expensesTotal: getExpensesTotal(selectExpenses(state.expenses, state.filters))
    }
}

export default connect(mapStateToProps)(ExpensesSummary)