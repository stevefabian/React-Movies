import React, { Component } from 'react';
import Hello from './Hello/Hello';
import NavigationBar from './Navigation/NavigationBar';

class App extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Hello appName="My React Movie App" />
        <NavigationBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
