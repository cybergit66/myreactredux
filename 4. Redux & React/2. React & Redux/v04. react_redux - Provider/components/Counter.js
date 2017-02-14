import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decrease } from '../redux/actions/index'

class Counter extends Component{
  constructor(props) {
    super(props)
  }
  render() {
      const {count:{result}, onDecrement} = this.props;
    return (
      <div>
        Clicked: <span>{result}</span> times
        <button onClick={onDecrement}>Decrease</button>
        <p/>
      </div>
    )
  }
}

//const mapStateToProps = (state, ownProps) => ({count: state.count})

//const mapDispatchToProps = (dispatch, ownProps) => ({
//  onDecrement: () => {
//    dispatch(decrease())
//  }
//})

const CounterContainer = connect(
  (state, ownProps) => ({
      count: state.count,
      prop2: state.prop // just an example in case more properties are added to state
  }),
  onDecrement: decrease,
    func2: () => {} // just an example in case more functions are needed from dispatch
)(Counter)

export default CounterContainer