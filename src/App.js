import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import About from "./components/About";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  
  constructor(){
    super();
    this.state= {
      mode: 'light'
    }
  }

  pageSize = 8;
  country = "in";
  apiKey = process.env.REACT_APP_NEWS_MONK_API;
  title = "News Monk"
  siteTitle = "Home : Top Headlines,Entertainment, Technology, Health, Business, Science"
  state = {
    progress: 0,
  };
 
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

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  
  render() {
    return (
      <Router>
        <div>
          <LoadingBar
            color="#f11946"
            heieght={5}
            shadow={true}
            progress={this.state.progress}
          />
          <Navbar mode={this.state.mode} toggleMode={this.toggleMode} title={document.title = this.siteTitle} />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  mode={this.mode}
                  title={this.title}
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country={this.country}
                  category="top"
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/business"
              element={
                <News
                  mode={this.mode}
                  title={this.title}
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country={this.country}
                  category="business"
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  mode={this.mode}
                  title={this.title}
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country={this.country}
                  category="entertainment"
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/health"
              element={
                <News
                  mode={this.mode}
                  title={this.title}
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country={this.country}
                  category="health"
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/science"
              element={
                <News
                  mode={this.mode}
                  title={this.title}
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country={this.country}
                  category="science"
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/sports"
              element={
                <News
                  mode={this.mode}
                  title={this.title}
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country={this.country}
                  category="sports"
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/technology"
              element={
                <News
                  mode={this.mode}
                  title={this.title}
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country={this.country}
                  category="technology"
                />
              }
            />
          </Routes>
          <Routes>
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
