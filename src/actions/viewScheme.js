import {Map} from 'immutable';
import {VIEW_SCHEME} from './actions';

function setState(state, newState) {
	// return Object.assign({}, state, newState);
  return state.merge(newState);
}
export default function(state = Map(), action) {
	switch(action.type) {
		case VIEW_SCHEME:
			return setState(state, action.scheme);
	}
	return state;
}