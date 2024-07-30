import { render } from "@testing-library/react";
import React from "react";

class Name extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Ali",
    };
  }
  render() {
    return (
      <div>
        <h1>My name is {this.state.name}</h1>
        {/* {this.setState({ name: "Shahmir" })} */}
      </div>
    );
  }
}

export default Name;
