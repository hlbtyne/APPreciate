import React, { Component } from "react";
import Application from "./Application";

class GeneralList extends Component {
  render() {
    return (
      <div>
        {this.props.apps.map(app => {
          return <Application key={app.id} app={app} selectApp={this.props.selectApp} />;
        })
        }
      </div>
    );
  }
}

export default GeneralList;
