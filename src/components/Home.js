import React, { Component } from "react";
import Navbar from "./Navbar";
// import AddAppForm from "./AddAppForm";
import GeneralList from "./GeneralList";
import PortfolioList from "./PorfolioList";
import AppDetails from "./AppDetails";

const appsAPI = 'http://localhost:3001/apps'
const reviewsAPI = 'http://localhost:3001/reviews'
const userappsAPI = 'http://localhost:3001/user_apps'

class Home extends Component {
  state = {
    apps: [],
    portfolioApps: [], 
    selectedApp: null,
    viewPortfolio: false, 
    searchTerm: ""
  };


  componentDidMount() {
    fetch(appsAPI)
    .then(resp => resp.json())
    .then(apps => this.setState({ apps })
    )
  }

  updateSearchTerm = (e) => {
    this.setState({
      searchTerm: e.target.value 
    })
  }

  selectApp = app => {
    this.setState({
      selectedApp: app,
    });
  };

  home = () => {
    this.setState({
      selectedApp: null,
    });
    this.setState({
      viewPortfolio: false
    })
  };

  addOrRemoveFromPortfolio = app => {
    if (!this.state.portfolioApps.includes(app)) {
      const newuserapp = {
        app_id: app.id,
        user_id: 1
      }
      
      this.createUserAppBackend(newuserapp)
      .then(userapp => {
        const app = this.state.apps.filter(app => app.id === userapp.app_id)
        this.setState({
          portfolioApps: [...this.state.portfolioApps, app[0]]
        })
      })

    } else {
      const remainingApps = this.state.portfolioApps.filter(pa => pa !== app )
      this.setState({
        portfolioApps: remainingApps
      })
    }
  }

  createUserAppBackend = userapp => {
    return fetch(userappsAPI, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userapp)
    })
    .then(resp => resp.json())
  }


  viewPortfolio = () => {
    this.setState({
      viewPortfolio: true
    })
    this.setState({
      selectedApp: null,
    })
  }

  addReview = event => {
    event.preventDefault();
    const review = event.target.review.value

    const newReview = {
      app_id: this.state.selectedApp.id,
      comment: review,
      user_id: 1
    }

    this.addReviewToBackend(newReview)
    .then(review => {
      const updatedSelectedApp = this.state.selectedApp
      updatedSelectedApp.reviews.push(review)
      this.setState({
        selectedApp: updatedSelectedApp})
    })
      event.target.review.value = ''
    
  }

  addReviewToBackend = review => {
    return fetch(reviewsAPI, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(review)
    })
    .then(resp => resp.json())
  }

  deleteReviewBackend = review => {
    return fetch(reviewsAPI+`/${review.id}`, {
      method: "DELETE", 
      headers: {"Content-Type" : "application/json" }, 
      body: JSON.stringify(review)
    })
    .then(resp => resp.json())
  }

  deleteReview = review => {
    this.deleteReviewBackend(review)
    .then(review => {
      const updatedSelectedApp = this.state.selectedApp
      const remainingReviews = this.state.selectedApp.reviews.filter(rev => rev.id !== review.id )
      updatedSelectedApp.reviews = remainingReviews
      this.setState({
        selectedApp: updatedSelectedApp})
    })
  }

  render() {
    return (
      <div>
        <Navbar home={this.home} 
          viewPortfolio={this.viewPortfolio} 
          portfolio={this.state.viewPortfolio} 
          selectedApp={this.state.selectedApp}
          updateSearchTerm={this.updateSearchTerm}/>
        {
          (this.state.viewPortfolio && this.state.selectedApp)
            ? <AppDetails 
                app={this.state.selectedApp} 
                portfolioApps={this.state.portfolioApps} 
                key={this.state.selectedApp.id} 
                addOrRemove={this.addOrRemoveFromPortfolio}
                addReview={this.addReview}
                appReviews={this.state.selectedApp.reviews}
                deleteReview={this.deleteReview}
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
                  appReviews={this.state.selectedApp.reviews}
                  deleteReview={this.deleteReview}
                /> 
                : <GeneralList apps={this.state.apps} selectApp={this.selectApp} searchTerm={this.state.searchTerm}/>
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
