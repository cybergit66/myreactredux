import React, { Component } from 'react'
import $ from 'jquery'

export default class RandomImages extends Component{
  constructor(props) {
    super(props)
    this.state = {data: [], loading: "Please click the random images button"}
    this.randomImages = this.randomImages.bind(this);
  }
  randomImages() {
    this.setState({loading: "loading..."});
    var imgurAPI = "https://api.imgur.com/3/gallery/random/random/1";
    $.getJSON(imgurAPI).done(data => this.setState({data:data.data, loading: "loaded"}))
  }
  render() {
    console.log('RandomImages.render()');
//      const images = this.state.data;
      // stateless function
      function ImageList(props){
          return (
            <div>
              {props.images.map((image) => (<img src={image.link} style={{height:"200px"}}/>))}
            </div>
          )
      }
    return (
      <div>
        <p>  
            <button onClick={this.randomImages}>Random Images</button>
           <span style={{color:"blue"}}>{this.state.loading}</span>
        </p>
        <ImageList images={this.state.data}/>
      </div>
    )
  }
}