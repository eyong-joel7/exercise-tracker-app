import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import ExercisesList from './components/exercisesList';
import EditExercise from './components/editExercise';
import CreateExercise from './components/createExercise';
import CreateUser from './components/createUser';
function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container-fluid">
        <Route path = '/' exact component = {ExercisesList} />
        <Route path = '/edit/:id' component = {EditExercise} />
        <Route path = '/create' component = {CreateExercise}/>
        <Route path = '/user' component = {CreateUser}/>
      </div>  
  </Router>
  );
}

export default App;
