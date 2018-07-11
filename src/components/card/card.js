import React , { Component } from "react";
import './card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.onClickEvent = this.onClickEvent.bind(this);
  }

  onClickEvent() {  
    this.props.callback(this.props.id);
  }

  render() {
    return (
      <div className="card" onClick={this.onClickEvent}>
        <img src={this.props.image}></img>
      </div>
    );
  }
} 

export default Card;
