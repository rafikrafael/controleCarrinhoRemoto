import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './Reducer';
import Routes from './Routes';

import { setDefault } from './SocketIO/configSocketIO';
 
class App extends Component {

  constructor(props) {
    super(props);
    this.store = createStore(
      reducers,
      {},
      applyMiddleware(ReduxThunk)
    );
    setDefault(this.store.dispatch, this.store.getState);
  }

  render() {    
    return (
      <Provider store={this.store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;