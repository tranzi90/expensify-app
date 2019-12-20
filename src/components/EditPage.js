import React, {Component} from 'react'
import {connect} from "react-redux"
import ExpenseForm from "./ExpenseForm"
import {startEditExpense, startRemoveExpense} from "../actions/expenses"

export class EditPage extends Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense)
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
                    this.props.startRemoveExpense(this.props.expense.id)
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
        startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
        startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPage)
