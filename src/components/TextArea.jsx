import React from 'react';
import Swagger from 'swagger-client';
import SwaggerValidator from 'swagger-model-validator';


const TextArea = React.createClass({
  validate: function(url, modelName, jsonObject,callback) {
	console.log("Validate");
	let swagger = new Swagger({
		url:url,
		success:function(){
			let validator = new SwaggerValidator(swagger);
			console.log("Hola");
			let result = swagger.validateModel(modelName, jsonObject, true, true)
			console.log(result);
			callback(result, swagger);
		}
	
	});  
  },
  getJsonObject() {
	return this.props.swagger.json || {};  
  },
  getSwaggerUrl() {
	return this.props.swagger.url || "";  
  },
  render: function() {
    return <div className="validator">
	    		<input  />
	    		<textarea ></textarea>
	    		<button onClick={() => this.validate(this.getSwaggerUrl(), this.getJsonObject(), this.props.validate) }>Validate</button>
    	   </div>;
  }
});

export default TextArea;