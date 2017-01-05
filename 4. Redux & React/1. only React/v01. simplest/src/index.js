import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Examples extends Component {
  func01(){
      console.log("hello from func01");
      return "function 01"
  }

  render() {
    return (
        <div>
            <h1 style={{color:"red"}}>Simple React Example</h1>
            <p>{this.func01()}</p>
            //    'this' keyword is refers to the Examples class itself
        </div>
    )
  }
}

ReactDOM.render(
  <Examples/>,
    document.getElementById('root')
)