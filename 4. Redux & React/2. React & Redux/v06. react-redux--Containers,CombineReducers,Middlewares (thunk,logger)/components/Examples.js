import React, { Component } from 'react'
import Counter2 from '../containers/Counter'
import Sum from '../containers/Sum'
import RandomImages from '../containers/RandomImages'

export default class Examples extends Component {
  constructor(props) {
    super(props) 
  }
  render() {
//      const {value:{count,sum,images}, onDecrement, onSum, onRandomImages} = this.props;
    return (
      <div>
        <h1>React</h1>
        <Counter2/>
        <Sum/>
        <RandomImages/>
      </div>
    )
  }
}