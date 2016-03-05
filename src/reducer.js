import {Map} from 'immutable';
import { combineReducers } from 'redux';
import loadSwagger from './actions/loadSwagger';
import validate from './actions/validate';
import viewScheme from './actions/viewScheme';


export default combineReducers({
	  swagger:loadSwagger,
	  validate:validate,
	  scheme: viewScheme
	});
