import React from "react"
import {connect} from "react-redux"
import {startLogin} from "../actions/auth"

export function LoginPage({startLogin}) {
    return (
        <div className='box-layout'>
            <div className="box-layout__box">
                <h1 className="box-layout__title">Expensify</h1>
                <p>Control your budget!</p>
                <button onClick={startLogin} className='button'>Login with Google</button>
            </div>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        startLogin: () => dispatch(startLogin())
    }
}

export default connect(undefined, mapDispatchToProps)(LoginPage)
