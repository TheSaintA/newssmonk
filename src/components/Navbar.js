import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './monk_logo.png';
import "./style.css";

export class Navbar extends Component {
 constructor(){
   super();
    this.state = {
      sticky: "fixed-top",
      nav:"nav-10"
    }
  }


  render() {
    return <div>
        <nav  className={`navbar header ${this.state.sticky} ${this.state.nav}  p-3 shadow-lg navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}>
        <div className="container-fluid">
        
            <a className="navbar-brand my-0 py-0 fw-bold" href="/">
              <img src={logo} style={{width:"200px"}}/> 
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
                </li>
            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input" onClick={this.props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><span className="fa fa-moon-o text-warning fa-lg"></span></label>
            </div>
            </div>
        </div>
        </nav>
    </div>;
  }
}

export default Navbar;
