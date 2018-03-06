import React, { Component } from 'react';

import API from "../../utils/API";

import Card from '../../components/Card'
import { Row, Container } from "../../components/Grid";

class Superlatives extends Component {
  state = {
    superlatives: []
  }

  componentDidMount() {
    this.fetchSuperlatives();
  }

  fetchSuperlatives = () => {
    API.getSuperlatives()
      .then(res =>
        this.setState({
          superlatives: res.data
        })
      )
      .catch(err => console.log(err));
  }

  handleVote = (id) => {
    API.incrementVote(id)
      .then(res => this.fetchSuperlatives())
  }

  render() {
    const allCards = this.state.superlatives.map(superlative =>
      <Card
        key={superlative._id}
        id={superlative._id}
        person={superlative.person}
        words={superlative.words}
        count={superlative.count}
        handleVote={this.handleVote}
      />)

    return(
      <Container fluid>
        <Row>
          {allCards}
        </Row>
      </Container>
    )
  }
}

export default Superlatives;
