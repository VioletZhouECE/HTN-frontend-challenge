import React from "react";
import Login from "./auth/Login";
import Home from "./home/Home";

class App extends React.component {
    constructor(props) {
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
            this.state.isLogin ? <Login loginHandler={loginHandler}></Login> : <Home userInfo={userInfo} logoutHandler={logoutHandler}></Home>
        );
    }
}

export default App;