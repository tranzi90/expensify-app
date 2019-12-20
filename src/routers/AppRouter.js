import {Router, Route, Switch} from "react-router-dom"
import React from "react"
import Dashboard from "../components/Dashboard"
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"
import AddExpense from "../components/AddExpense"
import EditPage from "../components/EditPage"
import NotFoundPage from "../components/NotFoundPage"
import LoginPage from "../components/LoginPage"
import createHistory from "history/createBrowserHistory"

export const history = createHistory()

export default () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path='/' component={LoginPage} exact={true} />
                <PrivateRoute path='/dashboard' component={Dashboard} />
                <PrivateRoute path='/create' component={AddExpense} />
                <PrivateRoute path='/edit/:id' component={EditPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)