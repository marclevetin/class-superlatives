import React from "react";
import { Col, Row, Container } from "../../components/Grid";

const NoMatch = () =>
  <Container fluid>
    <Row>
      <Col size="md-12">
          <h1>
            Error 404 - Most likely to have found a page that doesn't exist....
          </h1>
      </Col>
    </Row>
  </Container>;

export default NoMatch;
