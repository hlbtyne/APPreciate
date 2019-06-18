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
    selectedAppReviews: [],
    viewPortfolio: false
  };

  selectApp = app => {
    this.setState({
      selectedApp: app,
      selectedAppReviews: app.reviews
    });
  };

  home = () => {
    this.setState({
      selectedApp: null,
      selectedAppReviews: []
    });
    this.setState({
      viewPortfolio: false
    })
  };

  addOrRemoveFromPortfolio = app => {
    if (!this.state.portfolioApps.includes(app)) {
      this.setState({
        portfolioApps: [...this.state.portfolioApps, app]
      })
    } else {
      const remainingApps = this.state.portfolioApps.filter(pa => pa !== app )
      this.setState({
        portfolioApps: remainingApps
      })
    }
    
  }

  viewPortfolio = () => {
    this.setState({
      viewPortfolio: true
    })
    this.setState({
      selectedApp: null,
      selectedAppReviews: []
    })
  }

  addReview = event => {
    event.preventDefault();
    const review = event.target.review.value
    this.setState({
      selectedAppReviews: [review, ...this.state.selectedAppReviews]
    })
  }

  render() {
    return (
      <div>
        <Navbar home={this.home} viewPortfolio={this.viewPortfolio} portfolio={this.state.viewPortfolio} selectedApp={this.state.selectedApp}/>
        {
          (this.state.viewPortfolio && this.state.selectedApp)
            ? <AppDetails 
                app={this.state.selectedApp} 
                portfolioApps={this.state.portfolioApps} 
                key={this.state.selectedApp.id} 
                addOrRemove={this.addOrRemoveFromPortfolio}
                addReview={this.addReview}
                appReviews={this.state.selectedAppReviews}
                /> 
            : (this.state.viewPortfolio)
              ? <PortfolioList apps={this.state.portfolioApps} selectApp={this.selectApp}/>
              : (this.state.selectedApp)
                ? <AppDetails 
                  app={this.state.selectedApp} 
                  key={this.state.selectedApp.id} 
                  portfolioApps={this.state.portfolioApps}
                  addOrRemove={this.addOrRemoveFromPortfolio}
                  addReview={this.addReview}
                  appReviews={this.state.selectedAppReviews}
                /> 
                : <GeneralList apps={this.state.apps} selectApp={this.selectApp}/>
        }
        
      </div>
    );
  }
}

export default Home;

// User can log in
// User can give their review on an app from within app details.
// User can delete a review.
// User can update a review.
// User can create a new app to add to general list.
// User log out
