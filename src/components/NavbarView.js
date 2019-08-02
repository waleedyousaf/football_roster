import Pokeball from "../pokeball.jpg";
import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const NavbarView = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <img className="mr-2" style={{width: '2em',height:'2em'}} src={Pokeball} alt="logo cap" />
                <a className="navbar-brand mr-auto" style={{'color':'white'}}>PES Auction</a>
                <div className="nav-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="navbar-item"><NavLink className="nav-link" to="/addplayerview">Add Player</NavLink></li>
                        <li className="navbar-item"><NavLink className="nav-link" to="/loginview">Login</NavLink></li>
                        <li className="navbar-item"><NavLink className="nav-link" to="/signupview">Sign Up</NavLink></li>
                        <li className="navbar-item"><NavLink className="nav-link" to="/tooltipview">Tooltip</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(NavbarView)
