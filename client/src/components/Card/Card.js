import React from "react";

import { Col } from "../../components/Grid";

const Card = (props) =>
  <Col size="sm-4">
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title text-center">{props.person}</h3>
      </div>
      <div className="panel-body text-center">
        <h3>{props.words}</h3>
        <h3>{props.count} Votes</h3>
        <button className="btn btn-default" type="submit" onClick={() => props.handleVote(props.id)}>
          <span className="glyphicon glyphicon-ok" aria-hidden="true"></span> Vote
        </button>
      </div>
    </div>
  </Col>;

export default Card;
