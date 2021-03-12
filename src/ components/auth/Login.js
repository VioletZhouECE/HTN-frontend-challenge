import React from "react";
import "../../css/login.css";
import LoginImage from "../../image/HTN_login.png"

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
        
        this.props.handleSubmitForm(this.state);
    }

    render(){
        return(
            <div className='login-background d-flex'> 
            <div className="py-4">
                <img src={LoginImage}></img>
            </div>
            <div className='login-container login-container-border pt-4'>
                <div className='center'>
                    <div className='text-center'>
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
                            <button type="submit" className="btn btn-warning">Log in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

export default Login;