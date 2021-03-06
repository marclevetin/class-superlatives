import React, { Component } from 'react';

import API from "../../utils/API";

import Card from '../../components/Card';
import FormContainer from '../../components/FormContainer';
import Button from '../../components/Button';
import { Row, Container, Col } from "../../components/Grid";
import { Input } from "../../components/Form";
// import FilterContainer from '../../components/FilterContainer/FilterContainer';

class Superlatives extends Component {
  constructor(props) {
    super(props)
    this.state = {
      superlatives: [],
      showAddForm: false,
      who: '',
      superlative: 'Most likely to ',
      validateWho: '',
      validateSuperlative: '',
      filter: ''
    }

    // The following line confirms that handleSubmit will never lose "this".
    // The arrow function automatic context wasn't enough.
    this.handleSubmit = this.handleSubmit.bind(this)

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
      .catch(console.log('error in handleVote'));
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFilterChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      filter: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.validateWho();
    this.validateSuperlative();

    if (this.state.validateWho === '' && this.state.validateSuperlative === '' && this.state.who) {
      const titleCaseWords = this.state.superlative.slice(0,1).toUpperCase() + this.state.superlative.toLowerCase().substring(1, this.state.superlative.length);

      const payload = {
        person: this.state.who,
        words: titleCaseWords,
        count: 1
      };

      API.saveSuperlative(payload)
        .then(res => this.fetchSuperlatives())
        .then(res => this.setState({
          who: '',
          superlative: 'Most likely to ',
          showAddForm: false,
          validateWho: '',
          validateSuperlative: ''
        }))
        .catch(console.log('error in handleSubmit'));
    }
  }

  handleCancel = () => {
    this.setState({
      who: '',
      superlative: 'Most likely to ',
      showAddForm: false,
      validateWho: '',
      validateSuperlative: ''
    });
  }

  toggleForm = () => {
    const currentState = this.state.showAddForm;
    this.setState({
      showAddForm: !currentState
    });
  }

  validateWho = (text) => {
    const message = (this.state.who.length === 0) ? 'You must nominate a person.' : '';

    this.setState({
      validateWho: message
    });
  }

  validateSuperlative = () => {
    const message = (this.state.superlative.length === 0) ? 'Superlative must not be empty.' : '';

    this.setState({
      validateSuperlative: message
    });
  }

  render() {
    const filteredCards = (this.state.filter) ? this.state.superlatives.filter(superlative => superlative.person.toLowerCase().includes(this.state.filter.toLowerCase()), this)
                                              : this.state.superlatives;

    const allCards = filteredCards
                      .map(superlative =>
                        <Card
                          key={superlative._id}
                          id={superlative._id}
                          person={superlative.person}
                          words={superlative.words}
                          count={superlative.count}
                          handleVote={this.handleVote}
                          who={this.state.who}
                          superlative={this.state.superlative}
                          fetchSuperlatives={this.fetchSuperlatives}
                        /> )

    const showAddForm = (this.state.showAddForm) ?
      <FormContainer
        who={this.state.who}
        superlative={this.state.superlative}
        handleCancel={this.handleCancel}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        validateWho={this.state.validateWho}
        validateSuperlative={this.state.validateSuperlative}
      /> :
      <Col size="sm-12">
        <p className="text-center">
          <Button
            words='Add a new superlative'
            handleClick={this.toggleForm}
          />
        </p>
      </Col>
    return(
      <Container fluid>
        <Row>
          {showAddForm}
          <hr />
        </Row>
        <Row>
          <Col size="sm-8 sm-offset-2">
            <Input
              label="Filter by name"
              handleChange={this.handleFilterChange}
            />
          </Col>
        </Row>
        <Row>
          {allCards}
        </Row>
      </Container>
    )
  }
}

export default Superlatives;
