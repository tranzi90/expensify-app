import {connect} from "react-redux"
import ExpenseForm from "./ExpenseForm"
import {addExpense} from "../actions/expenses"
import React, {Component} from 'react'

export class AddExpense extends Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense)
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
        addExpense: (expense) => dispatch(addExpense(expense))
    }
}

export default connect(undefined, mapDispatchToProps)(AddExpense)