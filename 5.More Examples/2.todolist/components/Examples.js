import React, { Component } from 'react'
import Counter2 from '../containers/ex01/Counter'
import Sum from '../containers/ex01/Sum'
import RandomImages from '../containers/ex01/RandomImages'

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