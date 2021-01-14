import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
class CreateExercise extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:"",
            description: "",
            duration: 0,
            date: new Date(),
            users: []
        }
    }

        componentDidMount(){
          
            axios.get('http://localhost:5000/users/')
            .then(res => {
                if(res.data.length > 0){
                    this.setState({
                        users: res.data.map(user => user.username),
                        username: this.state.users[0]
                    })
                }
            });
        }
        
        onchangeUsername = (e) => {
            this.setState({
                username: e.target.value
            });
        }

        onchangeDescription = (e) => {
            this.setState({
                description: e.target.value
            });
        }

        onchangeDuration = (e) => {
            this.setState({
                duration: e.target.value
            });
        }

        onchangeDate= (date) => {
            this.setState({
                date: date
            });
        }

        onSubmit = async (e) => {
            e.preventDefault();
            const exercise = {
                username: this.state.username,
                description: this.state.description,
                duration: this.state.duration,
                date: this.state.date
            }
            const res = await axios.post('http://localhost:5000/exercises/add', exercise);
            console.log(res.data);

            //window.location = '/';
        }

     
    render() {
        return (
            <div>
                <h3>Create  New Exercise Log</h3>
                <form onSubmit = {this.onSubmit}>
                    <div className ="form-group">
                        <label for="username">Username:</label>
                        <select ref = "userInput" 
                        required 
                        className = "form-control"
                        value = {this.state.username}
                        onChange = {this.onchangeUsername}>
                            {
                                this.state.users.map(user => {
                                    return <option
                                    key = {user}
                                    value = {user}>
                                        {user}
                                    </option>
                                })
                            }
                        </select>
                       
                    </div>

                    <div className ="form-group">
                        <label for="description">Description:</label>
                        <input type="text" className ="form-control" id="description" required  onChange = {this.onchangeDescription} value = {this.state.description} />
                    </div>
                    <div className ="form-group">
                        <label for="duration">Duration (in Munites):</label>
                        <input type="text" className ="form-control" id="duration" required onChange = {this.onchangeDuration} value = {this.state.duration} />
                    </div>

                    <div className ="form-group">
                        <label for="date">Date:</label>
                        <div>
                        <DatePicker 
                         selected = {this.state.date}
                         onChange = {this.onchangeDate}
                        />
                       
                        </div>
                    </div>
                    <div className = 'form-group'>
                        <input type="submit" className ="
                        btn btn-primary" value = "Create Exercise log"/>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default CreateExercise;