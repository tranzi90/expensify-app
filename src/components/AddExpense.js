import {connect} from "react-redux"
import ExpenseForm from "./ExpenseForm"
import {startAddExpense} from "../actions/expenses"
import React, {Component} from 'react'

export class AddExpense extends Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense)
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        startAddExpense: (expense) => dispatch(startAddExpense(expense))
    }
}

export default connect(undefined, mapDispatchToProps)(AddExpense)