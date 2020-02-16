import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";
import Dogs from "./Dogs";

const dogs = [
  { Title: "a", id: 1, src: './assets/images/a.png'},
  { Title: "b", id: 2, src: './assets/images/b.png'},
  { Title: "c", id: 3, src: './assets/images/c.png'},
  { Title: "d", id: 4, src: './assets/images/d.png'},
  { Title: "e", id: 5, src: './assets/images/e.png'},
  { Title: "f", id: 6, src: './assets/images/f.png'},
  { Title: "g", id: 7, src: './assets/images/g.png'},
  { Title: "h", id: 8, src: './assets/images/h.png'},
  { Title: "i", id: 9, src: './assets/images/i.png'},
  { Title: "j", id: 10, src: './assets/images/j.png'},
  { Title: "k", id: 11, src: './assets/images/k.png'},
  { Title: "l", id: 12, src: './assets/images/l.png'}
];

class OmdbContainer extends Component {
  state = {
    result: dogs,
    current_score: 0,
    top_score: 0,
    message:"Click a dog!"
  };

/*   searchMovies = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  }; */

   componentWillMount() {
    this.shuffledogs();
  } 

  shuffledogs = () => {
    let res = this.shuffle(this.state.result);
    this.setState({
      result: res
    });
  }

   shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.shuffledogs();
  };

  render() {
    return (
      <div>
      <Navbar 
      message = {this.state.message}
      current_score = {this.state.current_score}
      top_score = {this.state.top_score}
      />
      <Header />
      <Container>
      
        <Row>
          <Col size="md-12">
            {this.state.result.map(r => (
              <Dogs
                title={r.Title || "Ops! Please search again!"}
                src={r.src}
                onClick={this.handleFormSubmit}
              />
            ))}
          </Col>

        </Row>
      </Container>
      <Footer />
      </div>
    );
  }
}

export default OmdbContainer;