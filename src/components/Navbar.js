import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <h1 className="text-white bg-dark">Clicky <span className="badge badge-secondary">Game</span></h1>
  <h2 className="text-white justify-content-center">{props.message}</h2>
        <h3 className="text-white float-right">Current Score: {props.current_score} | Top Score: {props.top_score} </h3>
    </nav>
  );
}

export default Navbar;