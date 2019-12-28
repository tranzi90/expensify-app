import React, {Component} from "react"
import selectExpenses from "../selectors/expenses"
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import getExpensesTotal from "../selectors/expenses-total"

export class ExpensesSummary extends Component {
    render() {
        return (
            <div className="page-header">
                <div className='content-container'>
                    <h1 className='page-header__title'><span>{this.props.expenseCount}</span> expenses on total sum <span>{this.props.expensesTotal}</span>:</h1>
                    <div className="page-header__actions">
                        <Link className="button" to='/create'>Add Expense</Link>
                    </div>
                </div>
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