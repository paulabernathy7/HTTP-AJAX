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
      <form>
        <label>
          New Friend:
          <input type="text" friend="friend" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </container>
  );
};

export default Friend;
