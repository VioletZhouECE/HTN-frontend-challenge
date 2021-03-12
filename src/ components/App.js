import React from "react";
import {Switch, Route} from "react-router-dom";
import { withRouter } from "react-router";
import Login from "./auth/Login";
import Home from "./home/Home";
import PageNotFound from "./PageNotFound";
import userInfo from "../../config/userinfo";
import displayErrorMessage from "../scripts/displayMessages";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedin: false,
            username: null
        }

        this.loginHandler = this.loginHandler.bind(this);
        this.logoutHandler = this.logoutHandler.bind(this);
    }

    componentDidMount() {
        if (localStorage.getItem("isLoggedin")) {
            const username = localStorage.getItem("username");
            this.setState({ isLoggedin: true, username: username });
        }
    }

    loginHandler({username, password}){
        if (userInfo[username] && userInfo[username] == password){
            //login successfully
            localStorage.setItem("isLoggedin", "true");
            localStorage.setItem("username", username);
            this.setState({ isLoggedin: true, username: username });
            this.props.history.replace('/');
        } else {
            displayErrorMessage("wrong username or password");
        }
    }

    logoutHandler(){
        localStorage.removeItem("isLoggedin");
        localStorage.removeItem("username");
        this.setState({ isLoggedin: false, username: null });
    }

    render() {
        return (
            <div id="app">
                <div id = "error_message" className = "alert alert-danger toast-message"></div>
                <Switch>
                    <Route path="/login" render = {(props)=><Login loginHandler={this.loginHandler}></Login>}></Route>
                    <Route exact path="/" render = {(props)=><Home isLoggedin = {this.state.isLoggedin} username={this.state.username} logoutHandler={this.logoutHandler}></Home>}></Route>
                    <Route component={PageNotFound}></Route>
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);