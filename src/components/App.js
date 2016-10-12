import React, { Component } from 'react';
import Hello from './Hello/Hello';
import NavigationBar from './Navigation/NavigationBar';
import Alert from 'react-s-alert';

class App extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Hello appName="My React Movie App" />
        <NavigationBar />
        {this.props.children}
        <Alert stack={{limit: 3}} />
      </div>
    );
  }
}

export default App;
