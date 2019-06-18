import React, { Component } from 'react';
import Searchbar from "./Searchbar"

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    <h1 onClick={this.props.home}><i className="fas fa-fire-alt"></i> APPreciate</h1>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a onClick={this.props.viewPortfolio} className="nav-link" href="#">My Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Add App</a>
                        </li>
                    </ul>
                    {
                        (!this.props.portfolio && !this.props.selectedApp)
                            ? <Searchbar updateSearchTerm={this.props.updateSearchTerm}/>
                            : null
                    }
                    
                </div>
            </nav>
        );
    }
}

export default Navbar;
