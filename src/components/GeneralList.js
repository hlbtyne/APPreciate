import React, { Component } from "react";
import Application from "./Application";

class GeneralList extends Component {
  render() {
    return (
      <div>
        <h2 style={{padding: 15, paddingLeft: 30, textAlign: "left", background: "#e9ecef"}}>Apps</h2>
        <div className="card-group" role="group">
          {this.props.apps.map(app => {
            return <Application key={app.id} app={app} selectApp={this.props.selectApp} />;
          })
          }
        </div>
      </div>
      
    );
  }
}

export default GeneralList;
