import React from "react"

function AppDetails(props) {
    return (
      <div className="App">
        <h1>{props.app.name}</h1>
        <img height="200px" src={props.app.image} />
        <p>{props.app.description}</p>
        <p>Category: {props.app.category}</p>
        {/* <p>{props.app.rating}</p> */}
        {
          props.app.reviews.map(review => <h4>{review}</h4> )
        }
        <button onClick={() => props.addToPortfolio(props.app)}></button>
      </div>
    );
  }
  
  export default AppDetails;