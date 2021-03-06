import React , { Component } from "react";
import Card from "./components/card/card";

import blackberry from "./images/blackberry.jpg";
import blueberries from "./images/blueberries.jpg";
import cherries from "./images/cherries.jpg";
import grapes from "./images/grapes.jpg";
import orange from "./images/orange.jpg";
import peaches from "./images/peaches.jpg";
import pears from "./images/pears.jpg";
import plums from "./images/plums.jpg";
import raspberries from "./images/raspberries.jpg";


class App extends Component {
  constructor(props) {
    super(props);
    this.getIdFromChildren = this.getIdFromChildren.bind(this);
    this.addToClickedArray = this.addToClickedArray.bind(this);
    this.isAlreadyClick = this.isAlreadyClick.bind(this);
    this.suffleImages = this.suffleImages.bind(this);

    this.state = {
      score: 0,
      clicked: [],
      cards: this.createListOfCard(),
      message: ""
    }
  }
//change happens inside and outside
  getIdFromChildren(id) {
    console.log(id);
    this.suffleImages();
    //wrong click
    if(this.isAlreadyClick(id)) {
      this.setState({ score: 0,
                      clicked: [],
                      message: "YOU ALREADY CLICKED THAT FOOL!"});
    } else {
      let temp = this.state.score;
      temp++;

      if(temp == 9) {
        this.setState({ score: 0, 
                        clicked: [],
                        message: "YOU WIN!" });
      } else {
        this.setState({score: temp, 
          clicked: this.addToClickedArray(id),
          message: "" });
      }
    }
  }

  suffleImages() {
    let arr = this.state.cards.slice();
    arr.sort(function(a,b) {
      return 0.5 - Math.random();
    });

    this.setState({cards: arr});
  }

  isAlreadyClick(id) {
    let arr = this.state.clicked;
      for(let i = 0; i < arr.length; i++) {
        if(id === arr[i]) {
          return true;
        }
      }
      return false;
  }

  addToClickedArray(id) {
    let arr = this.state.clicked;
    for(let i = 0; i < arr.length; i++) {
      if(id === arr[i]) {
         return arr;
      }
    }
    arr.push(id);
    return arr;
  }

  createListOfCard() {
    let cards = [];
    let image;
    for(let i = 0; i < 9; i++) {
      switch(i) {
        case 0: image = blackberry; break;
        case 1: image = blueberries; break;
        case 2: image = cherries; break;
        case 3: image = grapes; break;
        case 4: image = orange; break;
        case 5: image = peaches; break;
        case 6: image = pears; break;
        case 7: image = plums; break;
        case 8: image = raspberries; break;
      }
      cards.push(<Card image={image} id={i} callback={this.getIdFromChildren}></Card>);
    }
    return cards;
  }

  render() {
    return (
      <div className="masterContainer">
      <img className="bgImage" src={ require('./images/fruitBackgroundTop.png') } />
      <div className="container">
        <img className="imgTitle" src={ require('./images/gcTitle.png') } />
        <div className="row">
            <div className="score">
              Score {this.state.score}
            </div>
  
            <div className="message">
              {this.state.message}
            </div> 
                <div className="cardRow">
                  {this.state.cards}
            </div>
        </div>
      </div>
      <img className="bgImageBottom" src={ require('./images/fruitBackgroundBottom.png') } />
      </div>
    );
  }
} 

export default App;
