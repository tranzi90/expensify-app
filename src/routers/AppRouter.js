import {BrowserRouter, Route, Switch} from "react-router-dom"
import React from "react"
import Dashboard from "../components/Dashboard"
import Header from "../components/Header"
import AddExpense from "../components/AddExpense"
import EditPage from "../components/EditPage"
import HelpPage from "../components/HelpPage"
import NotFoundPage from "../components/NotFoundPage"

export default () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path='/' component={Dashboard} exact={true} />
                <Route path='/create' component={AddExpense} />
                <Route path='/edit/:id' component={EditPage} />
                <Route path='/help' component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)