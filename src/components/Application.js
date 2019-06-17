import React from "react";

const Application = props => {
  return (
    <div>

      <div onClick={()=> props.selectApp(props.app)} className="card border-light mb-3" style={{width: 400, margin: 30}}>
        <div className="card-header">
          <h4>{props.app.name}</h4>
        </div>
        <img src={props.app.image} style={{width: 398}}></img>
        <div className="card-body">
          <h5>Category: {props.app.category}</h5>
          <p className="card-text">{props.app.description}</p>
        </div>
      </div>

    </div>
    
  );
};

export default Application;