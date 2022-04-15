import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Persons } from "../../resources/mockData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { personFilter } from "./personFilter";

import "./index.scss";
class PersonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Persons,
      filter: props.filterData,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ filter: nextProps.filterData });
  }
  render() {
    let { data, filter } = this.state;
    let filteredList = personFilter.filter(data, filter);
    return (
      <div className="list">
        {filteredList.map((person, index) => {
          let { id, name, email, phone, policyNumbers } = person;
          return (
            <div key={id}>
              <h3>{name}</h3>
              <Row>
                <Col className="phoneAndMail">
                  <div>
                    <FontAwesomeIcon icon={solid("phone")} /> {phone}
                  </div>
                  <div>
                    <FontAwesomeIcon icon={solid("at")} /> {email}
                  </div>
                </Col>
                <Col>
                  <FontAwesomeIcon icon={solid("file-lines")} /> Policy No.
                  {policyNumbers.map((number, index) => {
                    return (
                      <span key={number.id}>
                        <span>{number.name}</span>
                        <span className="line">
                          {policyNumbers.length === index + 1 ? "" : "|"}
                        </span>
                      </span>
                    );
                  })}
                </Col>
              </Row>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PersonList;
