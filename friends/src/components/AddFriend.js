import React, { Component } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';
import '../App.css';

class AddFriend extends Component {
    state = {
        addFriend: {
        id: Date.now(),
        name: "",
        age: undefined,
        email: "",
        }
    };

    handleChange = e => {
        this.setState({
            addFriend: {
                ...this.state.addFriend,
                [e.target.name]: e.target.value
            }
        });
    };

    onSubmit = e => {
        e.preventDefault();

        axiosWithAuth()
        .post("/friends", this.state.addFriend)
        .then(res => {
            console.log("addFriend res", res.data);
            this.props.history.push("/friendsList");
        })
        .catch(err => {
            console.log(err)
        });
    };

    render() {
        return (
            <div className="AddFriend">
                <form className="AddFriend-Form" onSubmit={this.onSubmit}>
                    <input
                        className="AddFriend-Input"
                        type="text"
                        name="name"
                        value={this.state.addFriend.name}
                        placeholder="name"
                        onChange={this.handleChange}
                    />
                    <input
                        className="AddFriend-Input"
                        type="number"
                        name="age"
                        value={this.state.addFriend.age}
                        placeholder="age"
                    onChange={this.handleChange}
                    />
                    <input
                        className="AddFriend-Input"
                        type="text"
                        name="email"
                        value={this.state.addFriend.email}
                        placeholder="email"
                    onChange={this.handleChange}
                    />
                    <button className="AddFriend-Button">Add</button>
                </form>
            </div>
        )
    }
};

export default AddFriend;