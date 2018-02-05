import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';

module.exports = class Root extends Component {
  render() {
    console.log("root container render");
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <App />
          {/* Add Debugging tools or dev components here */}
          
        </div>
      </Provider>
    );
  }
};
