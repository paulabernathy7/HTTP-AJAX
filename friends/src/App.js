import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import Friend from "./Components/Friend";
import Form from "./Components/Form";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => {});
  }

  render() {
    return (
      <div>
        <Form />
        {this.state.friends.map(item => {
          return <Friend friend={item} />;
        })}
      </div>
    );
  }
}

export default App;
