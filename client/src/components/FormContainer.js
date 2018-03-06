import React, { Component } from 'react';

// dependencies
import Button from './Button'
import {Input} from './Form'

class FormContainer extends Component {
  state ={
    who: '',
    superlative: 'Most likely to '
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    });
  }

  render() {
    return(
      <form>
        <Input
          label='Who'
          name='who'
          value={this.state.who}
          handleChange={this.handleChange}
        />
        <Input
          label='Most likely to do...'
          name='superlative'
          placeholder='most likely to'
          value={this.state.superlative}
          handleChange={this.handleChange}
        />
        <Button
          words='Submit'
        />
      </form>
    )
  }
}

export default FormContainer;
