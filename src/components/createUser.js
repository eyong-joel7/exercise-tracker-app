import React, { Component } from 'react';
import axios from 'axios';

class CreateUser extends Component {
    state = {
        user:""
    }
   
    onchangeUsername = (e)=> {
        this.setState({
            user: e.target.value
        })
    }

    onsubmit = async (e)=>{
        e.preventDefault();

        const user = {
            username: this.state.user
        }

      const res =  await axios.post('http://localhost:5000/users/add', user);

      console.log(res.data);
        this.setState({
            user:""
        })

    }
    render() {
        return (
            <div>
                <h3>create new User</h3>
                <form onSubmit = {this.onsubmit}>
                    <label for = "username">Enter Username:</label>
                    <input type = "text" required id = "username"  className = "form-control" onChange = {this.onchangeUsername} value = {this.state.user}/>
                    <br></br>
                    <input className = "btn btn-primary" type = "submit" value = "Create User"/>

                </form>
            </div>
        );
    }
}

export default CreateUser;