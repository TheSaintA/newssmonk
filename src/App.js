
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
 
 
  render() {
    return( 
    <Router>
    <div>
      <Navbar mode='dark' />
    <Routes>
    <Route exact path="/" element={<News pageSize={8} country="in" category="general"/>} />
    </Routes>
    <Routes>
    <Route exact path="/business" element={<News pageSize={8} country="in" category="business"/>} /> 
    </Routes>
    <Routes>
    <Route exact path="/entertainment" element={<News pageSize={8} country="in" category="entertainment"/>} /> 
    </Routes>
    <Routes>
    <Route exact path="/health" element={<News pageSize={8} country="in" category="health"/>} /> 
    </Routes>
    <Routes>
    <Route exact path="/science" element={<News pageSize={8} country="in" category="science"/>} /> 
    </Routes>
    <Routes>
    <Route exact path="/sports" element={<News pageSize={8} country="in" category="sports"/>} /> 
    </Routes>
    <Routes>
    <Route exact path="/technology" element={<News pageSize={8} country="in" category="technology"/>} /> 
    </Routes>
    <Routes>
    <Route exact path="/about" element={<About/>}/> 
    </Routes>
    </div>
    </Router>
    );
  }
}
