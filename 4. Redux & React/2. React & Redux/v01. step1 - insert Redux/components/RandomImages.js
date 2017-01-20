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
//    var imgurAPI = "https://api.imgur.com/3/gallery/random/random/1";
    var pixabayAPI = "https://pixabay.com/api/?key=3726274-5392d1d9461f864fb5f07a1e9&q=yellow+flowers&image_type=photo&pretty=true";
    $.getJSON(pixabayAPI).done(data => this.setState({data:data.hits, loading: "loaded"}))
  }
  render() {
    console.log('RandomImages.render()');
//      const images = this.state.data;
      // stateless function
      function ImageList(props){
          return (
            <div>
              {props.images.map((image) => (<img key={image.id} src={image.previewURL} style={{height:"200px"}}/>))}
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