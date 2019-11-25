import React, {Component} from 'react'
import {connect} from "react-redux"
import ExpenseForm from "./ExpenseForm"
import {editExpense, removeExpense} from "../actions/expenses"

export class EditPage extends Component {
    onSubmit = (expense) => {
        this.props.editExpense(expense.id, expense)
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={ () => {
                    this.props.removeExpense(this.props.expense.id)
                    this.props.history.push('/')
                }}
                >Remove</button>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        editExpense: (id, expense) => dispatch(editExpense(id, expense)),
        removeExpense: (id) => dispatch(removeExpense(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPage)
