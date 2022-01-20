
import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
  pageSize = 8;
  country = 'in'
  render() {
    
    return( 
    <Router>
    <div>
      <Navbar mode='dark' />
     
    <Routes>
    <Route exact path="/" element={<News pageSize={this.pageSize} country={this.country} category="top"/>} />
    </Routes>
    <Routes>
    <Route exact path="/business" element={<News pageSize={this.pageSize} country={this.country} category="business"/>} /> 
    </Routes>
    <Routes>
    <Route exact path="/entertainment" element={<News pageSize={this.pageSize} country={this.country} category="entertainment"/>} /> 
    </Routes>
    <Routes>
    <Route exact path="/health" element={<News pageSize={this.pageSize} country={this.country} category="health"/>} /> 
    </Routes>
    <Routes>
    <Route exact path="/science" element={<News pageSize={this.pageSize} country={this.country} category="science"/>} /> 
    </Routes>
    <Routes>
    <Route exact path="/sports" element={<News pageSize={this.pageSize} country={this.country} category="sports"/>} /> 
    </Routes>
    <Routes>
    <Route exact path="/technology" element={<News pageSize={this.pageSize} country={this.country} category="technology"/>} /> 
    </Routes>
    <Routes>
    <Route exact path="/about" element={<About/>}/> 
    </Routes>
    </div>
    </Router>
    );
  }
}
