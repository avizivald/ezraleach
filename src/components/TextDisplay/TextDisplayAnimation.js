import React from 'react';
import './TextDisplayAnimation.scss'
import parse from 'html-react-parser';


export class TextDisplayAnimation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.text ? this.props.text : "",
      id: this.props.id ? this.props.id : Math.random() * 100
  }
}
  componentDidMount() {
        let div = document.getElementById(this.state.id);
        console.log(div);
    if (this.props.direction && this.props.direction === "vertical" && div.scrollHeight > div.clientHeight) {
      console.log("scrollHeight > div.clientHeight",div.scrollHeight , div.clientHeight);
      div.className = "to-move-up content";
    }
    if (this.props.direction && this.props.direction === "horizontal"/* &&div.scrollWidth > div.clientWidth*/) {
      console.log("div.scrollWidth > div.clientWidth",div.scrollWidth , div.clientWidth);
      div.className = "to-move-side content";
    }
  }

  render() {
    return (
      <div className="frame">
        <div id={this.state.id} className="content">
               { parse(this.state.text)}
            </div>
      </div>
    )
  }

}