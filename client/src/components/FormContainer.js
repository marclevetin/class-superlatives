import React, { Component } from 'react';

// dependencies
import { Col } from "./Grid";
import Button from './Button'
import {Input} from './Form'

class FormContainer extends Component {

  render() {
    return(
      <Col size="sm-8 sm-offset-2">
        <form onSubmit={this.props.handleSubmit}>
          <Input
            label='Who'
            name='who'
            value={this.props.who}
            handleChange={this.props.handleChange}
          />
          <Input
            label='Most likely to do...'
            name='superlative'
            placeholder='most likely to'
            value={this.props.superlative}
            handleChange={this.props.handleChange}
          />
          <Button
            words='Submit'
          />
        </form>
      </Col>
    )
  }
}

export default FormContainer;
