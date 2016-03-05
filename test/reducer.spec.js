import {List, Map, fromJS} from 'immutable';
import {LOAD_SWAGGER_URL, VALIDATE, VIEW_SCHEME} from '../src/actions/actions';
import reducer from '../src/reducer';

describe('reducer', () => {

  it('handles LOAD_SWAGGER_URL', () => {
    const initialState = Map();
    const action = {
      type: LOAD_SWAGGER_URL,
      swagger: Map({
        url: "http://localhost"
      })
    };
    const nextState = reducer(initialState, action);

    expect(nextState.swagger).toEqual(fromJS({
    	url:"http://localhost"
    }));
  });
  
  it('handles LOAD_SWAGGER_URL with plain JS payload', () => {
	  const initialState = Map();
	  const action = {
	    type: LOAD_SWAGGER_URL,
	    swagger: {
	    	url:"http://localhost"
	    }
	  };
	  const nextState = reducer(initialState, action);

	  expect(nextState.swagger).toEqual(fromJS({
	    	url:"http://localhost"
	    }));
	});
  
  it('handles LOAD_SWAGGER_URL without initial state', () => {
    const action = {
    	      type: LOAD_SWAGGER_URL,
    	      swagger: Map({
    	        url: "http://localhost"
    	      })
    	    };
	  const nextState = reducer(undefined, action);

	  expect(nextState.swagger).toEqual(fromJS({
		  url:"http://localhost"
	  }));
	});
  
  it('handles VALIDATE', () => {
    const action = {
    	      type: VALIDATE,
    	      validate: Map({
    	        swagger: null
    	      })
    	    };
	  const nextState = reducer(undefined, action);

	  expect(nextState.validate).toEqual(
			  Map({swagger:null})
	     );
	});
  	
  it('handles VIEW_SCHEME', () => {
	    const action = {
	    	      type: VIEW_SCHEME,
	    	      scheme: Map({
	    	        definition: null
	    	      })
	    	    };
		  const nextState = reducer(undefined, action);

		  expect(nextState.scheme).toEqual(
				  Map({definition:null})
		     );
		});

});