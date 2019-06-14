import React, { Component } from 'react';
import Application from "./AppDetails"

class GeneralList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.apps.map(app => <Application app={app} />)
                }
            </div>
        );
    }
}

export default GeneralList;