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
            <h1>Simple React Example</h1>
            
        </div>
    )
  }
}

ReactDOM.render(
  <Examples/>,
    document.getElementById('root')
)