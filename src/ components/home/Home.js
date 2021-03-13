import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Events from "./Events";

class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <nav className="navbar navbar-light bg-light justify-content-between">
                    <a className="navbar-brand">Hacker events</a>
                    <form className="form-inline">
                        <input className="form-control mr-3" type="search" placeholder="Search" aria-label="Search"></input>
                        <div className="mr-3" style={{display:this.props.username? "inline": "none"}}>{this.props.username}</div>
                        {this.props.isLoggedin? <a href="/" onClick={this.props.logoutHandler}>logout</a>: <Link to="/login">login</Link>}
                    </form>
                </nav>
                <Events isLoggedin = {this.props.isLoggedin}></Events>
            </div>
        )
    }
}

export default Home;