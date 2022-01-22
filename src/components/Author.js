import React, { Component } from 'react';

export default class Author extends Component {
  render() {
    return <div>
        <div className="container-fluid author">
            <div className="row">
                <div className="col">
                  <hr/>
                    <p className="text-center">Made with <span class="fa fa-heart text-danger"></span> by <a href="https://github.com/TheSaintA" target="_blank" className="fw-bold text-success text-decoration-none">Wa Ni</a></p> 
                </div>
            </div>
        </div>
    </div>;
  }
}
