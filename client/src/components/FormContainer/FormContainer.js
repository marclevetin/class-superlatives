import React, { Component } from 'react';

// dependencies
import { Col } from "../Grid";
import Button from '../Button'
import {Input} from '../Form'

class FormContainer extends Component {

  render() {
    const whoHasError = (this.props.validateWho) ? 'form-group has-error' : 'form-group'
    const superlativeHasError = (this.props.validateSuperlative) ? 'form-group has-error' : 'form-group'

    return(
      <Col size="sm-8 sm-offset-2">
        <form onSubmit={this.props.handleSubmit}>
          <Input
            label='Who'
            name='who'
            value={this.props.who}
            handleChange={this.props.handleChange}
            errorText={this.props.validateWho}
            formGroupClass={whoHasError}
          />
          <Input
            label='Most likely to do...'
            name='superlative'
            placeholder='most likely to'
            value={this.props.superlative}
            handleChange={this.props.handleChange}
            errorText={this.props.validateSuperlative}
            formGroupClass={superlativeHasError}
          />
          <Button
            words='Submit'
          />
          &nbsp;&nbsp;<a onClick={this.props.handleCancel}>Cancel</a>
        </form>
        <hr />
      </Col>
    )
  }
}

export default FormContainer;
