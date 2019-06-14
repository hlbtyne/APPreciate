import React, { Component } from 'react'
import Navbar from "./Navbar"
import AddAppForm from "./AddAppForm"
import GeneralList from "./GeneralList"
import PortfolioList from "./PorfolioList"
import AppDetails from "./AppDetails"
import apps from '../data/db'

class Home extends Component {

    state = {
        apps: apps
    }
    
    render() {
        return (
            <div>
                <Navbar /> 
                <AddAppForm />
                <GeneralList apps={this.state.apps} />
                <PortfolioList />
                <AppDetails />
            </div>
        );
    }
}

export default Home;
