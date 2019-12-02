// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () => (
  <div>
    <h1>Hi there!</h1>
  </div>
);

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
