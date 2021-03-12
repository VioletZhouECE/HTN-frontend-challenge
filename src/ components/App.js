import React from "react";
import {Switch, Route} from "react-router-dom";
import Login from "./auth/Login";
import Home from "./home/Home";
import PageNotFound from "./PageNotFound";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            userInfo: {
                username: null,
                permission: null
            }
        }

        this.loginHandler = this.loginHandler.bind(this);
        this.logoutHandler = this.logoutHandler.bind(this);
    }

    componentDidMount() {
        //log in if the token exists
        if (localStorage.getItem("token")) {
            const username = localStorage.getItem("username");
            const permission = localStorage.getItem("permission");
            this.setState({ isLogin: true });
            this.setState((prevState) => {
                return {
                    userInfo: { ...prevState.userInfo, username: username, permission: permission }
                }
            });
        }
    }

    loginHandler({token, userInfo}){
        localStorage.setItem("token", token);
        localStorage.setItem("username", userInfo.username);
        localStorage.setItem("permission", userInfo.permission);
    }

    logoutHandler(){
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("permission");
        this.setState({ isLogin: false });
        this.setState((prevState) => {
            return {
                userInfo: { ...prevState.userInfo, username: null, permission: null }
            }
        });
    }

    render() {
        return (
            <Switch>
                <Route path="/login" render = {(props)=><Login loginHandler={this.loginHandler}></Login>}></Route>
                <Route exact path="/" render = {(props)=><Home userInfo={this.state.userInfo} logoutHandler={this.logoutHandler}></Home>}></Route>
                <Route component={PageNotFound}></Route>
            </Switch>
        );
    }
}

export default App;