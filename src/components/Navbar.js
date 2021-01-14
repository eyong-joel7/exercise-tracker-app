import React from 'react';
import "jquery/dist/jquery.js"
import { Link } from 'react-router-dom';
import "bootstrap/dist/js/bootstrap.min.js"
const Navbar = () => {
    return (
       
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to = '/' className="navbar-brand" >Exercise Tracker</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to = '/' className="nav-link">Exercise</Link>
            </li>
            <li className="nav-item">
                <Link to='/create' className="nav-link">Create Exercise Log</Link>
            </li>
           
            <li className="nav-item">
                <Link to="/user" className="nav-link" >Create User</Link>
            </li>
            </ul>
        </div>
</nav>
            
    );
};

export default Navbar;