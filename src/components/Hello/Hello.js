import React, { Component } from 'react';
import logo from './movie-reel.png';
import './Hello.css';

class Hello extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>{this.props.appName}</h2>
                </div>
            </div>
        )
    }
}

export default Hello;