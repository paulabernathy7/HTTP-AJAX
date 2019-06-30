import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../App";

const Friend = props => {
  return (
    <container>
      <div>
        <p>Name: {props.friend.name}</p>
        <p>Age: {props.friend.age}</p>
        <p>Email: {props.friend.email}</p>
      </div>
    </container>
  );
};

export default Friend;
