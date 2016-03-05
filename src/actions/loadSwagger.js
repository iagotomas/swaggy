import {Map} from 'immutable';
import {LOAD_SWAGGER_URL} from './actions';

function setState(state, newState) {
	// return Object.assign({}, state, newState);
  return state.merge(newState);
}
export default function(state = Map(), action) {
	switch(action.type) {
		case LOAD_SWAGGER_URL:
			return setState(state, action.swagger);
	}
	return state;
}