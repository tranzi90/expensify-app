import {combineReducers, createStore} from "redux"
import expensesReducer from "../reducers/expenses"
import filtersReducer from "../reducers/filters"

export default createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}), /* preloadedState, */
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())