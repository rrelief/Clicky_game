//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import ImageCard from "./components/ImageCard";
import Footer from "./components/Footer";
import cars from "./cars.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    cars,
    clickedcars: [],
    score: 0
  };

//when you click on a card ... the cars is taken out of the array
  imageClick = event => {
    const currentcars = event.target.alt;
    const carsAlreadyClicked =
      this.state.clickedcars.indexOf(currentcars) > -1;

//if you click on a cars that has already been selected, the game is reset and cards reordered
    if (carsAlreadyClicked) {
      this.setState({
        cars: this.state.cars.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedcars: [],
        score: 0
      });
        alert("Your memory is worse than mine. Play again?");

//if you click on an available cars, your score is increased and cards reordered
    } else {
      this.setState(
        {
          cars: this.state.cars.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedcars: this.state.clickedcars.concat(
            currentcars
          ),
          score: this.state.score + 1
        },
//if you get all 12 cars corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              cars: this.state.cars.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedcars: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, ImageCard, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.cars.map(cars => (
            <ImageCard
              imageClick={this.imageClick}
              id={cars.id}
              key={cars.id}
              image={cars.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;