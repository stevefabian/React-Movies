import React, { Component } from 'react';
import { Link } from 'react-router';
import './Navigation.css';

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.homeMenu = 'Search';
    }
    render() {
        return (
            <div className='nb-container'>
            <ul className="nav nav-pills">
                <li role="presentation">
                    <Link to='favorites' activeClassName='active'>Favorites</Link>
                </li>
                <li role="presentation">
                    <Link to='search' activeClassName='active'>Search</Link>
                </li>
                <li role="presentation">
                    <Link to='about' activeClassName='active'>About</Link>
                </li>
                </ul>
            </div>
        )
    };
}

export default NavigationBar;