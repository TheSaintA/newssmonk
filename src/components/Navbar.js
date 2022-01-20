import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
 constructor(){
   super();
  this.state = {
    mode: 'light'
  }
  }
  
  toggleMode=()=>{
    if(this.state.mode === 'light'){
      this.setState({mode: 'dark'});
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }else{
      this.setState({mode: 'light'});
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      for (let index = 0; index < 9; index++) {
        document.getElementsByClassName('card-text')[index].style.color = 'black';
        
      }
      
    }
  }

  render() {
    return <div>
        <nav className={`navbar navbar-expand-lg navbar-${this.state.mode} bg-${this.state.mode}`}>
        <div className="container-fluid">
        
            <a className="navbar-brand fw-bold" href="/"> NewsMonk</a>
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
              <input className="form-check-input" onClick={this.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><span className="fa fa-moon-o text-warning fa-lg"></span></label>
            </div>
            </div>
        </div>
        </nav>
    </div>;
  }
}

export default Navbar;
