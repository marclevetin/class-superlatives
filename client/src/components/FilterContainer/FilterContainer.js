import React, { Component } from "react";

import { Col } from '../Grid';
import { Input } from '../Form';

class FilterContainer extends Component {
    state = {
        filtered: ''
    }

    render() {
        return (
            <div>
                <Col size="sm-8 sm-offset-2">
                    <Input 
                        label="Filter by name"
                    />
                </Col>
            </div>
        )
    }
}

export default FilterContainer;