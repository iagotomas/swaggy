import {Map} from 'immutable';
import {VALIDATE} from './actions';

function setState(state, newState) {
	// return Object.assign({}, state, newState);
  return state.merge(newState);
}
export default function(state = Map(), action) {
	switch(action.type) {
		case VALIDATE:
			return setState(state, action.validate);
	}
	return state;
}