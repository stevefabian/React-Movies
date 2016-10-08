import React, { Component } from 'react';

import Hello from './components/Hello/Hello';
import Navigation from './components/Navigation/NavigationComponent';
import Search from './components/Search/SearchComponent';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Hello appName="My React Movie App" />
        <Navigation appName="Movies" />
        <Search />
      </div>
    );
  }
}

export default App;
