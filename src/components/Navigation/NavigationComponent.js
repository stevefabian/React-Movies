import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.homeMenu = 'Search';
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                  <div className="container-fluid">
                    <div className="navbar-header">
                      <a className="navbar-brand" href="#">{this.props.appName}</a>
                    </div>
                    <ul className="nav navbar-nav">
                      <li className="active"><a href="#">{this.homeMenu}</a></li>
                    </ul>
                  </div>
                </nav>
            </div>
        )
    };
}

export default Navigation;