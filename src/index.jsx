import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {SET_STATE} from './actions/actions';
import ValidatorContainer from './containers/ValidatorContainer';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
  	<ValidatorContainer />
  </Provider>,
  document.getElementById('main')
);
