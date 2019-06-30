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

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addFriend = e => {
    e.preventDefault();
    //destructing the state below
    // created new object called newFriend
    const { name, age, email } = this.state;
    const newFriend = { name, age, email };
    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {});
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addFriend}>
          <input
            onChange={this.handleChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleChange}
            placeholder="email"
            value={this.state.email}
            name="email"
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
