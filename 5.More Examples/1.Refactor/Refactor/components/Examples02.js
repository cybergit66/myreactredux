import React, { Component } from 'react'

export default class Examples extends Component {
  constructor(props) {
    super(props) 
  }
  render() {
      console.log(this.props);
    return (
      <div>
        <h1>Examples 02</h1>
        <p>Hello {this.props.params.name || 'World'} </p>
      </div>
    )
  }
}