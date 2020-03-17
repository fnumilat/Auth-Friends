import React, { Component } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';
import '../App.css';

class Login extends Component {
    state = {
        credentials: {
            username:"",
            password:""
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();

        axios
        .post("http://localhost:5000/api/login", this.state.credentials)
        .then(res => {
            console.log(res.data);
            localStorage.setItem("token", res.data.payload);
            this.props.history.push("/friendsList");
        })
        .catch(err => {
            console.log(err)
        });
    };

    render() {
        return (
            <div className="Login">
                <form className="Login-Form" onSubmit={this.login}>
                    <input
                        className="Login-Input"
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        placeholder="username"
                        onChange={this.handleChange}
                    />
                    <input
                        className="Login-Input"
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        placeholder="password"
                        onChange={this.handleChange}
                        />
                    <button className="Login-Button">Login</button>
                </form>
            </div>
        )
    }
};

export default Login;