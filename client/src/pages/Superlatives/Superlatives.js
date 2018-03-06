import React, { Component } from 'react';

import API from "../../utils/API";

import Card from '../../components/Card'
import FormContainer from '../../components/FormContainer'
import Button from '../../components/Button'
import { Row, Container } from "../../components/Grid";

class Superlatives extends Component {
  state = {
    superlatives: [],
    showAddForm: false
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

  toggleForm = () => {
    const currentState = this.state.showAddForm;
    this.setState({
      showAddForm: !currentState
    })
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

    const showAddForm = (this.state.showAddForm) ?
      <FormContainer /> :
      <Button
        words='Add a new superlative'
        handleClick={this.toggleForm}
      />
    return(
      <Container fluid>
        <Row>
          {showAddForm}
          <hr />
        </Row>
        <Row>
          {allCards}
        </Row>
      </Container>
    )
  }
}

export default Superlatives;
