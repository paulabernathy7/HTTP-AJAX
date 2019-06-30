import React from "react";
import axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  render() {
    return (
      <div>
        <form>
          <input placeholder="name" value={this.state.name} name="name" />
          <input placeholder="age" value={this.state.age} name="age" />
          <input placeholder="email" value={this.state.email} name="email" />
          <button type="submit" />
        </form>
      </div>
    );
  }
}

export default Form;
