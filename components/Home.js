import React, { Component } from 'react';
import Navbar from "../components/Navbar"
import AddAppForm from "../components/AddAppForm"
import GeneralList from "../components/GeneralList"
import PortfolioList from "./PorfolioList"
import AppDetails from "../components/AppDetails"

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar /> 
                <AddAppForm />
                <GeneralList />
                <PortfolioList />
                <AppDetails />
            </div>
        );
    }
}

export default Home;
