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
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button
                        className='button button--secondary'
                        onClick={ () => {
                            this.props.startRemoveExpense(this.props.expense.id)
                            this.props.history.push('/')
                        }}
                    >Remove expense</button>
                </div>
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
