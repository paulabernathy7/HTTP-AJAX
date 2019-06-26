import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../App";

const Friend = props => {
  return (
    <div>
      <p>{props.friend.name}</p>
      <p>{props.friend.age}</p>
      <p>{props.friend.email}</p>
    </div>
  );
};

export default Friend;
