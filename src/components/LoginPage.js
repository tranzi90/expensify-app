import React from "react"
import {connect} from "react-redux"
import {startLogin} from "../actions/auth"

export function LoginPage({startLogin}) {
    return (
        <div>
            <button onClick={startLogin}>Login</button>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        startLogin: () => dispatch(startLogin())
    }
}

export default connect(undefined, mapDispatchToProps)(LoginPage)
