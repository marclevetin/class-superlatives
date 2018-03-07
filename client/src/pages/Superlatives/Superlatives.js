import React, { Component } from 'react';

import API from "../../utils/API";

import Card from '../../components/Card'
import FormContainer from '../../components/FormContainer'
import Button from '../../components/Button'
import { Row, Container } from "../../components/Grid";

class Superlatives extends Component {
  state = {
    superlatives: [],
    showAddForm: false,
    who: '',
    superlative: 'Most likely to ',
    validateWho: '',
    validateSuperlative: '',
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
      .catch(console.log('error in handleVote'))
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.validateWho();
    this.validateSuperlative();

    if (this.state.validateWho === '' && this.state.validateSuperlative === '' && this.state.who) {
      const titleCaseWords = this.state.words.slice(0,1).toUpperCase() + this.state.words.toLowerCase().substring(1, this.state.words.length);

      const payload = {
        person: this.state.who,
        words: titleCaseWords,
        count: 1
      };

      API.saveSuperlative(payload)
        .then(res => this.fetchSuperlatives)
        .then(res => this.setState({
          who: '',
          superlative: 'Most likely to ',
          showAddForm: false
        }))
        .catch(console.log('error in handleSubmit'));
    }
  }

  toggleForm = () => {
    const currentState = this.state.showAddForm;
    this.setState({
      showAddForm: !currentState
    });
  }

  validateWho = (text) => {
    if (this.state.who.length === 0) {
      this.setState({
        validateWho: 'You must nominate a person.'
      });
    }
  }

  validateSuperlative = () => {
    let errorMessage = this.state.validateSuperlative;

    (this.state.superlative.slice(0, 15) !== 'Most likely to ')
      ? errorMessage += "Superlative must begin with 'Most likely to'.  "
      : errorMessage += '';

    (this.state.superlative.length > 15)
      ? errorMessage += 'Superlative must not be empty.'
      : errorMessage += '';

    this.setState({
      validateSuperlative: errorMessage
    });

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
      <FormContainer
        who={this.state.who}
        superlative={this.state.superlative}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        validateWho={this.state.validateWho}
        validateSuperlative={this.state.validateSuperlative}
      /> :
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
