import React, { Component } from "react";
import { Container, InputGroup, FormControl } from "react-bootstrap";
import PersonList from "./components/Person";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "test",
    };
  }

  handleSearch = (event) => {
    this.setState({ filter: event.target.value });
  };
  render() {
    let { filter } = this.state;
    return (
      <div>
        <Container className="mt-3">
          <InputGroup>
            <InputGroup.Text id="basic-addon1">
              <FontAwesomeIcon icon={solid("magnifying-glass")} />
            </InputGroup.Text>
            <FormControl
              value={this.filter}
              onChange={this.handleSearch}
              placeholder="SEARCH (Client Name / Policy Number)"
            />
          </InputGroup>
          <PersonList filterData={filter} />
        </Container>
      </div>
    );
  }
}

export default App;
