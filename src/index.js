import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import './index.css'
// import App from './App';
import AppRouter from "./routers/AppRouter"
import * as serviceWorker from './serviceWorker'
import store from "./store/configureStore"
import './firebase'
import {startSetExpenses} from "./actions/expenses"

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

store.dispatch(startSetExpenses()).then(() =>
    ReactDOM.render(jsx, document.getElementById('root'))
)
// ReactDOM.render(<App />, document.getElementById('root'));


// .then(() => console.log(store.getState()))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();