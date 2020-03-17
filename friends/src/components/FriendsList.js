import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriend from './AddFriend';
import '../App.css';

class FriendsList extends Component {
    state = {
        friends:[]
    };

    componentDidMount() {
        this.getData();
    };

    getData = () => {
        axiosWithAuth()
        .get("/friends")
        .then(res => {
            console.log(res.data);
            this.setState({friends: res.data});
        })
        .catch(err => {
            console.log(err)
        })
    };

    render() {
        return (
            <div className="Friends-List-Box">
                {this.state.friends.map(friend => {
                    return (
                        <div className="Friend-Card">
                            <h1 className="Friend-Name">Name: {friend.name}</h1>
                            <h1>Email: {friend.email}</h1>
                        </div>
                    )
                })}
                {/* <Router> */}
                    <Link className="NewFriend-Button" to="/AddFriend">Add a new friend</Link>
                    {/* <Switch>
                        <Route exact path="/AddFriend" component={AddFriend} />
                    </Switch> */}
                {/* </Router> */}
            </div>
        )
    }
};

export default FriendsList;