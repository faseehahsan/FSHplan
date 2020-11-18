import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionsignOut } from '../store/actions/authActions'


const SignedIn = (props) => {
    return (

        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            {/* <li><NavLink to='/'>Log Out</NavLink></li> */}
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">{props.profile.initials}</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(actionsignOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedIn)