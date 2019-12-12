import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import './index.css'
// import App from './App';
import AppRouter from "./routers/AppRouter"
import * as serviceWorker from './serviceWorker'
import store from "./store/configureStore"
import './firebase'

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();