import {fromJS} from 'immutable';
import React from 'react';
import ReactDOM from 'react-dom';
import {
	renderIntoDocument,
	scryRenderedDOMComponentsWithTag,
	Simulate
} from 'react-addons-test-utils';

import Validator from '../../src/components/Validator';

describe('Validator', () => {


	it('renders a input field for the url', () => {
		const component = renderIntoDocument(<Validator />);
		const elements = scryRenderedDOMComponentsWithTag(component, 'input');
		expect(elements.length).toEqual(1);
	});

	it('renders a textarea for the user to input the model', () => {
		const component = renderIntoDocument(<Validator />);
		const elements = scryRenderedDOMComponentsWithTag(component, 'textarea');
		expect(elements.length).toEqual(1);
	});

	it('renders a button to validate the model', () => {
		const component = renderIntoDocument(<Validator />);
		const elements = scryRenderedDOMComponentsWithTag(component, 'button');
		expect(elements.length).toEqual(1);
	});

	xit('fails to validate a model', () => {

		let validateWith;
		const validate = (entry) => {console.log(validateWith);validateWith = entry;};
		
		const component = renderIntoDocument(
				<Validator 
					swaggerUrl={"http://localhost/~iago/swagger.json"} 
					jsonObject={"{\"algo\":\"algo\"}"} 
					validate={validate}/>
		);
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
		Simulate.click(buttons[0]);
		console.log(validateWith);
		expect(validateWith).toEqual(fromJS({valid:false}));
	});

});