import React, { Component } from "react";

import API from "../../utils/API";

import { Col } from "../../components/Grid";
import Button from '../Button';
import { Input } from '../Form';

class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
      purpose: '',
      name: '',
      words: '',
      showDelete: false
    }
  }

  deleteCard = (id) => {
    API.deleteSuperlative(id)
      .then(res =>  this.setState({
                      purpose: '',
                      name: '',
                      words: '',
                      showDelete: false
                    })
      )
      .catch(err => console.log(err))
      .finally(() => this.props.fetchSuperlatives());
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  enableUpdate = () => {
    this.setState({
      purpose: 'update',
      name: this.props.person,
      words: this.props.words
    });
  }

  cancelUpdate = () => {
    this.setState({
      purpose: '',
      name: '',
      words: '',
      showDelete: false
    });
  }

  confirmDelete = () => {
    const newState = !this.state.showDelete;
    this.setState({
      showDelete: newState
    });
  }

  updateForm = (id) => {
    const payload = {
      person: this.state.name,
      words: this.state.words
    };

    API.updateSuperlative(id, payload)
      .then(res =>  this.setState({
                      purpose: '',
                      name: '',
                      words: ''
                    })
      )
      .catch(err => console.log(err))
      .finally(() => this.props.fetchSuperlatives());
  }

  render() {
    const name = (this.state.purpose === 'update')
      ? <Input
          label='Who'
          name='name'
          handleChange={this.handleChange}
          value={this.state.name}
        />
      : <h3 className="panel-title text-center">{this.props.person}</h3>;

    const words = (this.state.purpose === 'update')
      ? <Input
          label='Most likely to do...'
          name='words'
          value={this.state.words}
          handleChange={this.handleChange}/>
      : <h3>{this.props.words}</h3>;

    const deleteArea = (this.state.showDelete)
      ? <div>
          <hr/>
          <p>Are you sure you want to delete this card?</p>
          <Button words='Delete' handleClick={() => this.deleteCard(this.props.id)}/> <a onClick={this.cancelUpdate}>Cancel</a>
        </div>
      : <p className='text-right' onClick={this.confirmDelete}><span className="glyphicon glyphicon-trash" aria-hidden="true"></span></p>

    const updateArea = (this.state.purpose !== 'update')
      ? <a onClick={this.enableUpdate}>Update</a>
      : (this.state.showDelete)
      ? <div>
          {deleteArea}
        </div>
      : <div>
          <Button words='Update' handleClick={() => this.updateForm(this.props.id)}/>  <a onClick={this.cancelUpdate}>Cancel</a>
          {deleteArea}
        </div>

    const votes = (this.state.purpose === 'update')
      ? ''
      : <h3>{this.props.count} {(this.props.count) === 1 ? 'Vote' : 'Votes'}</h3>

    const voteButton = (this.state.purpose === 'update')
      ? ''
      : <button className="btn btn-default" type="submit" onClick={() => this.props.handleVote(this.props.id)}>
          <span className="glyphicon glyphicon-ok" aria-hidden="true"></span> Vote
        </button>

    return(
      <Col size="sm-4">
        <div className="panel panel-default">
          <div className="panel-heading">
            {name}
          </div>
          <div className="panel-body text-center">
            {words}
            {votes}
            {voteButton}
            <hr />
            {updateArea}
          </div>
        </div>
      </Col>
    )
  }
}

export default Card;
