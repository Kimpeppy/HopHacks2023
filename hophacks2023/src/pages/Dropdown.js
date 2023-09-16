import React, { Component } from "react";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "", // Initially, no option is selected
    };
  }

  handleSelectChange = (event) => {
    this.setState({ selectedOption: event.target.value });
  };

  render() {
    return (
      <div>
        <h2>Select an option:</h2>
        <select
          value={this.state.selectedOption}
          onChange={this.handleSelectChange}
        >
          <option value="">Select...</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <p>Selected option: {this.state.selectedOption}</p>
      </div>
    );
  }
}

export default Dropdown;
