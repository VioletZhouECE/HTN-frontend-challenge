import React from "react";
import "../../css/login.css";
import LoginImage from "../../image/HTN_login.png"
import { withRouter } from "react-router";

class Login extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username : "",
            password : ""
        }

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeUsername(e){
        this.setState({username : e.target.value});
    }

    handleChangePassword(e){
        this.setState({password : e.target.value});
    }

    //client side validation using bootstrap form validation
    handleSubmit(e){
        e.preventDefault();
        e.stopPropagation();
        
        // Fetch form to apply custom Bootstrap validation
        var form = document.getElementById('form-validation');

        if (form[0].checkValidity() === false) {
            form.addClass('was-validated');
            return;
        }
        
        this.props.loginHandler(this.state);
    }

    render(){
        return(
            <div className='HTN-background d-flex justify-content-between flex-wrap'> 
            <div className="HTN-image-container">
                <img src={LoginImage}></img>
            </div>
            <div className='login-container login-container-border pt-5'>
                <div className='login-center'>
                    <div className='text-center login-text'>
                        <h2>Login</h2>
                    </div>
                    <form id="form-validation" onSubmit={e=>this.handleSubmit(e)} noValidate>
                        <div className="form-group py-4">
                            <label htmlFor="username">Username:</label>
                            <input id="username" className="form-control" value={this.state.username} onChange={e=>this.handleChangeUsername(e)} required></input>
                            <div className="invalid-feedback">
                                A username is required
                            </div>
                        </div>
                        <div className="form-group pb-4">
                            <label htmlFor="userpassword">Password:</label>
                            <input type="password" className="form-control" value={this.state.password} onChange={e=>this.handleChangePassword(e)} required></input>
                            <div className="invalid-feedback">
                                A password is required
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-warning" onClick={this.handleSubmit}>Log in</button>
                        </div>
                        <div className="d-flex justify-content-center pt-4">
                            <a href="/">Continue without login</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

export default withRouter(Login);