import React from "react"

function Application(props) {
    return (
      <div className="App">
            <h1>{props.app.name}</h1>
            <img src={props.app.image} /> 
            <p>Description: {props.app.description}</p>
            <p>Rating: {props.app.rating}</p>
            <p>REVIEWS HERE</p>
            <p>Category: {props.name.category}</p>
      </div>
    );
  }
  
  export default Application;