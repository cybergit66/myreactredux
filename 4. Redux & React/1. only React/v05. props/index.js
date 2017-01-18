import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Counter2, {a as a2, b} from './components/Counter'
import Sum from './components/Sum'

class Describe extends Component {
    constructor(props) {
    super(props)    
    
  }
    render(){
        console.log('Examples.render()');
        return (
            <div>
                <div style={{color:'red'}}>Describe: {this.props.describe}</div>
            </div>
        )
    }
}

class Examples extends Component {
  constructor(props) {
    super(props)    
    this.state = {describe: 'none'}
    this.updateDescribe = this.updateDescribe.bind(this);
  }
    updateDescribe(describe){
        this.setState({describe: describe});
    }
  render() {
    console.log('Examples.render()');
    return (
      <div>
        <h1>React</h1>
        <Describe describe={this.state.describe}/>
        <Counter2 updateDescribe={this.updateDescribe}/>
        <Sum updateDescribe={this.updateDescribe}/>
      </div>
    )
  }
}

ReactDOM.render(
  <Examples/>,
  document.getElementById('root')  
)
