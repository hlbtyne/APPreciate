import React, { Component } from "react";
import Navbar from "./Navbar";
import AddAppForm from "./AddAppForm";
import GeneralList from "./GeneralList";
import PortfolioList from "./PorfolioList";
import AppDetails from "./AppDetails";
import apps from "../data/db.js";

class Home extends Component {
  state = {
    apps: apps,
    portfolioApps: [], 
    selectedApp: null,
    viewPortfolio: false
  };

  selectApp = app => {
    this.setState({
      selectedApp: app
    });
  };

  home = () => {
    this.setState({
      selectedApp: null
    });
    this.setState({
      viewPortfolio: false
    })
  };

  addToPortfolio = app => {
    if (this.state.portfolioApps.includes(app)) return
    
    this.setState({
      portfolioApps: [...this.state.portfolioApps, app]
    })
  }

  viewPortfolio = () => {
    this.setState({
      viewPortfolio: true
    })
  }

  render() {
    return (
      <div>
        <Navbar home={this.home} viewPortfolio={this.viewPortfolio}/>
        {/* <AddAppForm /> */}
        {
            (this.state.selectedApp)
            ? <AppDetails app={this.state.selectedApp} key={this.state.selectedApp.id} addToPortfolio={this.addToPortfolio}/> 
            : (this.state.viewPortfolio)
            ? <PortfolioList />
            : <GeneralList apps={this.state.apps} selectApp={this.selectApp}/>
        }
        
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
