import React, { Component } from 'react';
import Searchbar from "./Searchbar"

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">
                    <h1 onClick={this.props.deselectApp}><i class="fas fa-fire-alt"></i> APPreciate</h1>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarColor02">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a onClick={this.props.deselectApp} class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Add new app</a>
                        </li>
                    </ul>
                    <Searchbar />
                </div>
            </nav>
        );
    }
}

export default Navbar;
