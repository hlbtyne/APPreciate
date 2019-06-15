import React, { Component } from "react";
import Navbar from "./Navbar";
import AddAppForm from "./AddAppForm";
import GeneralList from "./GeneralList";
import PortfolioList from "./PorfolioList";
import AppDetails from "./AppDetails";
import apps from "../data/db.js";

class Home extends Component {
  state = {
    apps: [],
    portfolioApp: [], 
    selectedApp: null
  };

  selectApp = app => {
    this.setState({
      selectedApp: app
    });
  };

  deselectApp = () => {
    this.setState({
      selectedApp: null
    });
  };

  addToPortfolio=(app)=>{
    this.setState({
        apps: [...this.state.portfolioApp, app]
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <AddAppForm />
        {
            this.state.selectedApp 
            ? <AppDetails app={this.state.selectedApp} deselectApp={this.deselectApp} addToPortfolio={this.addToPortfolio}/> 
            : <GeneralList apps={this.state.apps} selectApp={this.selectApp}/>
        }
        <PortfolioList />
        
      </div>
    );
  }
}

export default Home;

// User can view apps on the market. --
// User can click on an app to view app details (onClick).
// User can give their review on an app from within app details.
// User can delete a review.
// User can update a review.
// User can add an app from general list to their Portfolio.
// User can create a new app to add to general list.
// User Logout
