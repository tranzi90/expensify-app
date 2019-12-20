import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import './index.css'
import {login, logout} from "./actions/auth"
import AppRouter, {history} from "./routers/AppRouter"
import * as serviceWorker from './serviceWorker'
import store from "./store/configureStore"
import './firebase'
import {startSetExpenses} from "./actions/expenses"
import {firebase} from "./firebase"

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

let hasRendered = false

function renderApp() {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('root'))
        hasRendered = true
    }
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(() => {
                renderApp()
                if (history.location.pathname === '/') {
                    history.push('/dashboard')
                }
            }
        )
    } else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();