import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import SampleComponent from './component/SampleComponent';
import store from './container/store/store'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Provider store = {store}>
      <div>
        <SampleComponent></SampleComponent>
      </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
