import React, { Component } from 'react'
import loading from './spinner1.gif'

export default class Spinner extends Component {
  render() {
    return <div className='text-center'>
      <img src={loading} alt="Loading"/>
    </div>;
  }
}
